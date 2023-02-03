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
        name: "department",
        label: "Department",
        type: "dropdown",
        options: [
            { label: "ECE", value: 100 },
            { label: "CSE", value: 200 },
            { label: "Mechanical", value: 400 },
        ],
        defaultValue: "Mechanical",
        rules: {
            required: true,
        },
    },
};
