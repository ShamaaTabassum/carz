import React from "react";
import { Col, Container, FormGroup, Input, Row } from "reactstrap";
import { styles } from "../FindBySearch/findBySearchInput.component";
import { YourInfoMessage } from "../YourInfo/yourInfo.component";
import YourInfoInputs from "../YourInfo/yourInfoInputs.component";
import FindBySearchBtn from "../FindBySearch/findBySearchBtn.component";

const ContactUsForm = () => {
  return (
    <Container>
      <Row style={{ marginTop: styles.row.marginTop }}>
        <Col>
          <FormGroup>
            <YourInfoInputs />
            <Input
              type="Input"
              name="inquiry"
              id="inquiry"
              placeholder="Inquiry Type*"
              style={{ marginTop: styles.row.marginTop }}
            ></Input>
            <YourInfoMessage message="Your Message*"></YourInfoMessage>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "3rem auto",
              }}>
              <FindBySearchBtn text="Send Message"/>
            </div>
          </FormGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsForm;
