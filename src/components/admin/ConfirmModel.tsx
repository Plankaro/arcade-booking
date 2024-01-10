import { Button, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
interface ConfirmModelProps {
    title: string;
    onClick: (() => void);
    buttonLabel: string;
    handelModelClose: (() => void)

}

const ConfirmModel: FC<ConfirmModelProps> = ({ title, onClick, buttonLabel, handelModelClose }) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
                <div className="min-w-[300px] w-[350px] relative border rounded-md bg-white flex items-center justify-center p-4">
                    <IconButton sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        cursor: "pointer"

                    }} onClick={() => handelModelClose()}>
                        <CloseIcon />
                    </IconButton>
                    <div className="flex gap-6 py-4 items-center justify-center flex-col">
                        <Typography variant="h2" color={"#257FB5"}>{title}</Typography>
                        <Button variant="contained" fullWidth onClick={onClick}>
                            {buttonLabel}
                        </Button>
                    </div>
                </div>
        </Backdrop>
    );
};

export default ConfirmModel;
