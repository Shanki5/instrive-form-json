import { Container } from "@mui/system";
import { useState } from "react";
import Form from "./components/Form";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Container>
            <Form />
        </Container>
    );
}

export default App;
