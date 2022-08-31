import { Col, Container, Input, Row } from "reactstrap";
import PakistanFlag from "../../../assets/images/pakistan.jpg";
import EnglandFlag from "../../../assets/images/uk.png";
import CanadaFlag from "../../../assets/images/canada.jpg";
import IrelandFlag from "../../../assets/images/ireland.png";
import SouthAfricaFlag from "../../../assets/images/south africa.png";
import UAEFlag from "../../../assets/images/dubai.png";
import FacebookLogo from "../../../assets/images/facebook.png";
import InstagramLogo from "../../../assets/images/instagram.png";
import WhatsappLogo from "../../../assets/images/whatsapp.png";

import Image from "next/image";

const socialArr = [
  {
    name: "Whatsapp",
    src: WhatsappLogo,
  },
  {
    name: "Instagram",
    src: InstagramLogo,
  },
  {
    name: "Facebook",
    src: FacebookLogo,
  },
];

const flagsArr = [
  {
    name: "Pakistan",
    src: PakistanFlag,
  },
  {
    name: "EnglandFlag",
    src: EnglandFlag,
  },
  {
    name: "CanadaFlag",
    src: CanadaFlag,
  },
  {
    name: "IrelandFlag",
    src: IrelandFlag,
  },
  {
    name: "SouthAfricaFlag",
    src: SouthAfricaFlag,
  },
  {
    name: "UAEFlag",
    src: UAEFlag,
  },
];

const Newsletter = () => {
  const Flags = flagsArr.map((flagObj) => {
    return (
      <Col>
        <Image src={flagObj.src} width="70 vw" height="40vh"></Image>
      </Col>
    );
  });

  const SocialMedia = socialArr.map((socialIconInfo) => {
    return (
      <Col>
        <Image src={socialIconInfo.src}></Image>
      </Col>
    );
  });
  return (
    <Container className="news-letter">
      <Row>
        <Col>
          <div style={{ fontSize: "1.5rem" }}>Subscribe for newsletter:</div>
        </Col>
      </Row>
      <Row style={{ paddingTop: "20px" }}>
        <Input placeholder="Email" style={{ borderRadius: "100px" }}></Input>
      </Row>
      <Row style={{ paddingTop: "20px" }}>{Flags}</Row>
      <Row className="w-full">
        <Col>
        <Row className="sec5-icons m-auto">
        {SocialMedia}
        </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Newsletter;
