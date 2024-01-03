import Sidebar from "@/components/(Admin)/Sidebar";
import RotateToLandscapeNotifier from "@/components/specific/Home/RotateToLandscapeNotifier";
import { Box } from "@mui/material";
import React, { FC } from "react";

import { ToastContainer } from "react-toastify";

interface LayoutProps {
    children: React.ReactNode;
}
const layout: FC<LayoutProps> = ({ children }) => {
    return (
        <Box sx={{
            minHeight:"100vh"
        }}>
            <Sidebar>
                {children}
            </Sidebar>
        </Box>
    );
};

export default layout;
