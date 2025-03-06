import { styled, Card, CardActionArea } from "@mui/material";

export const CustomCard = styled(Card)(({ theme }) => ({
    borderRadius: "20px",
    height: "25vw",
    margin: "0px 20px",
    flex: 1,

    [theme.breakpoints.down('sm')]: {
        margin: "5px",
        borderRadius: "10px",
        flex: '1 0 45%'
    },

    [theme.breakpoints.up('sm')]: {
        margin: "0px 10px",
    }
}));

export const CustomCardActionArea = styled(CardActionArea)(({ theme }) => ({
    height: '100%',
}));

export const Title = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "65%",
    width: "100%",
    margin: "20px",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "",
    transition: "all 0.35s ease-in-out",
    opacity: 1,
    zIndex: 1,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',

    [theme.breakpoints.down('sm')]: {
        top: "45%",
        fontSize: "16px",
        margin: "10px",
    },

    [theme.breakpoints.down('md')]: {
        top: "55%",
        fontSize: "20px",
        margin: "15px",
    },
}));

export const SubTitle = styled("div")({
    position: "absolute",
    top: "75%",
    width: "100%",
    margin: "20px",
    color: "white",
    fontSize: "18px",
    transition: "all 0.35s ease-in-out",
    zIndex: 1,
});

export const GradientShadow = styled("div")({
    background:
        "linear-gradient(0deg, rgba(117, 205, 255, 0.8), rgba(0, 0, 0, 0))",
    position: "absolute",
    top: "0%",
    height: "100%",
    width: "100%",
    transition: "all 0.35s ease-in-out",
    " &:hover": {
        opacity: 0,
    },
    "&:hover ~ $Title": {
        opacity: 0,
    },
    "&:hover ~ $CardBackground": {
        height: "500px",
    },
});
