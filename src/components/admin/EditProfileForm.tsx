"use client";
import { Controller, useForm } from 'react-hook-form';
import Input from '@/components/shared/Input';
import { CiEdit } from 'react-icons/ci';
import Image from 'next/image';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUpdateUserMutation } from '@/store/api/user';
import { Box, Button } from '@mui/material';
import { useAlert } from '../shared/Alert';

const schema = yup.object().shape({
  firstName: yup.string().notRequired(),
  lastName: yup.string().notRequired(),
  email: yup.string().email('Email is invalid').notRequired(),
  mobileNumber: yup.string().notRequired(),
  country: yup.string().notRequired(),
  region: yup.string().notRequired(),
  image: yup.object().shape({
    name: yup.string().notRequired(),
    data: yup.string().notRequired(),
  }).notRequired(),
});

const EditProfileForm = ({ id, refetch, setIsProfileUpdating, setShowEditProfileModal }: { id: string, refetch: any, setIsProfileUpdating: any, setShowEditProfileModal: any }) => {
  const { register, handleSubmit, control, watch, formState: { errors } } = useForm();
  const { setAlert } = useAlert();

  const [UpdateUser, { isLoading, isSuccess, isError }] = useUpdateUserMutation();
  const onSubmit = async (data: any) => {
    // setIsProfileUpdating(true);
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    try {
      const res = await UpdateUser({ ...filteredData, role: "Admin", id }).unwrap();
      console.log("-> res", res)
      setAlert({
        text: res.message ?? "Profile updated successfully",
        severity: 'success',
      });
    } catch (error: any) {
      console.log("-> error", error);
      setAlert({
        text: error.message ?? "Couldn't update profile",
        severity: 'error',
      });
    } finally {
      setIsProfileUpdating(false);
      refetch();
      setShowEditProfileModal(false);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'start',
        justifyContent: 'center',
        p: 4,
      }}>
        <label
          htmlFor="courseImage"
          className="text-sm border-[0px] border-gray-600 md:h-[150px] h-auto  w-[150px] rounded-full font-medium  cursor-pointer text-gray-700 flex flex-col justify-between items-center mx-auto"
        >
          <div className="flex flex-col items-center w-full h-full justify-center">
            {watch("image")?.data ? (
              <Image
                width={150}
                height={150}
                className="w-full h-full rounded-full"
                src={watch("image")?.data as any}
                alt="profile pic"
              />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <CiEdit size={45} />
                <h5 className="text-sm font-medium">Upload Image</h5>
              </div>
            )}
            <p>
              {watch("image")?.name
                ? watch("image")?.name
                : "No file selected"}
            </p>
          </div>
          <Controller
            name={"image"}
            control={control}
            render={({ field }) => {
              const { onChange, value, ...restField } = field;
              return (
                <input
                  type="file"
                  id="courseImage"
                  className="mt-1 hidden"
                  onChange={(e) => {
                    if (e.target.files) {
                      const reader = new FileReader();
                      const file = e.target.files[0];
                      reader.readAsDataURL(file);
                      reader.onload = (e) => {
                        const target = e.target as FileReader;
                        target.result &&
                          onChange({
                            name: file.name,
                            data: target.result.toString(),
                          });
                      };
                    }
                  }}
                  {...restField}
                />
              );
            }}
          />
        </label>
        <Input
          id='firstName'
          name='firstName'
          label='First Name'
          type='text'
          register={register}
          error={errors.firstName}
        />
        <Input
          id='lastName'
          name='lastName'
          label='Last Name'
          type='text'
          register={register}
          error={errors.lastName}
        />
        {/* <Input
          id='email'
          name='email'
          label='Email'
          type='email'
          register={register}
          error={errors.email}
        /> */}
        <Input
          id='mobileNumber'
          name='mobileNumber'
          label='Mobile Number'
          type='text'
          register={register}
          error={errors.mobileNumber}
        />
        <Input
          id='country'
          name='country'
          label='Country'
          type='text'
          register={register}
          error={errors.country}
        />
        <Input
          id='region'
          name='region'
          label='Region'
          type='text'
          register={register}
          error={errors.region}
        />
        <Button type='submit' variant='contained'>
          Save
        </Button>
      </Box>
    </form>
  )
}

export default EditProfileForm;