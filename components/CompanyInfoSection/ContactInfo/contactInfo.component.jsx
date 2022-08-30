import logo from "../../../assets/images/logo.png";
import locationIcon from "../../../assets/images/icon1.png";
import phoneIcon from "../../../assets/images/icon2.png";
import businessPhoneIcon from "../../../assets/images/icon3.png";
import emailIcon from "../../../assets/images/icon4.png";
import domainIcon from "../../../assets/images/icon5.png";
import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
import Contact from "./contact/contact.component";

const ContactInfo = () => {
  const infoArr = [
    {
      src: locationIcon,
      info: "本社:491-0821 愛知県一宮市 丹陽町重吉字城戸159-1",
    },
    {
      src: phoneIcon,
      info: "81-90-2267-775",
    },
    {
      src: businessPhoneIcon,
      info: "+81-568-68-7908",
    },
    {
      src: emailIcon,
      info: "info@mughalsofjapan.com",
    },
    {
      src: domainIcon,
      info: "www.mughalsofjapan.com",
    },
  ];
  const contactInfo = infoArr.map((infoObj, index) => {
    return (
      <Contact key={index} imageSrc={infoObj.src} info={infoObj.info}/>
    );
  });
  return (
    <Container style={{ padding: "4vh 0"}}>
      <Row>
        <Col>
          <Image src={logo} width="300vw" height="110vh"></Image>
        </Col>
      </Row>
      <Row className="justify-content-start align-items-center pt-3">{contactInfo}</Row>
    </Container>
  );
};

export default ContactInfo;
