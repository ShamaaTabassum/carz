import { Col, Container, Row } from "reactstrap";
const WhoWeAre = () => {
  return (
    <Container className="mx-auto mb-5 fs-5 fs-md-4 text-start ">
      <Row>
        <h1 className="who-we-are-h1 display-md-1 display-3">WHO WE ARE?</h1>
      </Row>
      <Row className="my-4">
        <p>
          Mughals of Japan(MOJ) is one stop Japanese auctioned cars dealing hub
          established in 2022. We offer wide range of vehicles, from Heavy
          construction machinery to domestic 660cc cars which are the part of
          our inventory. We are serving in various countries such as: Pakistan,
          JAE, South Africa, Nigeria, Uganda, West Indies, United Kingdom,
          Canada, Ireland, Scotland, Chili and many more.
        </p>
      </Row>
      <Row>
        <p>
          We also offer On-Demand Car auction purchasing from yard to your
          country doorstep.
        </p>
      </Row>
      <Row>
        <p>Following is the list of vehicle categories we offer:</p>
      </Row>
      <Row className="my-4 mx-1">
          <Row>- Construction Machinery</Row>
          <Row>- Luxury Cars</Row>
          <Row>- SUV</Row>
          <Row>- Sedan</Row>
          <Row>- Coupe</Row>
          <Row>- Convertibles</Row>
          <Row>- Vans</Row>
          <Row>-660-1000cc Cars</Row>
      </Row>
    </Container>
  );
};

export default WhoWeAre;
