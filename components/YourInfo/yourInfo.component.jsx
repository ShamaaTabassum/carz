import React from "react";
import {Col, FormGroup, Input, Label, Row } from "reactstrap";
import {styles} from "../FindBySearch/findBySearchInput.component"
import FindBySearchBtn from "../FindBySearch/findBySearchBtn.component"
import YourInfoInputs from "./yourInfoInputs.component"

export const YourInfoMessage = (props) => {
    return (
    <Input type="textarea" name="text" id="exampleText" style={{ marginTop: styles.row.marginTop,height: '200px' }} placeholder={props.message}/>
    );
  };

const YourInfo = () => {
    return (
        <Row style={{ marginTop: styles.row.marginTop }}>
          <Col>
            <FormGroup>
              <YourInfoInputs />
              <YourInfoMessage message="Any Specific Message"></YourInfoMessage>
              <div style={{display:"flex",justifyContent:"center",margin:"3rem auto"}}>
              <FindBySearchBtn text="Send Inquiry"/>
              </div>
            </FormGroup>
          </Col>
        </Row>
      );
};

export default YourInfo;
