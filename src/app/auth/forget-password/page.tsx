"use client";
import Cardwraper from '@/components/admin/auth/Card-wraper'
import { useAlert } from '@/components/shared/Alert';
import { useForgetPasswordMutation, useSendOtpMutation, useVerifyOtpMutation } from '@/store/api/auth';
import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import * as yup from 'yup';

const ForgetPassword = () => {
  return (
    <Cardwraper headrLabel="Change Password">
      <ForgetPasswordForm />
    </Cardwraper>
  )
}

export default ForgetPassword

const ForgetPasswordForm = () => {
  const router = useRouter();
  const [SendOtp,
    {
      data: sendOtpData,
      // loading: sendOtpLoading,
      error: sendOtpError }] = useSendOtpMutation();
  const [VerifyOtp,
    {
      data: verifyOtpData,
      // loading: verifyOtpLoading,
      error: verifyOtpError }] = useVerifyOtpMutation();
  const [ResetPassword,
    {
      data: resetPasswordData,
      // loading: forgetPasswordLoading,
      error: forgetPasswordError }] = useForgetPasswordMutation();

  const { register, handleSubmit, getValues, setError, clearErrors, formState: { errors } } = useForm();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [status, setStatus] = useState<"emailEnter" | "otpEnter" | "verified">("emailEnter");
  const { setAlert } = useAlert();

  const getOtpSchema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const verifyOtpSchema = yup.object().shape({
    email: yup.string().email().required(),
    otp: yup.number().required(),
  });

  const resetPasswordSchema = yup.object().shape({
    email: yup.string().email().required(),
    otp: yup.number().required(),
    newPassword: yup.string().required().min(8),
    confirmPassword: yup.string().required().min(8)
  });

  const handleSendOtp = async () => {
    try {
      const data = await getOtpSchema.validate(getValues());
      console.log(data);
      const res = await SendOtp({ ...data }).unwrap();
      setAlert({
        severity: "success",
        text: res?.message ?? "OTP sent successfully",
      })
      setStatus("otpEnter");
    }
    catch (err: any) {
      if (err?.name === "ValidationError")
        setError(err?.path, { message: err.message });
      else {
        setAlert({
          severity: "error",
          text: err.message ?? "Something went wrong",
        });
        console.log(err);
      }
    }
    // finally {setStatus("otpEnter");}
  }
  const handleVerifyOtp = async () => {
    try {
      const data = await verifyOtpSchema.validate(getValues());
      console.log(data);
      const res = await VerifyOtp({ ...data }).unwrap();
      setAlert({
        severity: "success",
        text: res.message ?? "OTP verified successfully",
      });
      setStatus("verified");
    }
    catch (err: any) {
      if (err?.name === "ValidationError")
        setError(err?.path, { message: err.message });
      else {
        setAlert({
          severity: "error",
          text: err.message ?? "Something went wrong",
        });
        console.log(err);
      }
    }
    // finally {setStatus("verified");}
  }
  const handleResetPassword = async (data: any) => {
    console.log(data);
    try {
      const data = await resetPasswordSchema.validate(getValues());
      console.log(data);
      const res = await ResetPassword({ ...data }).unwrap();
      setAlert({
        severity: "success",
        text: res.message ?? "Password changed successfully",
      });
      // setStatus("verified")
      router.push("/auth/login");
    }
    catch (err: any) {
      if (err?.name === "ValidationError")
        setError(err.path, { message: err.message });
      else {
        setAlert({
          severity: "error",
          text: err.message ?? "Something went wrong",
        });
        console.log(err);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(handleResetPassword)}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '.5rem',
        width: '100%',
        padding: '1rem'
      }}>
        {status === "emailEnter" &&
          <>
            <TextField
              id="email"
              label="Email"
              variant="filled"
              fullWidth
              type="email"
              required
              error={errors.email ? true : false}
              helperText={errors.email && "Invalid email"}
              // onChange={() => clearErrors("email")}
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[com]{2,4}$/,
                onChange: () => clearErrors("email"),
              })}
            />

            <Link
              href={"/auth/login"}
              className="w-full flex text-blue-500 underline justify-end"
            >
              Back to login
            </Link>
            <Button
              onClick={handleSendOtp}
              type="button"
              variant='contained'
              fullWidth
              size='large'
            >
              Send OTP
            </Button>
          </>
        }

        {status === "otpEnter" &&
          <>
            <TextField
              id="otp"
              label="OTP"
              variant="filled"
              fullWidth
              required
              error={errors.otp ? true : false}
              helperText={errors.otp && "Invalid OTP"}
              {...register("otp", {
                required: true,
              })}
            />
            <Button
              onClick={handleVerifyOtp}
              type="button"
              variant='contained'
              fullWidth
              size='large'
            >
              Verify OTP
            </Button>
          </>
        }

        {status === "verified" &&
          <>
            <TextField
              id="newPassword"
              label="New Password"
              variant="filled"
              fullWidth
              type={showNewPassword ? "text" : "password"}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowNewPassword(t => !t)}
                      edge="end">
                      {showNewPassword ? <MdVisibilityOff /> : <MdVisibility />}
                    </IconButton>
                  </InputAdornment>)
              }}
              error={errors.newPassword ? true : false}
              helperText={errors.newPassword && "Passwords not same"}
              {...register("newPassword", {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/
              })}
            />
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              variant="filled"
              fullWidth
              type={showConfirmPassword ? "text" : "password"}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowConfirmPassword(t => !t)}
                      edge="end">
                      {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
                    </IconButton>
                  </InputAdornment>)
              }}
              error={errors.confirmPassword ? true : false}
              helperText={errors.confirmPassword && "Passwords not same"}
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === getValues("newPassword")
              })}
            />
            <Button
              type="submit"
              variant='contained'
              fullWidth
              size='large'
            >
              Send OTP
            </Button>
          </>
        }
      </Box>
    </form>
  )
};