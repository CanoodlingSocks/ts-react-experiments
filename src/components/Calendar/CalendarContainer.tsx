import { Container, Row, Col } from "react-bootstrap"
import Calendar from "./Calendar";


const CalendarContainer = () => {
    return (
        <Container className="date-picker-container">
                <Calendar />
        </Container>
    )
}

export default CalendarContainer;