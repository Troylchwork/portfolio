import React from "react";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";
import {
    ContentContainer,
    HeaderContainer,
    CardsContainer,
    List,
} from "./styles";
import Cards from "../../components/Cards";
import CustomeButton from "../../components/CustomeButton";
import CustomeTypography from "../../components/CustomeTypography";

export default function Resume() {
    const { t } = useTranslation();

    const Skillslist = (listitem) => {
        const list = listitem.split(", ");
        return list.map((str, index) => <li key={index}>{str}</li>);
    };

    return (
        <Stack sx={{ background: "#F6F4F0", paddingBottom: "5rem", alignItems: 'center', '& *': { maxWidth: '1080px' } }}>
            <CustomeTypography variant="h1_center">Resume</CustomeTypography>
            <ContentContainer>
                <HeaderContainer>
                    <CustomeTypography variant="h2">Work Experience</CustomeTypography>
                    <Stack sx={{ justifyContent: "center" }}>
                        <a href="https://drive.google.com/u/1/uc?id=1zk2mLMBSRq_nuWBSM0KOpsKuByQQ_VTt&export=download">
                            <CustomeButton>
                                Download CV
                            </CustomeButton>
                        </a>
                    </Stack>
                </HeaderContainer>

                <CardsContainer>
                    <Cards
                        title="2022 - 2024"
                        subTitle="Game Developer"
                        companyName="Chaingate AI Limited"
                        variant="resume"
                    >
                        {t("chaingateAiDersction")}
                    </Cards>
                    <Cards
                        title="2019"
                        subTitle="Internship"
                        companyName="HULU Cultural Company"
                        variant="resume"
                    >
                        {t("huluCulturalDersction")}
                    </Cards>
                </CardsContainer>
                <CustomeTypography variant="h2">Educational</CustomeTypography>
                <CardsContainer>
                    <Cards
                        title="2022"
                        subTitle="Hong Kong Metropolitan University"
                        companyName="Bachelor of Arts with Honours in Computing and Interactive Entertainment "
                        variant="resume"
                    >
                        {t("MetropolitanUniversity")}
                    </Cards>
                    <Cards
                        title="2020"
                        subTitle="Hong Kong Institute of Vocational Education (Sha Tin)  "
                        companyName="Higher Diploma in Multimedia"
                        variant="resume"
                    >
                        {t("IVE")}
                    </Cards>
                </CardsContainer>
                <CustomeTypography variant="h2">Skills</CustomeTypography>
                <Cards variant="resumeList">
                    <CustomeTypography variant="h3">Technical Skills</CustomeTypography>
                    <List>{Skillslist(t("technicalSkill"))}</List>
                    <CustomeTypography variant="h3">Languages</CustomeTypography>
                    <List>{Skillslist(t("languagesSkill"))}</List>
                </Cards>
            </ContentContainer>
        </Stack>
    );
}
