import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignInForm from '../screens/login';
import SignUpForm from '../screens/register';
import Review from '../screens/review';
import Inventories from '../screens/inventories';
import AboutUs from '../screens/about';
import Newsletter from '../screens/newsletter';


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
           <BrowserRouter>
           <div className="navbarApp">
                <Navbar color="indigo" dark expand="md" scrolling>
                        <NavbarBrand href="/">
                            <strong>Dio</strong>
                            <img source="dioLogo.svg" height="30"/>
                        </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                            <NavItem active>
                                <NavLink to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/newsletter">Newsletter</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/wines">Pricing</NavLink>
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
                                <NavLink to="/signin">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#">Checkout</NavLink>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
                
                <Switch>
                    <Route path = "/signin" component={ SignInForm } />
                    <Route path = "/signup" component={ SignUpForm } />
                    <Route path = "/wines" component = {Inventories} />
                    <Route path= "/review/:wineId" component={Review} />
                    <Route path= "/about" component= { AboutUs } />
                    <Route path= '/newsletter' component= { Newsletter } />
                </Switch>
             </div>
            </BrowserRouter>
        );
    }
}

export default NavbarFeatures;