import BannerOverlay from '../components/BannerOverlay/bannerOverlay.component';
import ContactUsForm from './../components/ContactUs/contactUsForm.component';
import ContactUsCountry from './../components/ContactUs/contactUsCountry.component';

const ContactUs = () => {
    return (
        <>
            <BannerOverlay pageName="Contact Us" />
            <ContactUsForm />
            <ContactUsCountry />
        </>
    )
}

export default ContactUs;