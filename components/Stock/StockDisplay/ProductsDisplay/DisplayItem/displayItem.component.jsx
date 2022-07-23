import * as DisplayImage from '../../../../../assets/images/display-item.png';
import {Col, Row} from "reactstrap";
import ProductImage from "./ProductImage/productImage.component";

const DisplayItem = ({company = 'Diahatsu', name = 'Move Custom RS', image}) => {
    return (
            <Col style={{padding: '10px 50px'}}>
                <Row>
                    <Col>
                        <ProductImage src={DisplayImage}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span style={{color:'grey'}}>{company}</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>{name}</h3>
                    </Col>
                </Row>
            </Col>
    )
}

export default DisplayItem;