"use client";
import ChangePasswordForm from '@/components/admin/ChangePasswordForm'
import { useGetSessionQuery } from '@/store/api/auth';
import { useGetUserByidQuery, useUpdateUserMutation } from '@/store/api/user';
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Modal from '@/components/shared/Modal';
import EditProfileForm from '@/components/admin/EditProfileForm';


const ProfilePage = () => {
  const { data: session } = useGetSessionQuery();
  const { data: userData, refetch, isLoading, isError } = useGetUserByidQuery(session?.userId ?? '', { skip: !session?.userId });
  console.log("-> user", session, userData);
  const capitalize = (str: string | undefined) => {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const [showEditProfileModal, setShowEditProfileModal] = React.useState(false);
  const [isProfileUpdating, setIsProfileUpdating] = React.useState(false);

  return (
    <div className="w-full h-full flex flex-col items-start justify-center">
      <h1 className="font-semibold text-xl text-[#257FB5] mt-3">
        Profile
      </h1>

      <div className="w-full h-full overflow-hidden">
        {" "}
      </div>

      <Section>
        {/* <SectionTitle title="Profile Information" gutter /> */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'start',
          justifyContent: 'center',
          '@media (min-width: 768px)': {
            flexDirection: 'row',
          },
        }}>
          <Box
            sx={{
              position: 'relative',
              borderRadius: '50%',
              minWidth: '200px',
              height: '200px !important',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              aspectRatio: '1/1',
            }}
          >
            {userData?.image ? (
              <img
                src={userData?.image?.url}
                alt={`${userData?.firstName} ${userData?.lastName}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  aspectRatio: '1/1',
                  borderRadius: '50%',
                }}
              />
            ) : (
              <AccountCircleOutlinedIcon
                sx={{
                  fontSize: '200px',
                  color: 'primary.main',
                }}
              />
            )}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              flexGrow: 1,
            }}
          >
            {userData?.firstName &&
              <Typography variant="h1" fontWeight={700}>
                {capitalize(userData?.firstName)} {userData?.lastName}
              </Typography>}
            {userData?.email &&
              <Typography variant="body1">
                <strong>Email:</strong> {userData?.email}
              </Typography>
            }
            {userData?.country &&
              <Typography variant="body1">
                <strong>Country:</strong> {userData?.country}
              </Typography>}
            {userData?.region &&
              <Typography variant="body1">
                <strong>region:</strong> {userData?.region}
              </Typography>}
            {userData?.mobileNumber &&
              <Typography variant="body1">
                <strong>Mobile:</strong> {userData?.mobileNumber}
              </Typography>}
            {userData?.createdAt &&
              <Typography variant="body1">
                <strong>Account Since:</strong> {new Date(userData?.createdAt).toLocaleDateString()}
              </Typography>}
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ alignSelf: 'flex-end' }}
            onClick={() => setShowEditProfileModal(true)}
          >
            Edit Profile
          </Button>
          {
            showEditProfileModal &&
            <Modal
              open={showEditProfileModal}
              setOpen={setShowEditProfileModal}
              heading='Edit Profile'
              subheading='Edit your profile information'
              isLoading={isProfileUpdating}

            >
              <EditProfileForm
                id={session?.userId}
                refetch={refetch}
                setIsProfileUpdating={setIsProfileUpdating}
                setShowEditProfileModal={setShowEditProfileModal}
              />
            </Modal>
          }
        </Box>
      </Section>
      <Section>
        <SectionTitle title="Change Password" gutter />
        <ChangePasswordForm
          id={session?.userId}
        />
      </Section>
    </div>
  )
}

export default ProfilePage



const Section = ({ children, sx }: { children: React.ReactNode, sx?: any }) => (
  <Box sx={{
    p: 4,
    // backgroundColor: '#fefefe',
    borderRadius: 4,
    mb: 4,
    width: '100%',
    ...sx
  }}>
    {children}
  </Box>
)

const SectionTitle = ({ title, gutter = false }: { title: string, gutter: boolean }) => (
  <Typography variant="h6" fontWeight={700} gutterBottom={gutter} color={'secondary.main'}>
    {title}
  </Typography>
)

