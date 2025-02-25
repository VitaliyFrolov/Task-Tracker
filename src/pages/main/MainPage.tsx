import { Alert, Container } from "@/shared/ui";
import { Navbar } from "@/widgets/navbar";

export default function MainPage() {
    return (
        <Navbar>
            <Container>
                <h1>Hello App!</h1>
                <Alert>
                    text
                </Alert>
            </Container>
        </Navbar>
    );
}