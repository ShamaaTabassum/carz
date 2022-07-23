import Image from "next/image";
import {useState} from "react";

const ProductImage = ({src}) => {
    const [hovered, setHovered] = useState(false);
    const transformed = hovered ? 'scale(1.5,1.5)' : ''
    return(
        <div className="box">
            <Image
                alt='Mountains'
                src={src}
                objectFit='contain'
                onMouseOut={() => setHovered(false)}
                onMouseOver={() => setHovered(true)}
            />
            <div className="overlay">
                <div className="image-text">
                    Quick View
                </div>
            </div>
        </div>
    )
}

export default ProductImage;