import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavbarProps {
    scrolled: boolean
    hidden?: boolean
    onMenuOpenChange?: (open: boolean) => void
}

export const Navbar = ({ scrolled, hidden, onMenuOpenChange }: NavbarProps) => {
    const { pathname } = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    // Close menu on route change
    useEffect(() => { setIsOpen(false) }, [pathname])

    useEffect(() => {
        onMenuOpenChange?.(isOpen)
    }, [isOpen, onMenuOpenChange])

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    const classes = [
        'nav',
        scrolled && pathname === '/' ? 'scrolled' : '',
        pathname !== '/' && pathname !== '/about' ? 'on-page' : '',
        isOpen ? 'menu-open' : '',
        hidden && !isOpen ? 'nav-hidden' : '',
    ].filter(Boolean).join(' ')

    return (
        <>
            <nav className={classes}>
                <Link className="nav-name" to="/">Tom Duguid</Link>

                {/* Desktop links */}
                <ul className="nav-links">
                    <li><Link className={pathname === '/' ? 'active' : ''} to="/#paintings">Paintings</Link></li>
                    <li><Link className={pathname === '/exhibitions' ? 'active' : ''} to="/exhibitions">Exhibitions</Link></li>
                    <li><Link className={pathname === '/about' ? 'active' : ''} to="/about">About</Link></li>
                </ul>

                {/* Hamburger button — mobile only */}
                <button
                    className="hamburger"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((v) => !v)}
                >
                    <span className={`hamburger-bar${isOpen ? ' open' : ''}`} />
                    <span className={`hamburger-bar${isOpen ? ' open' : ''}`} />
                    <span className={`hamburger-bar${isOpen ? ' open' : ''}`} />
                </button>
            </nav>

            {/* Mobile menu overlay */}
            <div className={`mobile-menu${isOpen ? ' mobile-menu--open' : ''}`} aria-hidden={!isOpen}>
                <ul className="mobile-menu-links">
                    <li><Link className={pathname === '/' ? 'active' : ''} to="/#paintings" onClick={() => setIsOpen(false)}>Paintings</Link></li>
                    <li><Link className={pathname === '/exhibitions' ? 'active' : ''} to="/exhibitions" onClick={() => setIsOpen(false)}>Exhibitions</Link></li>
                    <li><Link className={pathname === '/about' ? 'active' : ''} to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                </ul>
            </div>
        </>
    )
}