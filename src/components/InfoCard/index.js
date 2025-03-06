
import { useTheme, useMediaQuery, Stack } from "@mui/material";
import {
    CustomCard,
    TitleContainer,
    TitleContainerRight,
    Title,
    ColorBlock,
    SubTitle,
    CustomCardMedia,
    CardCotent
} from "./styles";


export default function InfoCard({
    title,
    subTitle = "",
    direction = "left",
    img,
    children,
}) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return direction === "left" ? (
        <CustomCard reverse={matches}>
            <CardCotent >
                <TitleContainer>
                    <ColorBlock />
                    <Stack>
                        <Title>{title}</Title>
                        <SubTitle>{subTitle}</SubTitle>
                    </Stack>
                </TitleContainer>
                <Stack sx={{ margin: "2rem" }}>{children}</Stack>
            </CardCotent>
            <CustomCardMedia
                component="img"
                image={img}
                alt="forest"
                title="ABC"
            ></CustomCardMedia>
        </CustomCard>
    ) : (
        <CustomCard>
            <CustomCardMedia
                component="img"
                image={img}
                alt="forest"
                title="ABC"
            ></CustomCardMedia>
            <CardCotent textAlignR={matches}>
                <TitleContainerRight justifyContentR={matches}>
                    <Stack>
                        <Title>{title}</Title>
                        <SubTitle>{subTitle}</SubTitle>
                    </Stack>
                    <ColorBlock />
                </TitleContainerRight>
                <Stack sx={{ margin: "2rem" }}>{children}</Stack>
            </CardCotent>
        </CustomCard>
    );
}

