import '../styles/globals.css'
import NavBar from "../components/Navbar/navbar.component";
import ExportInfoSection from "../components/ExportInfoSection/exportInfoSection.component";
import CompanyInfoSection from "../components/CompanyInfoSection/companyInfoSection.component";
import PageFooter from "../components/PageFooter/PageFooter.component";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <NavBar/>
        <Component {...pageProps} />
          <ExportInfoSection/>
          <CompanyInfoSection/>
          <PageFooter/>
      </>
  )
}

export default MyApp
