import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "../pages/error/Error";
import { Home } from "../pages/home/Home";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};