export const dynamicForm = {
    firstName: {
        name: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "Enter your first name",
        defaultValue: "",
        rules: {
            required: true,
            maxLength: 20,
            minLength: 3,
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
            maxLength: 20,
            minLength: 1,
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
    department: {
        name: "department",
        label: "Department",
        type: "dropdown",
        options: [
            { label: "ECE", value: 100 },
            { label: "CSE", value: 200 },
            { label: "Mechanical", value: 400 },
        ],
        defaultValue: 400,
        rules: {
            required: true,
        },
    },
    college: {
        name: "college",
        label: "College",
        type: "dropdown",
        options: [
            { label: "Anna University", value: 100 },
            { label: "Vel Tech", value: 200 },
            { label: "Vit", value: 400 },
        ],
        defaultValue: 400,
        rules: {
            required: true,
        },
    },
};
