import { useEffect } from "react";
import {
    Stack,
    Button,
    InputLabel,
    Input,
    OutlinedInput,
    FormHelperText,
    CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, FormContainer, Header, Background, Control } from "./styles";
import { useAlertContext } from "../../context/alertContext";
import AlertDialog from "../../components/AlertDialog";
import useSubmit from "../../hooks/useSubmit";

export default function Contact() {
    const { onOpen } = useAlertContext();
    const { isLoading, response, submit } = useSubmit();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
                .email("Invalid email")
                .required("Eamil is required"),
            subject: Yup.string().required("Subject is required"),
            message: Yup.string().min(5).required("Message is equired"),
        }),
        onSubmit: (values) => {
            submit("", values);
        },
    });

    useEffect(() => {
        if (response) {
            onOpen(
                response.name,
                response.email,
                response.subject,
                response.message
            );
        }
        formik.resetForm();
    }, [response]);

    return (
        <Background>
            <Header>Let's talk</Header>
            <FormContainer>
                <Form
                    onSubmit={formik.handleSubmit}
                >
                    <Control
                        variant="standard"
                        error={formik.errors.name && formik.touched.name}
                    >
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input id="name" {...formik.getFieldProps("name")} />
                        {formik.touched.name && formik.errors.name ? (
                            <FormHelperText>
                                {formik.errors.name}
                            </FormHelperText>
                        ) : null}
                    </Control>
                    <Control
                        variant="standard"
                        error={formik.errors.email && formik.touched.email}
                    >
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" {...formik.getFieldProps("email")} />
                        {formik.touched.email && formik.errors.email ? (
                            <FormHelperText>
                                {formik.errors.email}
                            </FormHelperText>
                        ) : null}
                    </Control>
                    <Control
                        variant="standard"
                        error={formik.errors.subject && formik.touched.subject}
                    >
                        <InputLabel htmlFor="subject">Subject</InputLabel>
                        <Input
                            id="subject"
                            {...formik.getFieldProps("subject")}
                        />
                        {formik.touched.subject && formik.errors.subject ? (
                            <FormHelperText>
                                {formik.errors.subject}
                            </FormHelperText>
                        ) : null}
                    </Control>
                    <Control
                        variant="outlined"
                        error={formik.errors.message && formik.touched.message}
                    >
                        <InputLabel htmlFor="message">Message</InputLabel>
                        <OutlinedInput
                            multiline
                            rows={4}
                            id="message"
                            label="Message"
                            {...formik.getFieldProps("message")}
                        />
                        {formik.touched.message && formik.errors.message ? (
                            <FormHelperText>
                                {formik.errors.message}
                            </FormHelperText>
                        ) : null}
                    </Control>

                    <Stack
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <div>*Fake Sumbit</div>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ height: "60px", width: "10rem" }}
                            disabled={isLoading}
                            startIcon={
                                isLoading ? (
                                    <CircularProgress size={24} />
                                ) : null
                            }
                        >
                            {isLoading ? "" : "Submit"}
                        </Button>
                    </Stack>
                </Form>
            </FormContainer>
            <AlertDialog />
        </Background>
    );
}
