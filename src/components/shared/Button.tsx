import React, { FC } from "react";
import { Button } from "@mui/material";

interface ButtonProps {
    title: string;
    onClick?: () => void;
}
const SharedButton: FC<ButtonProps> = ({ title, onClick }) => {
    return (
        <Button
            className="w-full "
            sx={{
                "&:hover": {
                    backgroundColor: "#FF8015",
                },
                backgroundColor: "#FF8015",
            }}
            variant="contained"
            fullWidth
            onClick={onClick}
        >
            {title}
        </Button>
    );
};

export default SharedButton;
