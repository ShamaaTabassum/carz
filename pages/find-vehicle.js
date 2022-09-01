import BannerOverlay from '../components/BannerOverlay/bannerOverlay.component';
import FindBySearchVehicle from './../components/FindAVehicle/findBySearchVehicle.component';


const FindVehicle = () => {
    return (
        <>
            <BannerOverlay pageName="Find a Vehicle" />
            <FindBySearchVehicle />
        </>
    );
}

export default FindVehicle;