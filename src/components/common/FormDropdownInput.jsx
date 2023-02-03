import { Select, InputLabel, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export const FormDropdown = ({ name, label, rules, options, defaultValue }) => {
    const { control } = useFormContext();
    return (
        <Box>
            <InputLabel>{label}</InputLabel>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field: { onChange, ...field } }) => (
                    <Select {...field} defaultValue={defaultValue} fullWidth>
                        {options.map((option) => {
                            <MenuItem value={option}>{option}</MenuItem>;
                        })}
                    </Select>
                )}
            />
        </Box>
    );
};

export default FormDropdown;
