import { SxProps } from "@mui/material";

export interface ColourButtonInterface {
    key: string;
    color: string;
    active: boolean;
    loading: boolean;
    sx: SxProps;
}