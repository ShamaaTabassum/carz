import BannerOverlay from '../components/BannerOverlay/bannerOverlay.component';
import AboutUsLogos from '../components/AboutUs/aboutUsLogos.component';
import WhoWeAre from '../components/AboutUs/whoWeAre.component';
import AboutUsFlags from '../components/AboutUs/aboutUsFlags.component';

const AboutUs = () => {
    return (
    <>
    <BannerOverlay pageName="About Us"/>
    <AboutUsLogos />
    <WhoWeAre />
    <AboutUsFlags />
    </>
        )
}

export default AboutUs;