import Image from "next/image";
import BannerOverlayImage from "../../assets/images/banner-overlay.png";

const BannerOverlay = (props) => {
  return (
<div className="banner-overlay">
  <Image src={BannerOverlayImage}></Image>
      <p className="banner-overlay-txt display-1">{props.pageName}</p>
</div>
  );
};

export default BannerOverlay;
