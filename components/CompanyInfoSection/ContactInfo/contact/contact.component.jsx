import {Col, Row} from "reactstrap";
import Image from "next/image";

const Contact = ({imageSrc, info}) => {
    return (
        <Row>
            <Col>
                <Image src={imageSrc} width='60 px' height='50px'></Image>
            </Col>
            <Col>
                {info}
            </Col>
        </Row>
    )
}

export default Contact