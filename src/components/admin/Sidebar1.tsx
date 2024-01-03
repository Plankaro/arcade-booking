import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Stack
      sx={{
        height: "100%",
        paddingRight: "10px",
        paddingLeft: "10px",
      }}
    >
      <Button variant="contained" sx={{
        "&:hover": {
          backgroundColor: "#257FB5",
        },
      }} className="bg-[#257FB5]">Dashboard</Button>
    </Stack>
  );
};

export default Sidebar;
