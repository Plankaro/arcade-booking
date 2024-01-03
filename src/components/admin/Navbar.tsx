import React from 'react'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Box from "@mui/material/Box"
import Stack from '@mui/material/Stack';
import Logo from './Logo';

const Navbar = () => {
    return (
        <Stack direction={"row"} sx={{
            width: "100%",
            height: "3rem",
            alignItems: "center",
            justifyContent: "space-between",
            
        }}
        
        >
            <Logo />
            <Chip
                avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                label="Avatar"
                variant="outlined"
            />
        </Stack>
    )
}

export default Navbar
