
import { styled, Card, CardMedia, Box, Stack } from "@mui/material";

export const CustomCard = styled(Card)(({ reverse, theme }) => ({
    display: "flex",
    margin: "20px",
    borderRadius: "10px",
    justifyContent: "space-between",
    maxWidth: "1600px",
    minWidth: "1200px",
    minHeight: "450px",
    boxShadow: theme.boxShadow,
    "&:hover": { boxShadow: theme.boxShadowHover },

    [theme.breakpoints.down("sm")]: {
        minWidth: "0px",
        flexDirection: reverse ? "column-reverse" : "column",
    },
}));

export const CustomCardMedia = styled(CardMedia)(({ theme }) => ({
    width: "40%",

    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },
}));

export const CardCotent = styled(Box)(({ textAlignR, theme }) => ({
    width: "50%",
    textAlign: textAlignR ? "end" : "start",

    [theme.breakpoints.down("sm")]: {
        width: "100%",
        textAlign: "start",
    },
}));

export const TitleContainer = styled(Box)({
    display: "flex",
    gap: "2rem",
    paddingTop: "3rem",
});

export const TitleContainerRight = styled(Box)(({ justifyContentR, theme }) => ({
    display: "flex",
    gap: "2rem",
    paddingTop: "3rem",
    justifyContent: justifyContentR ? "start" : "end",
    flexDirection: justifyContentR ? "row-reverse" : "row",
}));

export const ColorBlock = styled(Stack)(({ theme }) => ({
    background: theme.primary,
    width: "10px",
    borderRadius: "5px",
}));

export const Title = styled("div")(({ theme }) => ({
    color: theme.primary,
    fontWeight: "bold",
    fontSize: "22px",
}));

export const SubTitle = styled("div")({
    fontSize: "20px",
});

