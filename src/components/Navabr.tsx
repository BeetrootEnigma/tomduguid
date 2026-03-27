import { Link, useLocation } from 'react-router-dom'

interface NavbarProps {
    scrolled: boolean
}

export const Navbar = ({ scrolled }: NavbarProps) => {
    const { pathname } = useLocation()

    const classes = [
        'nav',
        scrolled && pathname === '/' ? 'scrolled' : '',
        pathname === '/exhibitions' ? 'on-page' : '',
    ].filter(Boolean).join(' ')

    return (
        <nav className={classes}>
            <Link className="nav-name" to="/">Tom Duguid</Link>
            <ul className="nav-links">
                <li><Link className={pathname === '/' ? 'active' : ''} to="/#paintings">Paintings</Link></li>
                <li><Link className={pathname === '/exhibitions' ? 'active' : ''} to="/exhibitions">Exhibitions</Link></li>
                <li><Link className={pathname === '/about' ? 'active' : ''} to="/about">About</Link></li>
            </ul>
        </nav>
    )
}