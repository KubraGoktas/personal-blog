import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Row } from 'reactstrap'


const Header = () => {
    const [open, setopen] = useState(false)
    const navLinks = [
        {
            text: 'About Me',
            path: "#AboutMe"
        },
        {
            text: 'My Work',
            path: "#MyWork"
        },
        {
            text: 'Coments',
            path: "#Comments"
        },
        {
            text: 'Contact Me',
            path: "#ContactMe"
        },
        
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
                {/* <NavbarBrand href="/">
                    <img src={logo} width={50} height={50} alt='logo' />
                </NavbarBrand> */}
                <NavbarToggler onClick={() => setopen(!open)} />
                <Collapse isOpen={open} navbar>

                    <Nav
                        // className="me-auto"
                        navbar
                        className='navitem'
                    >
                        {
                            navLinks.map((item, key) => {
                                return (
                                    <NavItem key={key}>
                                        <NavLink className='navlink' href={item.path}>
                                            {item.text}
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
