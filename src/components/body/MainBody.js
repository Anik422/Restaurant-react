import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Route, Routes } from "react-router";

const MainBody = () => {
    return (
        <div>
            <Routes>
                <Route path="/" cxact element={<Home />}></Route>
                <Route path="/menu" cxact element={<Menu />}></Route >
                <Route path="/contact" cxact element={<Contact />}></Route >
                <Route path="/about" cxact element={<About />}></Route >
            </Routes>
        </div>
        );
};

                        export default MainBody;