import { styled, Stack, Box } from "@mui/material";

export const Background = styled(Stack)(({ theme }) => ({
    background: theme.beige,
}));

export const Image = styled(Box)(({ theme }) => ({
    height: "540px",
    width: "960px",
    borderRadius: "20px",
    [theme.breakpoints.down('sm')]: {
        width: "100%",
        height: 'auto'
    }
}));

export const SystemContainer = styled(Stack)(({ marginTop, theme }) => ({
    width: "960px",
    alignItems: "center",
    marginTop: marginTop ? "10px" : "0px",

    [theme.breakpoints.down('sm')]: {
        width: "100%"
    }
}));
