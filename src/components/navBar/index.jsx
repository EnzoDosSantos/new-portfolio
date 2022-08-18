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
                <NavLink className={({isActive}) => isActive  ? 'active-link' : 'desactive-link'} to='/'>Home</NavLink>
                <NavLink className={({isActive}) => isActive  ? 'active-link' : 'desactive-link'} to='/about'>Sobre mi</NavLink>
                <NavLink className={({isActive}) => isActive  ? 'active-link' : 'desactive-link'} to='/proyects'>Proyectos</NavLink>
                <NavLink className={({isActive}) => isActive  ? 'active-link' : 'desactive-link'} to='/contact'>Contacto</NavLink>
            </div>
            <div className='nav-bar__burger'>
                <BurguerButton className={({isActive}) => isActive  ? 'active-link' : 'desactive-link'} clicked={menu} handleClick={() => setMenu(!menu)} />
            </div>
            <div className='nav-bar__menu-dark'>
                <div className={`nav-bar__menu ${menu ? 'active-menu' : ''}`}>
        <div className="context">
          <ul>
            <li style={{"--clr": "#DFDCE3"}}>
              <NavLink
                className={({isActive}) => isActive  ? "active-link" : "desactive-link"}
                data-text="&nbsp;Home"
                to="/"
                onClick={() => setMenu(!menu)}
              >
                &nbsp;Home
              </NavLink>
            </li>
            <li style={{"--clr": "#4ABDAC"}}>
              <NavLink
                className={
                    ({isActive}) => isActive  ? "active-link" : "desactive-link"
                }
                data-text="&nbsp;Sobre&nbsp;mi"
                to="/about"
                onClick={() => setMenu(!menu)}
              >
                &nbsp;Sobre mi
              </NavLink>
            </li>
              <li style={{"--clr": "#B2A4FF"}}>
              <NavLink
                className={
                  ({isActive}) => isActive  ?  "active-link" : "desactive-link"
                }
                data-text="&nbsp;Proyectos"
                to="/proyects"
                onClick={() => setMenu(!menu)}
              >
                &nbsp;Proyectos
              </NavLink>
            </li>
                  <li style={{"--clr": "#4717F6"}}>
              <NavLink
                className={
                    ({isActive}) => isActive  ? "active-link" : "desactive-link"
                }
                data-text="&nbsp;Contacto"
                to="/contact"
                onClick={() => setMenu(!menu)}
              >
                &nbsp;Contacto
              </NavLink>
            </li>
          </ul>
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