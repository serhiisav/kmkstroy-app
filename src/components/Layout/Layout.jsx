import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Services from './../Services/Services';


const Layout = () => {
    return (
        <>
            <Header />
            <main className="main-page">
                <Outlet />
            </main>
        </>
    )
}
export default Layout;