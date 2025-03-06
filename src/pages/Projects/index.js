import React from "react";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
    Background,
    BGTitle,
    BGSubTitle,
    ProjectContainer,
    BackgroundImg,
} from "./styles";
import ProjectCard from "../../components/ProjectCard";
import InfoCard from "../../components/InfoCard";
import {
    MODEL_PATH,
    VISUALEFFECTS_PATH,
    GAMESYSTEM_PATH,
    MORE_PATH,
} from "../../constants/paths";
import {
    donut,
    forest,
    forest3,
    dashboardExample,
    arGameExample,
    voiceChatExample,
    gameS,
    game2D,
} from "../../assets/images";
import CustomeTypography from "../../components/CustomeTypography";

export default function Projects() {
    const { t } = useTranslation();
    return (
        <Background>
            <BackgroundImg
                src={forest3}
                alt="iamge"
            />
            <BGTitle>Make to Be Played</BGTitle>
            <BGSubTitle>Game and Web Projects</BGSubTitle>
            <ProjectContainer>
                <ProjectCard title="Modling" path={MODEL_PATH} img={donut} />
                <ProjectCard
                    title="Visual Effects"
                    path={VISUALEFFECTS_PATH}
                    img={forest}
                />
                <ProjectCard
                    title="Game System"
                    path={GAMESYSTEM_PATH}
                    img={gameS}
                />
                <ProjectCard title="More" path={MORE_PATH} img={game2D} />
            </ProjectContainer>
            <CustomeTypography variant="h1" sx={{ pt: 2, m: '0rem 2rem' }}>Website</CustomeTypography>
            <Stack sx={{ alignItems: "center", rowGap: "40px", pt: "40px" }}>
                <InfoCard
                    title="Rebuild Website"
                    subTitle="GameDeveloper"
                    img={dashboardExample}
                >
                    {t("rebuildWebsite")}
                </InfoCard>
                <InfoCard
                    title="Web AR Game"
                    subTitle="GameDeveloper"
                    direction="right"
                    img={arGameExample}
                >
                    {t("webGame")}
                </InfoCard>
                <InfoCard
                    title="Web Voice Chat"
                    subTitle="GameDeveloper"
                    img={voiceChatExample}
                >
                    {t("webVoiceChat")}
                </InfoCard>
            </Stack>
        </Background>
    );
}
