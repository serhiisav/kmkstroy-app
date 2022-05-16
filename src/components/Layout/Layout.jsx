import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Services from './../../pages/Services/Services';
import About from './../../pages/About/About';
import Contacts from "../../pages/Contacts/Contacts";
import Intro from "../Intro/Intro";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import SubmitForm from "../SubmitForm/SubmitForm";
import Gallery from "../../pages/Gallery/Gallery";
import Partners from "../../pages/Partners/Partners";


const Layout = () => {
    return (
        <>
            <Header />
            <ScrollToTop />
            <main className="main-page">
                <Intro />
                <About />
                <Services />
                <Gallery />
                <Partners />
                <SubmitForm />
                <Contacts />
                <Outlet />
            </main>
        </>
    )
}
export default Layout;