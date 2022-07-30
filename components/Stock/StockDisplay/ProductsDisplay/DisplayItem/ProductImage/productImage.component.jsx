import Image from "next/image";

const ProductImage = ({src}) => {
    return(
        <div className="box">
            <Image
                alt='Mountains'
                src={src}
                objectFit='contain'
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