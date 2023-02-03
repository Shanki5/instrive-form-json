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
        options: ["10", "20", "30", "40"],
        defaultValue: "10",
        rules: {
            required: true,
        },
    },
};
