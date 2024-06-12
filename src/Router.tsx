import React from "react";
import Home from "./pages/Home";
import Repositories from "./pages/Repositories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/repos" element={<Repositories/>} />
            </Routes>
        </Router>
    );
}

export default AppRouter;