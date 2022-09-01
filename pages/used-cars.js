import BannerOverlay from '../components/BannerOverlay/bannerOverlay.component';
import FindBySearchHome from "../components/FindBySearch/FindBySearchForm/findBySearchHome.component";
const UsedCars = () => {
    return (
        <>
            <BannerOverlay pageName="Used Cars" />
            <FindBySearchHome />
        </>
    )
}

export default UsedCars;