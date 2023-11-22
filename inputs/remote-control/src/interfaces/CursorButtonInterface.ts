import { SxProps } from "@mui/material";
import { ReactElement } from "react";

export interface CursorButtonInterface {
    key: string;
    color: string;
    active: boolean;
    row: number;
    icon: ReactElement;
    sx: SxProps;
}