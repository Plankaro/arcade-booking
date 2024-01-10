import React, { FC } from "react";
import { SvgIconComponent } from "@mui/icons-material";
import {
    Tooltip,
    Button,
    ButtonPropsVariantOverrides,
    ButtonPropsColorOverrides,
} from "@mui/material";

interface TableButtonProps {
    toolTipTitle: string;
    toolTipPosition:
    | "bottom"
    | "left"
    | "right"
    | "top"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start"
    | undefined;
    variant: "text" | "outlined" | "contained" | undefined;
    color: any;
    size: any;
    icon: SvgIconComponent;
    onclick: () => void;
}

const TableButton: FC<TableButtonProps> = ({
    toolTipTitle,
    toolTipPosition,
    variant,
    color,
    size,
    icon: Icon,
    onclick,
}) => {
    return (
        <Tooltip title={toolTipTitle} placement={toolTipPosition}>
            <Button variant={variant} color={color} onClick={onclick} size={size}>
                {" "}
                <Icon />
            </Button>
        </Tooltip>
    );
};

export default TableButton;
