import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";


const Navigation = () => {
    return (
        <div className="navigation">

            <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand href="/">
                        <img
                            alt="logo"
                            src="/logo192.png"
                            style={{
                                height: 40,
                                width: 40
                            }}
                        />
                        Restaurant</NavbarBrand>
                </div>
            </Navbar>
        </div>
    );
};

export default Navigation;