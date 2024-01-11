"use client";
import React, { useEffect } from "react";
import * as z from "zod";
import { LoginSchema } from "@/schema";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Cardwraper from "./Card-wraper";
import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useSignInMutation } from "@/store/api/auth";
import { useRouter } from "next/navigation";
import { Diversity1 } from "@mui/icons-material";
import Image from "next/image";

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
        }
    }, [isSuccess]);

    const handleSubmits = async (value: any) => {
        // console.log(value);
        await SignIn(value).then((res) => {
            // console.log(res);
        });
    };

    return (
        <Cardwraper headrLabel="Welcome Back">
            <div className="w-full flex items-center justify-center">
                <Image
                    height={100}
                    width={100}
                    src={"/logo-new.png"}
                    alt="logo"
                    className="mr-4"
                />
            </div>
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

                {/* <Link
                    href={"/"}
                    className="w-full flex text-blue-500 underline justify-end"
                >
                    Forgot Password
                </Link> */}

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
    );
};

export default Loginform;
