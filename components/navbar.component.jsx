import { useState } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse, NavbarText } from "reactstrap"
import Link from 'next/link'

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    const navItems = [{
        name: 'Home',
        href: '/'
    },
    {
        name: 'About Us',
        href: '/about-us'
    },
    {
        name: 'Used Cars',
        href: '/used-cars'
    },
    {
        name: 'Find Vehicle',
        href: '/find-vehicle'
    },
    {
        name: 'Contact Us',
        href: '/contact-us'
    }
    ];

    return (
        <Navbar color="light" light expand="md" full>
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={() => setOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    {
                        navItems.map((navItem, i) => {
                            return (
                                <NavItem key={i}>
                                    <NavbarText>
                                        <Link href={navItem.href}>
                                            <a className="nav-link" >{navItem.name}</a>
                                        </Link>
                                    </NavbarText>
                                </NavItem>
                            )
                        })
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default NavBar