import Image from "next/image";
import logo1 from "../../assets/images/about-us-logo1.png";
import logo2 from "../../assets/images/about-us-logo2.png";
import { Col, Container, Row } from "reactstrap";

function AboutUsLogos() {
  return (
    <Container className="about-us m-auto">
      <Row>
        <Col style={{ borderRight: "5px solid #363435" }}>
          <Image src={logo1} width="650vw" height="270vh"></Image>
        </Col>
        <Col>
          <Image src={logo2} width="680vw" height="270vh"></Image>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUsLogos;
