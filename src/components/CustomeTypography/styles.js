import { styled, Typography } from "@mui/material";

export const H1 = styled(Typography)(({ theme }) => ({
    margin: "2rem",
    fontWeight: "bold",
    paddingTop: '2rem',

    [theme.breakpoints.down("sm")]: {
        fontSize: "3rem",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "4rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "5rem",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "5rem",
    },
}));

export const H2 = styled(Typography)(({ theme }) => ({
    margin: "1rem",
    fontWeight:'bold',

    [theme.breakpoints.down("sm")]: {
        fontSize: "1.2rem",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "2rem",
    },
}));

export const H3 = styled(Typography)(({ theme }) => ({
    margin: "1rem 1rem 1rem 0rem",
    fontWeight: "bold",

    [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "20px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "22px",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "24px",
    },
}));

export const Title = styled(Typography)(({ theme }) => ({
    color: theme.primary,
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "18px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "20px",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "22px",
    },
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "16px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "18px",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "20px",
    },
}));

export const DefaultTypography = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "14px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "16px",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "18px",
    },
}));
