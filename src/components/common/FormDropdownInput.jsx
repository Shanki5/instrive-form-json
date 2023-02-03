import { Select, InputLabel, MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export const FormDropdown = ({ name, label, rules, options, defaultValue }) => {
    const { register } = useFormContext();
    console.log(options);
    const children = options.map(({ label, value }) => {
        <MenuItem value={value}>{label}</MenuItem>;
    });

    return (
        <Box>
            <TextField
                select
                label={label}
                sx={{ minWidth: "10rem" }}
                defaultValue={defaultValue}
                inputProps={register(name, rules)}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    );
};

export default FormDropdown;
