import { Calendar } from "@/features/calendar";
import { Container } from "@/shared/ui";
import { Navbar } from "@/widgets/navbar";

export default function CalendarPage() {
    return (
       <Navbar>
            <Container>
                <Calendar />
            </Container>
       </Navbar>
    );
}