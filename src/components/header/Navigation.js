import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { Link } from "react-router-dom";

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
        }
    }

    navToggler = () =>{
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }

    render() {
        return (
            <div className="navigation">

                <Navbar dark color="dark" expand='sm'>
                    <div className="container" style={{ display: "inline-flex", textAlign:'center', margin:"0px auto"}}>
                        <NavbarToggler onClick={this.navToggler} />
                        <NavbarBrand href="/">
                            <img
                                alt="logo"
                                src="/logo192.png"
                                style={{
                                    height: 40,
                                    width: 40
                                }}
                            />
                            Restaurant
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar >

                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <Link to='/' className="nav-link active">Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/menu' className="nav-link">Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/about' className="nav-link">About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/contact' className="nav-link">Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
};

export default Navigation;