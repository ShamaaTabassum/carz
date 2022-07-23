import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import InputRange from "react-input-range";

const styles = {
    row: {
        marginTop: '2vh',
    }
}
const SendInquiryBtn = () => {
    return <Button color = 'danger'>Send Inquiry</Button>
}
const FindBySearchForm = () => {
    const handleInputChange = (e) => {
        console.log(e);
    }
    return (
        <Form>
            <Row style={{marginTop: styles.row.marginTop}}>
                <Col>
                    <FormGroup>
                        <Label for="make">Make:</Label>
                        <Input type="select" name="make" id="make">
                            <option>Select Make</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="exampleEmail">Model:</Label>
                        <Input type="select" name="model" id="model">
                            <option>Select Model</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row style={{marginTop: styles.row.marginTop}}>
                <Col>
                    <FormGroup>
                        <Label for="year">Year:</Label>
                        <InputRange
                            maxValue={20}
                            minValue={0}
                            value = {10}
                            onChange = {(e) => handleInputChange(e)}
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="mileage">Mileage:</Label>
                        <InputRange
                            maxValue={20}
                            minValue={0}
                            value = {10}
                            onChange = {(e) => handleInputChange(e)}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row style={{marginTop: styles.row.marginTop}}>
                <Col>
                    <SendInquiryBtn></SendInquiryBtn>
                </Col>
            </Row>
        </Form>
    )
}

export default FindBySearchForm;