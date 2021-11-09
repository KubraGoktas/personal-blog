import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap'
import logo from '../assets/images/logo.png'

const Header = () => {
    const [open, setopen] = useState(false)
    const navLinks = [
        {
            text: 'About Me',
            path: "/AboutMe"
        },
        {
            text: 'My Work',
            path: "/MyWork"
        },
        {
            text: 'Contact Me',
            path: "/ContactMe"
        },
        {
            text: 'Coments',
            path: "/Comments"
        }
    ]
    return (
        <div>
            <Navbar
                color="dark"
                dark
                expand="md"
                light
            >
                <NavbarBrand href="/">
                    <img src={logo} width={50} height={50} />
                </NavbarBrand>
                <NavbarToggler onClick={()=>setopen(!open)} />
                <Collapse isOpen={open} navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >

                        {
                            navLinks.map((item, key) => {
                                return (
                                    <NavItem>
                                        <NavLink>
                                            <Link
                                                to={{
                                                    pathname: item.path,
                                                    // state: { fromDashboard: true }
                                                }}
                                                className='navlink'
                                            >
                                                {item.text}
                                            </Link>
                                        </NavLink>
                                    </NavItem>
                                )
                            })
                        }


                    </Nav>
                    {/* <NavbarText>
                        Simple Text
                    </NavbarText> */}
                </Collapse>
            </Navbar>
        </div >
    )
}

export default Header
