import { styled, Stack, FormControl } from "@mui/material";

export const Background = styled(Stack)(({ theme }) => ({
    background: theme.beige,
    minHeight: "1280px",
}));

export const FormContainer = styled(Stack)(({ theme }) => ({
    gap: "20px",
    margin: "0 20%",
    alignItems: "center",

    [theme.breakpoints.down('sm')]: {
        margin: '1rem'
    }
}));

export const Form = styled('form')(({ theme }) => ({
    display: "grid",
    aspectRatio: '3/4',
    background: "white",
    padding: "3rem",

    [theme.breakpoints.down('sm')]: {
        width: '300px',
        padding: '1rem'
    }
}));

export const Control = styled(FormControl)(({ theme }) => ({
    margin: "2rem",

    [theme.breakpoints.down('sm')]: {
        margin: "1rem 0rem",
    }
}));

export const Header = styled("div")({
    margin: "5%",
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
    position: "relative",
});

export const Label = styled("label")({
    fontSize: "20px",
    fontWeight: "bold",
});

export const Input = styled("input")({
    width: "100%",
    padding: "8px",
    margin: "10px 0",
});

export const Textarea = styled("textarea")({
    width: "100%",
    padding: "8px",
    margin: "10px 0",
});
