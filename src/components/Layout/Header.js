import * as React from 'react';
import { Popover, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import { LinkContainer, LinkTitle, LinkSubtitle, NavLinkText } from './styles';
import { HOME_PATH, RESUME_PATH, PROJECTS_PATH, CONTACT_PATH } from '../../constants/paths';


function Header() {
    const pages = [
        { name: 'Home', path: HOME_PATH },
        { name: 'Resume', path: RESUME_PATH },
        { name: 'Projects', path: PROJECTS_PATH },
        { name: 'Contact', path: CONTACT_PATH }
    ];
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const testfunction = (p) => {
        console.log(p)
    };


    return (
        <AppBar position="static" sx={{ background: 'white', color: 'black', zIndex: 99 }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>

                    <Box sx={{ flexGrow: '1', display: 'flex' }}>
                        <LinkContainer>
                            <LinkTitle>
                                Troy Leung <br />
                                <Box component="div" sx={{ display: { sm: 'inline', md: 'none' }, fontSize: '12px' }}>Game & Frontend Developer</Box>
                            </LinkTitle>
                            <LinkSubtitle>/ Game Developer & Frontend Developer</LinkSubtitle>
                        </LinkContainer>
                    </Box>

                    <Box sx={{ flexGrow: '1', justifyContent: 'flex-end', display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton
                            size="large"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu} sx={{ px: 4 }} >
                                    <NavLink to={page.path}>
                                        <Typography>{page.name}</Typography>
                                    </NavLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', columnGap: '2rem', paddingRight: '10px', display: { xs: 'none', sm: 'flex' } }}>
                        {pages.map((page) => (
                            <NavLink to={page.path}>
                                <NavLinkText>{page.name}</NavLinkText>
                            </NavLink>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
