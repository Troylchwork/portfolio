import { DefaultTypography, H1, H2, H3, Title, SubTitle } from "./styles";
export default function CustomeTypography({
    variant = "",
    children,
    ...props
}) {
    switch (variant) {
        case "h1":
            return (
                <H1 variant="h1" {...props}>
                    {children}
                </H1>
            );
        case "h1_center":
            return (
                <H1 variant="h1" sx={{ textAlign: 'center' }}{...props}>
                    {children}
                </H1>
            );
        case "h2":
            return (
                <H2 variant="h2" {...props}>
                    {children}
                </H2>
            );
        case "h3":
            return (
                <H3 variant="h3" {...props}>
                    {children}
                </H3>
            );
        case "title":
            return (
                <Title  {...props}>
                    {children}
                </Title>
            );
        case "subtitle":
            return (
                <SubTitle  {...props}>
                    {children}
                </SubTitle>
            );
        default:
            return <DefaultTypography {...props}>{children}</DefaultTypography>;
    }
}
