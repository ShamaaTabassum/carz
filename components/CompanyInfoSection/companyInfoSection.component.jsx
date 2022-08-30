import {Col, Container, Row} from "reactstrap";
import ContactInfo from "./ContactInfo/contactInfo.component";
import NavLinks from "./NavLinks/navLinks.component";
import Newsletter from "./Newsletter/newsletter.component";


const CompanyInfoSection = () => {
    return (
        <Container className="mt-3">
            <Row>
                <Col lg={4} md={8}>
                    <ContactInfo/>
                </Col>
                <Col lg={4} md={4}>
                    <NavLinks/>
                </Col>
                <Col lg={4} md={12} className="borderstart">
                    <Newsletter/>
                </Col>
            </Row>
        </Container>
    )
}

export default CompanyInfoSection;