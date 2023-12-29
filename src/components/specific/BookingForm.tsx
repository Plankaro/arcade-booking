import React from 'react'
import TextInput from '../shared/common/Input';
import { useForm } from 'react-hook-form';
import Button from '../shared/common/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { bookingFormSchema } from '@/resolvers/BookingForm';

interface BookingFormProps {
  room_id: string;
}

const BookingForm = ({ room_id }: BookingFormProps) => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isLoading } } = useForm({
    resolver: yupResolver(bookingFormSchema),
  });
  const submitForm = async (data: any) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log({ data, room_id });
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className=' flex flex-col gap-3'>
          <TextInput
            name="fullName"
            placeholder='Full name'
            register={register}
            error={errors.fullName?.message}
          />
          <TextInput
            name="phone"
            placeholder='Phone number'
            register={register}
            error={errors.phone?.message}
          />
          <TextInput
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
      </form>
    </>
  )
}

export default BookingForm;
