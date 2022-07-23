import {Col, Container, Row} from "reactstrap";
import StockDisplay from "./StockDisplay/stockDisplay.component";

const styles = {
    heading: {
        row: 'justify-content-md-center justify-content-center mt-2 mt-xl-4',
        col: 'col-md-auto col-auto '
    }
}

const Stock = () => {
    return <Container fluid>
        <Row className={styles.heading.row}>
            <Col className={styles.heading.col}>
                <h1>Stock</h1>
            </Col>
        </Row>
        <Row>
            <StockDisplay/>
        </Row>
    </Container>
}

export default Stock;