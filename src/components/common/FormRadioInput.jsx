import { FormControlLabel, RadioGroup, Radio, FormLabel } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export const FormRadio = ({ name, label, rules, defaultValue, options }) => {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { onChange } }) => (
                <Box>
                    <FormLabel>{label}</FormLabel>
                    <RadioGroup
                        onChange={onChange}
                        label={label}
                        defaultValue={defaultValue}
                    >
                        {options.map((option) => {
                            return (
                                <FormControlLabel
                                    value={option}
                                    control={<Radio />}
                                    label={option}
                                    key={option}
                                />
                            );
                        })}
                    </RadioGroup>
                </Box>
            )}
        />
    );
};

export default FormRadio;
