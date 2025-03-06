import { Stack, Typography, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import CustomeBreadcrumbs from "../../../components/CustomeBreadcrumbs";
import { gameS, preview2 } from "../../../assets/images";
import { Background, Image, SystemContainer } from "./styles";

export default function GameSystem() {
    const { t } = useTranslation();
    return (
        <Background>
            <Stack sx={{ margin: "20px" }}>
                <h1>GameSystem</h1>
                <CustomeBreadcrumbs name="GameSystem" />
                <Stack sx={{ alignItems: "center" }}>
                    <SystemContainer>
                        <Image src={gameS} component="img" />
                        <h1>Npc</h1>
                        <Typography>{t("gameSystem.npc")}</Typography>
                    </SystemContainer>
                    <Divider sx={{ m: '20px 0px', width: '90%' }} />
                    <SystemContainer marginTop>
                        <Image src={preview2} component="img" />
                        <h1>Preview System</h1>
                        <Typography>{t("gameSystem.preview")}</Typography>
                    </SystemContainer>
                </Stack>
            </Stack>
        </Background>
    );
}
