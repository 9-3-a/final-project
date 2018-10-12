import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

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
            <Navbar color="indigo" dark expand="md" scrolling>
                <NavbarBrand href="/">
                    <strong>Dio</strong>
                    <img source="logo.svg" height="30"/>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                        <NavItem active>
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/reviews">Newsletter</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="#">Pricing</NavLink>
                        </NavItem>
                        <NavItem>
                        <Dropdown>
                            <DropdownToggle nav caret>Dropdown</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="#">Contact Us</DropdownItem>
                                <DropdownItem href="#">Reviews</DropdownItem>
                                <DropdownItem href="#">About Us</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        </NavItem>
                    </NavbarNav>
                    <NavbarNav right>
                        <NavItem>
                            <NavLink to="#">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="#">Checkout</NavLink>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavbarFeatures;