"use client";
import React from "react";
import TextInput from "../shared/common/Input";
import { useForm } from "react-hook-form";
import Button from "../shared/common/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingFormSchema } from "@/resolvers/BookingForm";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  CircularProgress,
  Container,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { usePostBookingMutation } from "@/store/api/booking";
import { usePathname, useRouter } from "next/navigation";
import { useAlert } from "../shared/Alert";

interface BookingFormProps {
  room_id: string;
  handleModelClose: () => void;
  building: string;
  floor: string;
  room: string;
  data: any;
}

const BookingForm = ({
  room_id,
  handleModelClose,
  building,
  floor,
  room,
  data: Datas,
}: BookingFormProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(bookingFormSchema),
  });
  const { setAlert } = useAlert();

  const [ApplyForBooking, { isLoading }] = usePostBookingMutation();

  console.log(Datas);
  console.log(Datas?.[0]?.floors?.[0]?.rooms?.[0]?.id);
  const onSubmit = async (data: any) => {
    const Data = {
      type: Datas?.[0]?.type,
      floorId: Datas?.[0]?.floors?.[0]?.id,
      roomId: Datas?.[0]?.floors?.[0]?.rooms?.[0]?.id,
      ...data,
    };
    console.log({ Data });
    await ApplyForBooking(Data)
      .then((res: any) => {
        console.log(res);
        handleModelClose();

        // instead of going back we will show thankyou page
        // router.back();
        const url = pathname.split("/").slice(0, -1).join("/");
        console.log("🚀 ~ .then ~ url:", url)
        router.push(url + "?booked=true");

        setAlert({
          severity: "success",
          text: res?.message ?? "Booking Done Successfully",
        });
      })
      .catch((err: any) => {
        console.log(err);
        setAlert({
          severity: "error",
          text: err?.message ?? "Booking Failed",
        });
      });
  };

  return (
    <div className="max-w-[550px] w-[95vw] sm:w-[90vw] md:w-[500px] bg-white p-3 md:p-4 rounded-md relative">
      <IconButton
        sx={{
          position: "absolute",
          top: -7,
          right: -7,
        }}
        onClick={handleModelClose}
      >
        <CancelIcon sx={{ color: "#FF7E16", fontSize: 30 }} />
      </IconButton>

      <h1 className="text-2xl text-black font-bold text-center">
        Book Your Apartment
      </h1>

      <h5 className="text-lg text-black font-normal text-center mb-0">
        {building} - {floor} - {room}
      </h5>

      <Container maxWidth="sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} py={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="First Name"
                {...register("firstName")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Last Name"
                {...register("lastName")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="mobileNumber"
                {...register("mobileNumber")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Email" {...register("email")} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                {...register("description")}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="accent"
                type="submit"
                // isLoading={isSubmitting || isLoading}
                disabled={isSubmitting || isLoading}
              >
                {isLoading ? <CircularProgress size={20} /> : "Book Now"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default BookingForm;
