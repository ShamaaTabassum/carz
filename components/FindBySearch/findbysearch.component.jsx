import {Col, Container, Row} from "reactstrap";
import FindBySearchForm from "./FindBySearchForm/findbysearchform.component";

const styles = {
    heading: {
        row: 'justify-content-md-center justify-content-center mt-xl-4',
        col: 'col-md-auto col-auto'
    }
}

const FindBySearch = () => {
    return <Container fluid>
        <Row className={styles.heading.row}>
            <Col className={styles.heading.col}>
                <h1>Find By Search</h1>
            </Col>
        </Row>
        <Row>
            <FindBySearchForm/>
        </Row>
    </Container>
}

export default FindBySearch;