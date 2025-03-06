import { styled, Box, Typography } from "@mui/material";

export const ContentContainer = styled("div")(({ theme }) => ({
    background: theme.beige,
    alignItems: "center",
}));

export const TitleBar = styled("div")({
    display: "flex",
    width: "100vw",
    height: "80px",
    backgroundColor: " white",
    position: "fixed",
    zIndex: 1,
    top: 0,
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
});

export const DesktopMenu = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "35px",
    flex: 1,
    padding: "40px",
    justifyContent: "space-between",
    alignItems: 'center',
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

export const LogoLink = styled("a")({});

export const LinkContainer = styled(Box)(({ directionC }) => ({
    display: "flex",
    flexDirection: directionC ? "column" : "row",
    columnGap: "10px",
    alignItems: "center",
    position: 'relative'
}));

export const LinkTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    fontWeight: "bold",
    marginLeft: '25px',
    lineHeight: 1.2,

    "&::before": {
        content: '""',
        position: "absolute",
        left: '0px',
        top: ' 5px',
        width: "15px",
        height: "15px",
        backgroundColor: theme.primary,
    },

    [theme.breakpoints.down("md")]: {
        "&::before": {
            content: '""',
            position: "absolute",
            left: '0px',
            top: '10px',
            width: "15px",
            height: "15px",
            backgroundColor: theme.primary,
        },
    },
}));

export const LinkSubtitle = styled(Typography)(({ theme }) => ({
    display: 'none',

    [theme.breakpoints.up("md")]: {
        display: 'flex',
    },

    [theme.breakpoints.down("sm")]: {
        fontSize: ".5rem",
    },
}));

export const FooterContainer = styled(Box)({
    display: "flex",
    width: '100vw',
    justifyContent: "space-between",
    textAlign: "center",
    zIndex: 2,
    minHeight: '50px'
});

export const FooterTitle = styled("div")({
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
});

export const ScrollMenu = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    color: 'white',
    marginLeft: 'auto',
    marginRight: '2rem',
    fontSize: '30px',
    [theme.breakpoints.up("sm")]: {
        display: 'none',
    }
}));

export const ScrollMenuTitle = styled('div')(({ theme }) => ({
    position: 'fixed',
    backgroundColor: 'hsla(0, 0%, 0%, 0.8)',
    top: 0,
    width: '100vw',
    height: '30vh',
    flexDirection: 'column',
    flexWrap: 'wrap',
    zIndex: 1,
    textalign: 'left',
    [theme.breakpoints.up("sm")]: {
        display: 'none',
    }
}));

export const MenuButton = styled('button')(({ theme }) => ({
    color: 'rgb(255, 255, 255',
    background: 'transparent',
    border: '0px',
    fontSize: '100%',
    padding: '0px 5px',
    [theme.breakpoints.up("sm")]: {
        display: 'none',
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
