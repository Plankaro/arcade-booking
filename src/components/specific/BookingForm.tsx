import React from "react";
import TextInput from "../shared/common/Input";
import { useForm } from "react-hook-form";
import Button from "../shared/common/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingFormSchema } from "@/resolvers/BookingForm";
import CancelIcon from "@mui/icons-material/Cancel";
import { Container, Grid, IconButton, TextField } from "@mui/material";
import { usePostBookingMutation } from "@/store/api/booking";
import { useRouter } from "next/navigation";

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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(bookingFormSchema),
  });

  const [ApplyForBooking, { isLoading }] = usePostBookingMutation();

  // console.log(Datas?.[0]?.floors?.[0]?.id);
  // console.log(Datas?.[0]?.floors?.[0]?.rooms?.[0]?.id);
  const onSubmit = async (data: any) => {
    const Data = {
      type: Datas?.[0]?.type,
      floorId: Datas?.[0]?.floors?.[0]?.id,
      roomId: Datas?.[0]?.floors?.[0]?.rooms?.[0]?.id,
      ...data,
    };
    // console.log({ Data });
    await ApplyForBooking(Data)
      .then((res: any) => {
        // console.log(res)
        handleModelClose();
        router.back();
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-[550px] w-[60vw] bg-white p-6 rounded-md relative">
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
      {/* <form onSubmit={handleSubmit(submitForm)}>
        <div className=' flex flex-col gap-[1vh]'>
          <TextInput
            required
            name="fullName"
            placeholder='Full name'
            register={register}
            error={errors.fullName?.message}
          />
          <TextInput
            required
            name="phone"
            placeholder='Phone number'
            register={register}
            error={errors.phone?.message}
          />
          <TextInput
            required
            name="email"
            placeholder='Email'
            register={register}
            error={errors.email?.message}
          />
          <TextInput
            name="message"
            placeholder='Messge'
            register={register}
            error={errors.message?.message}
          />
          <Button
            variant='accent'
            type='submit'
            isLoading={isSubmitting || isLoading}
            disabled={isSubmitting || isLoading}
          > Submit </Button>
        </div>
      </form> */}

      <Container maxWidth="sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="User Name"
                {...register("userName")}
              />
            </Grid>
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
                label="Description"
                {...register("description")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Email" {...register("email")} />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="accent"
                type="submit"
                isLoading={isSubmitting || isLoading}
                disabled={isSubmitting || isLoading}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default BookingForm;
