import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
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
        <>

            <Navbar
                color="dark"
                dark
                expand="md"
                light
                className="sticky"
            >
                <NavbarBrand href="/">
                    <img src={logo} width={50} height={50} alt='logo' />
                </NavbarBrand>
                <NavbarToggler onClick={() => setopen(!open)} />
                <Collapse isOpen={open} navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >

                        {
                            navLinks.map((item, key) => {
                                return (
                                    <NavItem key={key}>
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

        </>
    )
}

export default Header
