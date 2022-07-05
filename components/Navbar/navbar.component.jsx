import { useState } from "react";
import {Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse, NavbarText, Button} from "reactstrap"
import Link from 'next/link'
import Logo from '../../assets/images/logo.png';
import Image from "next/image";

const styles = {
    inquiryBtn: {
        button: {
            margin:'0px 10px'
        },
        link: {color: 'white', textDecoration: 'none'}
    },
    navBrand: {
        image: {
            paddingTop: '10px',
            width: '200vw',
            height: '70vh'
        },
    },
    navItem: {
        link: {color: '#dc3545'}
    }
}

const SendInquiryBtn = () => {
    return <Button color='danger' style={styles.inquiryBtn.button}>
        <Link href='/pages/send-inquiry'>
            <a style={styles.inquiryBtn.link}>Send Inquiry</a>
        </Link>
    </Button>
}

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
        <Navbar color="light" light expand="md" >
            <NavbarBrand>
                <Image style={styles.navBrand.image} width={styles.navBrand.image.width} height={styles.navBrand.image.height} src={Logo}></Image>
            </NavbarBrand>
            <NavbarToggler onClick={() => setOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    {
                        navItems.map((navItem, i) => {
                            return (
                                <NavItem key={i}>
                                    <NavbarText>
                                        <Link href={navItem.href}>
                                            <a className="nav-link" style={styles.navItem.link}>{navItem.name}</a>
                                        </Link>
                                    </NavbarText>
                                </NavItem>
                            )
                        })
                    }
                    <NavItem>
                        <SendInquiryBtn></SendInquiryBtn>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default NavBar