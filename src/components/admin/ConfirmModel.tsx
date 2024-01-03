import { Button, IconButton } from "@mui/material";
import React, { FC } from "react";
import CloseIcon from '@mui/icons-material/Close';
interface ConfirmModelProps {
    title: string;
    onClick: (() => void);
    buttonLabel: string;
    handelModelClose: (() => void)

}

const ConfirmModel: FC<ConfirmModelProps> = ({ title, onClick, buttonLabel, handelModelClose }) => {
    return (
        <div className="w-full h-full z-30 fixed top-0 bg-neutral-700/50 flex items-center justify-center">
            <div className="min-w-[300px] w-[350px] relative border rounded-md bg-white flex items-center justify-center p-4">
                <IconButton sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    cursor: "pointer"

                }}  onClick={() => handelModelClose()}>
                    <CloseIcon />
                </IconButton>
              <div className="flex gap-6 py-4 items-center justify-center flex-col">
                    <h1 className="text-3xl font-semibold">Confirm {title}</h1>
                    <Button variant="contained" fullWidth onClick={onClick}>
                        {buttonLabel}
                    </Button>
              </div>
            </div>
        </div>
    );
};

export default ConfirmModel;
