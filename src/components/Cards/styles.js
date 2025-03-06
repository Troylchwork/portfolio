import { styled, Box, Card, Divider, CardContent } from "@mui/material";

export const ResumeCard = styled(Card)(({ theme }) => ({
    padding: "20px",
    marginBottom: "20px",
    boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",
    borderRadius: "10px",
    "&:hover": {
        boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.29)",
    },

    [theme.breakpoints.down("sm")]: {
        margin: '10px',
        padding: "10px",
        marginBottom: "20px",
    },
}));

export const ResumeCardContent = styled(CardContent)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: "25% 65%",
    gap: "20px",
    whiteSpace: "pre-line",
    lineHeight: 1.5,
    [theme.breakpoints.down("sm")]: {
    },
}));

export const DefaultCard = styled(Card)({
    width: "500px",
    margin: "20px",
});

export const HomeCard = styled(Card)(({ theme }) => ({
    position: "absolute",
    background: theme.beige,
    alignItems: "center",
    width: "450px",
    height: "580px",
    top: 100,
    left: -450,
    padding: "20px",

    [theme.breakpoints.down('sm')]: {
        position: 'static',
        boxShadow: 'none',
    }
}));

export const HomeTitle = styled("div")(({ theme }) => ({
    fontWeight: "bold",
    fontSize: "34px",
}));

export const HomeSubTitle = styled("div")({
    fontSize: "16px",
    whiteSpace: 'pre-line'
});

export const BlueDivider = styled(Divider)(({ theme }) => ({
    borderBottomWidth: 3,
    width: "10%",
    background: theme.primary,
}));

export const ButtonGroup = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifySelf: 'center',
    marginTop: '20px'
});
