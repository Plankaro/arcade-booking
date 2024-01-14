"use client";

import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useAlert } from '../shared/Alert';
import { useChangePasswordMutation } from '@/store/api/auth';
import * as yup from 'yup';
import Input from '@/components/shared/Input';

type ShowPasswordState = {
  oldPassword: boolean;
  newPassword: boolean;
  confirmNewPassword: boolean;
}

const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required('Old password is required'),
  newPassword: yup.string().required('New password is required'),
  confirmNewPassword: yup.string().required('Confirm new password is required'),
});

const ChangePasswordForm = ({ id }: { id: string }) => {
  console.log("-> id in changePasswordform", id);
  const { setAlert } = useAlert();
  const [ChangePassword, { isLoading: isPasswordChanging }] = useChangePasswordMutation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<any>({
    defaultValues: { userId: id, oldPassword: '', newPassword: '', confirmNewPassword: '' },
    resolver: yupResolver(changePasswordSchema),
  });
  const [showPassword, setShowPassword] = React.useState<ShowPasswordState>({
    oldPassword: true,
    newPassword: true,
    confirmNewPassword: true,
  });

  const onSubmit = async (data: any) => {
    console.log({ data });
    try {
      const res = await ChangePassword(data).unwrap();
      setAlert({
        text: res.message ?? "Password changed successfully",
        severity: 'success',
      });
      reset();
    } catch (error: any) {
      console.log("-> error", error);
      setAlert({
        text: error.message ?? "Couldn't change password",
        severity: 'error',
      });
    }
    ChangePassword(data).unwrap()
      .then((res: any) => {
        console.log(res);
        setAlert({
          text: res.message ?? "Password changed successfully",
          severity: 'success',
        });
        reset();
      }).catch((err: any) => {
        console.log(err);
        setAlert({
          text: err.message ?? "Couldn't change password",
          severity: 'error',
        });
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '400px',
      }}>
        <Input
          id='oldPassword'
          label="Old Password"
          type={showPassword.oldPassword ? 'text' : 'password'}
          name='oldPassword'
          register={register}
          error={errors?.oldPassword}
          inputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                setShowPassword((prevState) => ({
                  ...prevState,
                  oldPassword: !prevState.oldPassword
                }))
              }}>
                {showPassword.oldPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            )
          }}
        />
        <Input
          id='newPassword'
          label="New Password"
          type={showPassword.newPassword ? 'text' : 'password'}
          name='newPassword'
          register={register}
          error={errors?.newPassword}
          inputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                setShowPassword((prevState) => ({
                  ...prevState,
                  newPassword: !prevState.newPassword
                }))
              }}>
                {showPassword.newPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            )
          }}
        />
        <Input
          id='confirmNewPassword'
          label="Confirm New Password"
          type={showPassword.confirmNewPassword ? 'text' : 'password'}
          name='confirmNewPassword'
          register={register}
          error={errors?.confirmNewPassword}
          inputProps={{
            endAdornment: (
              <IconButton onClick={() => {
                setShowPassword((prevState) => ({
                  ...prevState,
                  confirmNewPassword: !prevState.confirmNewPassword
                }))
              }}>
                {showPassword.confirmNewPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            )
          }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          // disabled={isPasswordChanging}
          sx={{
            mt: 2,
            alignSelf: 'flex-start',
          }}
        >
          Save
        </Button>
      </Box>
    </form>
  )
}

export default ChangePasswordForm
