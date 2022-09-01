import React from "react";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import InputRange from "react-input-range";

export const styles = {
  row: {
    marginTop: "2vh",
  },
};

const FindBySearchInputRange = () => {
  return (
    <Row style={{ marginTop: styles.row.marginTop }}>
      <Col>
        <FormGroup>
          <Label for="year">Year:</Label>
          <InputRange
            maxValue={20}
            minValue={0}
            value={10}
            onChange={(e) => handleInputChange(e)}
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label for="mileage">Mileage:</Label>
          <InputRange
            maxValue={20}
            minValue={0}
            value={10}
            onChange={(e) => handleInputChange(e)}
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default FindBySearchInputRange;
