import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'

const Header = () => {
    const [Menu, toggleMenu] = useState(false)
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint992 = 992

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
    })

    return (
        <>
            <header className="app-header d-flex flex-wrap">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                        {/* <AnchorLink to="/" className="brand-logo d-flex">
                            <img src={toAbsoluteUrl('/images/logo.svg')} alt="Letz Drop" />
                        </AnchorLink> */}
                        {/* <nav className={`main-nav${Menu ? ' open' : ''}`}>
                            <ul className="d-flex flex-wrap">
                                <li>
                                    <NavLink activeClassName='active' to="/merchant_inquiry">Product Suppliers</NavLink>
                                </li>
                                <li>
                                    <Link to="how_to" spy={true} smooth={true}>Buying on Letz Drop</Link>
                                </li>
                                <li>
                                    <Link to="recommended_products" spy={true} smooth={true}>View Products</Link>
                                </li>
                                {isLoggedIn && <li>
                                    <NavLink onClick={() => { handleLogout() }} activeClassName='active' to="/">Logout</NavLink>
                                </li>}
                            </ul>
                        </nav>
                        {width < breakpoint992 && <Link to="/"
                            onClick={(e) => { e.preventDefault(); toggleMenu(!Menu) }}
                            className={`toggle-menu ${Menu ? 'active' : ''}`}
                        >
                            <span className="bar bar-top"></span>
                            <span className="bar bar-center"></span>
                            <span className="bar bar-bottom"></span>
                        </Link>} */}
                        <h3 style={{ fontFamily: 'Roboto-Regular' }}>Covid Vaccine Tracker</h3>
                        <nav className={`main-nav${Menu ? ' open' : ''}`}>
                            <ul className="d-flex flex-wrap">
                                <li>
                                    <NavLink activeClassName='active' to="/home/pin">Find By Pin</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName='active' to="/home/district">Find By District</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName='active' to="/about">About us</NavLink>
                                </li>
                            </ul>
                        </nav>
                        {width < breakpoint992 && <Link to="/pin"
                            onClick={(e) => { e.preventDefault(); toggleMenu(!Menu) }}
                            className={`toggle-menu ${Menu ? 'active' : ''}`}
                        >
                            <span className="bar bar-top"></span>
                            <span className="bar bar-center"></span>
                            <span className="bar bar-bottom"></span>
                        </Link>}
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;