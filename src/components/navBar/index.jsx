import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import BurguerButton from './burguerMenu';
import './index.scss';

function NavBar() {
    const [menu, setMenu] = useState(false)
    useEffect(() => {
        const changeMenuState = () => {
            if (Number(window.innerHeight) > 770) {
                return setMenu(false)
            }
        }
        window.addEventListener('resize', changeMenuState)
    }, [menu])

    const name = '<EnzoDS />'

    return (
        <nav className='nav-bar'>
            <div className='nav-bar__logo'>
                <h1>{name}</h1>
            </div>
            <div className='nav-bar__links'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>Sobre mi</NavLink>
                <NavLink to='/a'>Proyectos</NavLink>
                <NavLink to='/a'>Tecnologias</NavLink>
                <NavLink to='/a'>Contacto</NavLink>
            </div>
            <div className='nav-bar__burger'>
                <BurguerButton clicked={menu} handleClick={() => setMenu(!menu)} />
            </div>
            <div className='nav-bar__menu-dark'>
                <div className={`nav-bar__menu ${menu ? 'active-menu' : ''}`}>
                    <div className="context">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>Sobre mi</NavLink>
                        <NavLink to='/'>Proyectos</NavLink>
                        <NavLink to='/'>Tecnologias</NavLink>
                        <NavLink to='/'>Contacto</NavLink>
                    </div>
                    <div className="area" >
                        <ul className="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div >
                </div>
            </div>
        </nav>
    )
}

export default NavBar;