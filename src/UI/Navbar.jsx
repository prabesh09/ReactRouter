import React, { useEffect, useLayoutEffect, useState } from 'react'
import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart, FiMenu } from 'react-icons/fi'
import { MdAccountCircle } from 'react-icons/md'

const Navbar = () => {
    const [menu, setMenu] = useState(true)
    const [toggle, setToggle] = useState()

    useEffect(() => {
        const triggerEvent = () => {
            if (window.innerWidth <= 1050) {
                setMenu(false)
                setToggle(false)
            } else {
                setMenu(true)
                setToggle(true)
            }
        }
        window.addEventListener("resize", triggerEvent)
    })

    useLayoutEffect(() => {
        window.innerWidth <= 1050 ? setMenu(false) : setMenu(true)
        if (window.innerWidth >= 1050) {
            setToggle(true)
        }
    })

    const closeMenuHandler = () => {
        if (window.innerWidth <= 1050) {
            setToggle(false)
        }
    }

    return (
        <nav className={menu ? "navbar" : "navbar mobile-menu"}>
            <div className='logo'>
                <NavLink to={"/"}>anyastore</NavLink >
            </div>


            {toggle && <ul className={menu ? "nav-links" : "nav-links mobile-nav-links"}>
                <NavLink to={"/"} onClick={closeMenuHandler}>Home</NavLink>
                <NavLink to={"/about"} onClick={closeMenuHandler}>About</NavLink >
                <NavLink to={"/order"} onClick={closeMenuHandler}>Order</NavLink>
                <NavLink to={"/member"} onClick={closeMenuHandler}>Member</NavLink>
                <NavLink to={"/blog"} onClick={closeMenuHandler}>Blog</NavLink>
            </ul>}

            <ul className='right-section'>
                <NavLink to={"/cart"} onClick={closeMenuHandler}>
                    <FiShoppingCart />
                </NavLink>

                <NavLink to={"/account"} onClick={closeMenuHandler}>
                    <MdAccountCircle />
                </NavLink>

                {
                    !menu && <div>
                        <FiMenu className='menu-btn' onClick={() => setToggle(!toggle)} />
                    </div>
                }
            </ul>
        </nav >
    )
}

export default Navbar