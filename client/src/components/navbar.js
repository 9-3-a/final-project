import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { Link } from 'react-router-dom';



class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
           
           <div className="navbarApp">
                <Navbar color="indigo" dark expand="md" scrolling>
                        <NavbarBrand href="/">
                            <img src="../../images/dioLogo.svg" height="300"/>
                        </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                            <NavItem active>
                                <Link to="/" className="nav-link">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/newsletter" className="nav-link">Newsletter</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/wines" className="nav-link">Pricing</Link>
                            </NavItem>
                            <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>Dropdown</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#">Contact Us</DropdownItem>
                                    <DropdownItem href="/review/:wineId">Reviews</DropdownItem>
                                    <DropdownItem href="/about">About Us</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <NavItem>
                                <Link to="/signin" className="nav-link">Login</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="#" className="nav-link">Checkout</Link>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
             </div>
           
        );
    }
}

export default NavbarFeatures;