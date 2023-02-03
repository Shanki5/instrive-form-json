import React from "react";
import FormTextInput from "./common/FormTextInput";
import { Box, Stack } from "@mui/system";
import { FormProvider, useForm } from "react-hook-form";
import { dynamicForm } from "../FormSchema";
import { Button, Typography } from "@mui/material";

const Input = ({ type, ...rest }) => {
    switch (type) {
        case "text":
            return <FormTextInput {...rest} />;
    }
};

const formInputs = Object.keys(dynamicForm).map((e) => {
    return (
        <Box key={e}>
            <Input {...dynamicForm[e]} />
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
