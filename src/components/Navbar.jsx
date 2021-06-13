import React, { Component } from 'react';
import '../style/css/style.css'
import {
Navbar,
NavbarBrand,
Nav,
NavItem,
NavLink,
} from 'reactstrap';
class Navi extends Component {
render() {
return(
<div className="container">
    {/* NAVIGATION BAR */}
    <div className="navbar-container">
        <Navbar light expand="md">
            <NavbarBrand href="/">Sultan Naufal </NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href='/'>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/about'>About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/contact'>Contact</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </div>
</div>
)
}

}
export default Navi;