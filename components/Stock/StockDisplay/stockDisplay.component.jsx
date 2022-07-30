import {Col, Container, Row} from "reactstrap";
import {useState} from "react";
import ProductsDisplay from "./ProductsDisplay/productsDisplay.component";

const StockDisplay = () => {
    const [activeTab, setActiveTab] = useState(1);
    return(
       <Container fluid>
           <Row >
               <Col className={`${activeTab === 1 ? 'active' : 'inactive'}`} onClick={() => setActiveTab(1)}>
                   <h5 className={`center`}>
                       In-Stock
                   </h5>
               </Col>
               <Col className={`${activeTab === 2 ? 'active' : 'inactive'}`} onClick={() => setActiveTab(2)}>
                   <h5 className={`center`} >
                       Sold
                   </h5>
               </Col>
           </Row>
           <div style={{padding: '30px 0px'}}>
               <ProductsDisplay activeTab = {activeTab === 1 ? 'in-stock' : 'sold'}/>
           </div>
       </Container>
    )
}

export default StockDisplay;