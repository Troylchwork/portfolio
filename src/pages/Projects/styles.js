import { styled, Stack, Typography } from "@mui/material";

export const Background = styled(Stack)(({ theme }) => ({
    background: theme.beige,
    paddingBottom: "5rem",
}));

export const BackgroundImg = styled("img")(({ theme }) => ({
    objectFit: "cover",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
        height: "250px",
    },
    [theme.breakpoints.up("sm")]: {
        height: "450px",
    },
    [theme.breakpoints.up("md")]: {
        height: "650px",
    },
}));

export const BGTitle = styled(Typography)(({ theme }) => ({
    position: "absolute",
    color: "white",
    fontWeight: "bold",
    fontFamily: "math, serif",
    textShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",

    [theme.breakpoints.down("sm")]: {
        top: 130,
        left: 25,
        fontSize: 30,
    },
    [theme.breakpoints.up("sm")]: {
        top: 200,
        left: 35,
        fontSize: 50,
    },
    [theme.breakpoints.up("md")]: {
        top: 290,
        left: 80,
        fontSize: 65,
    },
}));

export const BGSubTitle = styled(Typography)(({ theme }) => ({
    position: "absolute",
    color: "white",
    fontWeight: "bold",

    [theme.breakpoints.down("sm")]: {
        top: 170,
        left: 25,
        fontSize: 12,
    },
    [theme.breakpoints.up("sm")]: {
        top: 260,
        left: 35,
        fontSize: 18,
    },
    [theme.breakpoints.up("md")]: {
        top: 375,
        left: 80,
        fontSize: 24,
    },
}));

export const ProjectContainer = styled("div")(({ theme }) => ({
    display: "flex",
    margin: "1rem",
    marginTop: '2rem',

    [theme.breakpoints.down("sm")]: {
        flexWrap: 'wrap'
    },
}));

export const Title = styled(Stack)({
    fontSize: "48px",
    fontWeight: "bold",
    padding: "40px 60px 0px 60px",
});
