"use client";
import React from "react";
import * as z from "zod";
import { LoginSchema } from "@/schema";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Cardwraper from "./Card-wraper";
import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";

const Loginform = () => {
    const {
        formState: { errors },
        handleSubmit,
        register,
        control,
    } = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    return (
        <Cardwraper headrLabel="Welcome Back" showSocial>
            <form
                onSubmit={handleSubmit((value) => console.log(value))}
                className="flex flex-col space-y-4 gap-3 max-w-md mx-auto"
            >
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: "Username is required",
                        minLength: {
                            value: 5,
                            message: "Username should be at least 5 characters",
                        },
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Username"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            variant="outlined"
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
                            type="password"
                            label="Password"
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            variant="outlined"
                        />
                    )}
                />

                    <Link href={"/"} className="w-full flex text-blue-500 underline justify-end">
                        Forgot Password
                    </Link>
                
                <Button variant="contained" color="primary" type="submit">
                    Login
                </Button>
            </form>
        </Cardwraper>
    );
};

export default Loginform;
