import { Col, Row } from "reactstrap";
import Image from "next/image";

const Contact = ({ imageSrc, info }) => {
  return (
    <Row>
      <Col style={{ display: "contents" }}>
        <Image
          src={imageSrc}
          width="45px"
          height="45px"
          className="p-1"
        ></Image>
      </Col>
      <Col className="p-2">{info}</Col>
    </Row>
  );
};

export default Contact;
