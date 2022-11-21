import React from "react";
import MainHeader from "./header/MainHeader";
import MainBody from "./body/MainBody";
import MainFooter from "./footer/MainFooter";

const MainComponent = () => {
    return(
        <div>
            <MainHeader />
            <MainBody />
            <MainFooter />
        </div>
    );
};
export default MainComponent;