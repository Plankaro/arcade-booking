import React, { FC } from 'react'
import Backdrop from '@mui/material/Backdrop';
import SharedButton from './shared/Button'
import BookingForm from './specific/BookingForm';

interface RoomDetailsProps {
  building: string
  floor: string
  room: string
  data:any
}


const RoomDetails: FC<RoomDetailsProps> = ({
  building,
  floor,
  room,
  data
}) => {
  const [open, setOpen] = React.useState(false);
  const handleModelClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className='w-full flex flex-col items-center gap-y-7 justify-center p-3 text-white'>
      {
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <BookingForm room_id={"0"} data={data} handleModelClose={handleModelClose}  building={building} floor={floor} room={room} />
        </Backdrop>
      }

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minima quibusdam nesciunt explicabo, quam quas molestiae dolore voluptas fuga doloribus. Quo non tenetur laboriosam veniam error labore culpa optio rerum!
      <div className='flex gap-4 w-full'>
        <SharedButton title='Book Now' onClick={handleOpen} />
        <SharedButton title='VR Tour' />
      </div>
    </div>
  )
}

export default RoomDetails
