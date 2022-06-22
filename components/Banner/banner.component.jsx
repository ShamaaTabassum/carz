import Image from "next/image";
import BannerImage from '../../assets/images/banner.png';
const Banner = () => {
    return <div>
        <Image src={BannerImage}></Image>
    </div>
}

export default Banner;