"use client";
import React, { useEffect } from "react";
import * as z from "zod";
import { LoginSchema } from "@/schema";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Cardwraper from "./Card-wraper";
import { Button, CircularProgress, IconButton, InputAdornment, TextField, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import { useSignInMutation } from "@/store/api/auth";
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useRouter } from "next/navigation";
import { Diversity1 } from "@mui/icons-material";
import Image from "next/image";
import { color } from "framer-motion";

const Loginform = () => {
  const Router = useRouter();
  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [SignIn, { isLoading, isSuccess }] = useSignInMutation();
  useEffect(() => {
    if (isSuccess) {
      Router.push("/admin");
      // Router.refresh();
    }
  }, [isSuccess]);

  const handleSubmits = async (value: any) => {
    // console.log(value);
    await SignIn(value).then((res) => {
      console.log(res);
    });
  };

  const [showPassword, setShowPassword] = React.useState(false);

  return (
    // <div className="w-full flex items-center justify-center flex-col">

    <Cardwraper headrLabel="Welcome Back">

      <form
        onSubmit={handleSubmit(handleSubmits)}
        className="flex flex-col space-y-4 gap-3 max-w-md mx-auto"
      >
        <Controller
          name="username"
          control={control}
          rules={{
            required: "Email is required",
            minLength: {
              value: 5,
              message: "Email should be at least 5 characters",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              error={!!errors.username}
              helperText={errors.username?.message}
              variant="filled"
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type={showPassword ? "text" : "password"}
              label="Password"
              error={!!errors.password}
              helperText={errors.password?.message}
              variant="filled"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title="Show Password" arrow>
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(t => !t)}
                        edge="end">
                        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>)
              }}
            />
          )}
        />

        <Link
          href={"/auth/forget-password"}
          className="w-full flex text-blue-500 underline justify-end"
        >
          Forgot Password
        </Link>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ padding: 4 }}
        >
          {isLoading ? (
            <CircularProgress
              size={20}
              sx={{
                color: "white",
              }}
            />
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </Cardwraper>
    // </div>
  );
};

export default Loginform;
