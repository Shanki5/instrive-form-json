import { TextField } from "@mui/material";
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
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    helperText={error ? error.message : null}
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    label={label}
                    defaultValue={defaultValue}
                    placeholder={placeHolder}
                />
            )}
        />
    );
};

export default FormTextInput;
