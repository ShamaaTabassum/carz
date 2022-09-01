import {Col, Container, Row} from "reactstrap";
import StockDisplay from "./StockDisplay/stockDisplay.component";
import {styles} from "../FindBySearch/FindBySearchForm/findBySearchHome.component";


const Stock = () => {
    return <Container fluid style={{padding: styles.container.padding}}>
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