import React from "react";
import FormTextInput from "./common/FormTextInput";
import { Box, Stack } from "@mui/system";
import { FormProvider, useForm } from "react-hook-form";
import data from "../FormSchema.json";
import { Button, Typography } from "@mui/material";
import FormRadio from "./common/FormRadioInput";
import FormDropdown from "./common/FormDropdownInput";

const Input = ({ type, ...rest }) => {
    switch (type) {
        case "text":
            return <FormTextInput {...rest} />;
        case "radio":
            return <FormRadio {...rest} />;
        case "dropdown":
            return <FormDropdown {...rest} />;
    }
};

const formInputs = Object.keys(data).map((e) => {
    return (
        <Box key={e}>
            <Input {...data[e]} />
        </Box>
    );
});

const Form = () => {
    const methods = useForm();
    const onSubmit = (formData) => {
        console.log(formData);
    };
    return (
        <Stack spacing={5} p="2rem 0 0">
            <Typography variant="h3" color="initial">
                Dynamic Form
            </Typography>
            <form>
                <FormProvider {...methods}>
                    <Stack direction="column" spacing={2}>
                        {formInputs}
                        <Button
                            variant="outlined"
                            type="submit"
                            sx={{ maxWidth: "10rem" }}
                            onClick={methods.handleSubmit(onSubmit)}
                        >
                            Submit
                        </Button>
                    </Stack>
                </FormProvider>
            </form>
        </Stack>
    );
};

export default Form;
