import BurguerButton from './burguerMenu';
import { useState, useEffect } from 'react'
import './index.scss';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        const changeNavbarState = () => {
            if (Number(window.scrollY) >= 70) {
                return setIsOpen(true)
            }
            return setIsOpen(false)
        }
        window.addEventListener('scroll', changeNavbarState)
    }, [])

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
        <nav className={isOpen ? 'nav-bar active' : 'nav-bar'}>
            <div className='nav-bar__logo'>
                <h1>{name}</h1>
            </div>
            <div className='nav-bar__links'>
                <span>Home</span>
                <span>Sobre mi</span>
                <span>Proyectos</span>
                <span>Tecnologias</span>
                <span>Contacto</span>
            </div>
            <div className='nav-bar__burger'>
                <BurguerButton change={isOpen} clicked={menu} handleClick={() => setMenu(!menu)} />
            </div>
            <div className={!isOpen ? 'nav-bar__menu-dark' : 'nav-bar__menu-gray'}>
                <div className={`nav-bar__menu ${menu ? 'active-menu' : ''}`}>
                    <span>Home</span>
                    <span>Sobre mi</span>
                    <span>Proyectos</span>
                    <span>Tecnologias</span>
                    <span>Contacto</span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;