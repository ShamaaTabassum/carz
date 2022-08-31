import Image from "next/image";
import flags from '../../assets/images/about-us-flagz.png';
import { Col, Container, Row } from "reactstrap";

function AboutUsFlags() {
  return (
    <Row className="mb-5 about-us-flags">
      <Image src={flags} ></Image>
    </Row>
  )
}

export default AboutUsFlags
