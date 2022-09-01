import Image from "next/image";
import ContactUsFlag1 from "../../assets/images/contactUsFlag1.png";
import ContactUsFlag2 from "../../assets/images/contactUsFlag2.png";
import { Col, Container, Row } from "reactstrap";

const ContactUsCountry = () => {
  
  const styles = {
    display: "d-flex flex-column align-items-center m-5",
    heading: {
      fontWeight: "bold",
      fontFamily: "'Bebas', sans-serif",
    },
  };

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Row>
        <Col className={styles.display}>
          <Image src={ContactUsFlag1} height="200px" width="200px"></Image>
          <h1 style={styles.heading}>JAPAN</h1>
          <h5>+81-90-2267-7752</h5>
        </Col>
        <Col className={styles.display}>
          <Image src={ContactUsFlag2} height="200px" width="200px"></Image>
          <h1 style={styles.heading}>PAKISTAN</h1>
          <h5>+92-330-2677752</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsCountry;
