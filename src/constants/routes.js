import { lazy } from "react";
import {
    PROJECTS_PATH,
    HOME_PATH,
    RESUME_PATH,
    MODEL_PATH,
    VISUALEFFECTS_PATH,
    GAMESYSTEM_PATH,
    MORE_PATH,
    CONTACT_PATH,
    TEST_PATH
} from "./paths";

const Home = lazy(() => import("../pages/Home"));
const Resume = lazy(() => import("../pages/Resume"));
const Projects = lazy(() => import("../pages/Projects"));
const Contact = lazy(() => import("../pages/Contact"));
const Model = lazy(() => import("../pages/Projects/Model"));
const VisualEffect = lazy(() => import("../pages/Projects/VisualEffects"));
const GameSystem = lazy(() => import("../pages/Projects/GameSystem"));
const More = lazy(() => import("../pages/Projects/More"));
const Test = lazy(() => import("../pages/Test"));

const ROUTES = [
    {
        path: HOME_PATH,
        component: Home,
    },
    {
        path: RESUME_PATH,
        component: Resume,
    },
    {
        path: PROJECTS_PATH,
        component: Projects,
    },
    {
        path: CONTACT_PATH,
        component: Contact,
    },
    {
        path: MODEL_PATH,
        component: Model,
    },
    {
        path: VISUALEFFECTS_PATH,
        component: VisualEffect,
    },
    {
        path: GAMESYSTEM_PATH,
        component: GameSystem,
    },
    {
        path: MORE_PATH,
        component: More,
    },
    {
        path: TEST_PATH,
        component: Test,
    },
];

export default ROUTES;
