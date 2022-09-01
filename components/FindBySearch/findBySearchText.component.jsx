import React from "react";
import { Col, Row } from "reactstrap";
import { styles } from "./FindBySearchForm/findBySearchHome.component";

const FindBySearchText = () => {
  return (
    <Row className={styles.heading.row}>
      <Col className={styles.heading.col}>
        <h1>Find By Search</h1>
      </Col>
    </Row>
  );
};

export default FindBySearchText;
