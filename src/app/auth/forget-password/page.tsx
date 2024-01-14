"use client";
import Cardwraper from '@/components/admin/auth/Card-wraper'
import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material';
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
  const { register, handleSubmit, getValues, setError, clearErrors, formState: { errors } } = useForm();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [status, setStatus] = useState<"notVerified" | "verified">("notVerified");

  const getOtpSchema = yup.object().shape({
    email: yup.string().email().required(),
    // otp: yup.string().required(),
    // newPassword: yup.string().required().min(8),
    // confirmPassword: yup.string().required().min(8)
  })

  const handleSendOtp = async () => {
    try {
      const data = await getOtpSchema.validate(getValues());
      console.log(data);
      setStatus("verified")
    }
    catch (err: any) {
      setError(err.path, { message: err.message });
    }
  }
  const handleResetPassword = (data: any) => {
    console.log(data);
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
        {status === "notVerified" &&
          <>
            <TextField
              id="email"
              label="Email"
              variant="filled"
              fullWidth
              type="email"
              required
              error={errors.email ? true : false}
              helperText={errors.email ? "Invalid email"  : " "}
              // onChange={() => clearErrors("email")}
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[com]{2,4}$/,
                onChange: () => clearErrors("email"),
              })}
            />
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

        {status === "verified" &&

          <>
            <TextField
              id="otp"
              label="OTP"
              variant="filled"
              fullWidth
              required
              error={errors.otp ? true : false}
              helperText={errors.otp ? "Invalid OTP" : " "}
              {...register("otp", {
                required: true,
              })}
            />
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
              helperText={errors.newPassword ? "Passwords not same" : " "}
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
              helperText={errors.confirmPassword ? "Passwords not same" : " "}
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