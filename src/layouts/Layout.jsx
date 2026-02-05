import { Outlet } from "react-router-dom";
import { NavBar } from "../components/sections/NavBar.jsx";

export function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}
