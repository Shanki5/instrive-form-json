export const dynamicForm = {
    firstName: {
        name: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "Enter your first name",
        defaultValue: "",
        rules: {
            required: true,
        },
    },
    lastName: {
        name: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Enter your last name",
        defaultValue: "",
        rules: {
            required: true,
        },
    },
    gender: {
        name: "gender",
        label: "Gender",
        type: "radio",
        options: ["male", "female"],
        defaultValue: "",
        rules: {
            required: true,
        },
    },
    age: {
        name: "age",
        label: "Age",
        type: "dropdown",
        options: [
            { label: "Ads", value: 0 },
            { label: "asdf", value: 1 },
        ],
        defaultValue: "Ads",
        rules: {
            required: true,
        },
    },
};
