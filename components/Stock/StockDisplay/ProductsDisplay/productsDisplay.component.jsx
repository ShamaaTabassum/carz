import DisplayItem from "./DisplayItem/displayItem.component";
import {Row} from "reactstrap";
import {chunk} from "../../../../helpers/helpers";

const ProductsDisplay = (props) => {
    const displayItems = [1,2,3,4,5,6];
    const displayItemsArr = chunk(displayItems, 3);
    const DisplayItems = displayItemsArr.map((displayItemSubArray, index) => {
        return <Row key={index}>
            {
                displayItemSubArray.map((displayItem, index) => {
                    return <DisplayItem key={index}/>
                })
            }
        </Row>
    })
    return(
        <Row>
            {DisplayItems}
        </Row>
    )
}

export default ProductsDisplay;