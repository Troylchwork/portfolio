import * as React from "react";
import NavigationTitle from "../NavigationTitle";
import { useState } from "react";
import { Box, Stack, useTheme, useMediaQuery } from "@mui/material";
import { AiOutlineBars, AiOutlinePlus } from 'react-icons/ai';
import { DesktopMenu, TitleBar, LogoLink, LinkTitle, LinkSubtitle, LinkContainer, ScrollMenu, ScrollMenuTitle, MenuButton } from "./styles";
import { useNavigate } from "react-router-dom";

function Header() {
    const [isShow, setIsShow] = useState(false);
    const [menuIcon, setMenuIcon] = useState(<AiOutlineBars />);
    const navigate = useNavigate();

    function showIcon(e) {
        e.preventDefault();
        if (isShow === false) {
            setIsShow(true);
            setMenuIcon(<AiOutlinePlus rotate={45} />);
        } else {
            setIsShow(false);
            setMenuIcon(<AiOutlineBars />);
        }
    }

    function navigateToHomePage(e) {
        e.preventDefault();
        navigate("/");
    }

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")) ? true : false


    return (
        <Stack height={80}>
            <TitleBar>
                <DesktopMenu>
                    <LogoLink href={"/"} onClick={(e) => navigateToHomePage(e)}>
                        <LinkContainer directionC={isMobile}>
                            <LinkTitle>Troy Leung</LinkTitle>
                            <LinkSubtitle>/ Game Developer & Frontend Developer</LinkSubtitle>
                        </LinkContainer>
                    </LogoLink>
                    <NavigationTitle />
                </DesktopMenu>
                <ScrollMenu>
                    <MenuButton onClick={(e) => showIcon(e)}>
                        {menuIcon}
                    </MenuButton>
                </ScrollMenu>
                {isShow === true && (
                    <ScrollMenuTitle>
                        <NavigationTitle />
                    </ScrollMenuTitle>
                )}
            </TitleBar>
        </Stack>
    );
}

export default Header;
