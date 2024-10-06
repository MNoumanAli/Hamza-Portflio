import Footer from "../../components/Footer/Footer"
import CertificateSection from "../../components/sections/Certificate/CertificateSection"
import HeroSection from "../../components/sections/Herosection/HeroSection"
import ServiceSection from "../../components/sections/ServicesSection/ServiceSection"


const Home = () => {
    return (
        <div>
            <HeroSection/>
            <ServiceSection/>
            <CertificateSection/>
            <Footer/>
        </div>
    )
}
export default Home