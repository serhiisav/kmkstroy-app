import { Outlet } from "react-router-dom"
import Projects from "../../pages/Projects/Projects";
import Header from "../Header/Header"
import Services from './../../pages/Services/Services';
import About from './../../pages/About/About';
import Contacts from "../../pages/Contacts/Contacts";
import Intro from "../Intro/Intro";


const Layout = () => {
    return (
        <>
            <Header />
            <main className="main-page">
                <Intro />
                <About />
                <Services />
                <Projects />
                <Contacts />
                <Outlet />
            </main>
        </>
    )
}
export default Layout;