import React from "react";
import {
    HOME_PATH,
    PROJECTS_PATH,
    RESUME_PATH,
    CONTACT_PATH,
} from "../../constants/paths";
import { NavButtonTitle, NavLinkText } from "./styles";
import { NavLink } from "react-router-dom";

function NavigationTitle() {
    return (
        <NavButtonTitle >
            <NavLink to={HOME_PATH}>
                <NavLinkText>Home</NavLinkText>
            </NavLink>
            <NavLink to={RESUME_PATH}>
                <NavLinkText>Resume</NavLinkText>
            </NavLink>
            <NavLink to={PROJECTS_PATH}>
                <NavLinkText>Projects</NavLinkText>
            </NavLink>
            <NavLink to={CONTACT_PATH}>
                <NavLinkText>Contact</NavLinkText>
            </NavLink>
        </NavButtonTitle>
    );
}

export default NavigationTitle;
