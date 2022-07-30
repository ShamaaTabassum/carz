import {Col, Container, Row} from "reactstrap";
import ContactInfo from "./ContactInfo/contactInfo.component";
import NavLinks from "./NavLinks/navLinks.component";
import Newsletter from "./Newsletter/newsletter.component";

const CompanyInfoSection = () => {
    return (
        <Container>
            <Row>
                <Col className='sec5'>
                    <ContactInfo/>
                </Col>
                <Col>
                    <NavLinks/>
                </Col>
                <Col>
                    <Newsletter/>
                </Col>
            </Row>
        </Container>
    )
}

export default CompanyInfoSection;