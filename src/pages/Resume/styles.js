import { styled, Stack } from "@mui/material";

export const Background = styled(Stack)(({ theme }) => ({
    background: theme.beige,
}));

export const ContentContainer = styled(Stack)(({ theme }) => ({
    gap: "1rem",
    margin: "0 2rem",

    [theme.breakpoints.down("sm")]: {
        margin: "0rem",
    },

}));

export const HeaderContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",
});

export const Header = styled("div")({
    margin: "5%",
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
});

export const SubHeader = styled("div")({
    margin: "20px 0px",
    fontWeight: "bold",
    fontSize: "28px",
    justifySelf: "center",
});

export const CardsContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
});

export const List = styled("ul")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    paddingLeft: "0px",

    li: {
        position: "relative",
        lineHeight: "1.5",


        [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
            padding: "0px 20px 0px 10px",

            "&::before": {
                content: '""',
                position: "absolute",
                left: "0",
                top: "6px",
                width: "6px",
                height: "6px",
                backgroundColor: theme.primary,
                borderRadius: "50%",
            },
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: "14px",
            padding: "0px 25px 0px 15px",

            "&::before": {
                content: '""',
                position: "absolute",
                left: "0",
                top: "8px",
                width: "8px",
                height: "8px",
                backgroundColor: theme.primary,
                borderRadius: "50%",
            },
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "16px",
            padding: "0px 35px 0px 20px",

            "&::before": {
                content: '""',
                position: "absolute",
                left: "0",
                top: "8px",
                width: "10px",
                height: "10px",
                backgroundColor: theme.primary,
                borderRadius: "50%",
            },
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "18px",
        },
    },
}));
