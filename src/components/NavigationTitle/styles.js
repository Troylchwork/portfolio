import { styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const NavButtonTitle = styled("nav")(({ theme }) => ({
    fontWeight: "bold",
    display: "flex",
    gap: "2rem",

    [theme.breakpoints.down("sm")]: {
        flexDirection: 'column',
        margin: '1rem'
    }
}));

export const NavLinkText = styled(Typography)(({ theme }) => ({
    borderBottom: "1px solid white",
    display: 'inline-block',

    ":hover": {
        borderBottom: "1px solid black",
    },
    [theme.breakpoints.down("sm")]: {
        color: 'white'
    }
}));
