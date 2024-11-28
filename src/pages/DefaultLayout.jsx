import { Outlet } from "react-router-dom";

import Header from "../components/AppHeader.jsx";
import Footer from "../components/AppFooter.jsx";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}