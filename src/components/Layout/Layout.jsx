import { Outlet } from "react-router-dom"
import Projects from "../../pages/Projects/Projects";
import Header from "../Header/Header"
import Services from './../../pages/Services/Services';
import About from './../../pages/About/About';
import Contacts from "../../pages/Contacts/Contacts";
import Intro from "../Intro/Intro";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import SubmitForm from "../SubmitForm/SubmitForm";


const Layout = () => {
    return (
        <>
            <Header />
            <ScrollToTop />
            <main className="main-page">
                <Intro />
                <About />
                <Services />
                <Projects />
                <SubmitForm />
                <Contacts />

                <Outlet />
            </main>
        </>
    )
}
export default Layout;