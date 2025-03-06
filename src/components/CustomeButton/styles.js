import { styled, Button } from "@mui/material";

export const DefaultButton = styled(Button)(({ theme }) => ({
    width: "162px",
    height: "42px",
    borderRadius: "16px",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "10px",

    [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
    },
}));
