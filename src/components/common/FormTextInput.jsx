import { InputLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export const FormTextInput = ({
    name,
    label,
    rules,
    defaultValue,
    placeHolder,
}) => {
    const { control } = useFormContext();
    return (
        <Box>
            <Controller
                name={name}
                control={control}
                rules={rules}
                defaultValue={defaultValue}
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                }) => (
                    <TextField
                        helperText={error ? error.message : null}
                        error={!!error}
                        onChange={onChange}
                        value={value}
                        label={label}
                        placeholder={placeHolder}
                    />
                )}
            />
        </Box>
    );
};

export default FormTextInput;
