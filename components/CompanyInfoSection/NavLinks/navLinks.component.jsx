import {Col, Row} from "reactstrap";
import Link from "next/link";

const NavLinks = () => {
    const linksArr = [{
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

    const navItems = linksArr.map((link, i) => {
        return (
            <Row key={i}>
                <Col>
                    <Link href={link.href}>
                        {link.name}
                    </Link>
                </Col>
            </Row>
        )
    })
    return <div className='nav-items-link'>{navItems}</div>
}

export default NavLinks;