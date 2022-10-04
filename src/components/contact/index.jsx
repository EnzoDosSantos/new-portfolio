import { ReactComponent as Github } from '../../assets/images/github.svg'
import { ReactComponent as Linkedin } from '../../assets/images/linkedin.svg'
import { useEffect, useState } from 'react'
import validate from './validate';
import anime from 'animejs';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";
import Tilt from 'react-tilt'
import './index.scss'

function Contact() {
    useEffect(() => {
        anime({
            targets: "#Layer_2 .st0",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 3000,
            delay: function (el, i) { return i * 1000 },
            direction: "alternate",
            loop: false
        });
    }, [])

    const [input, setInput] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        setErrors(validate(input))
    }, [input])

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }


    const sendEmail = (e) => {
        e.preventDefault()
        if (Object.keys(errors).length > 0) {
            return toast.error("Por favor complete todos los campos.")
        }
        emailjs.sendForm('service_lx6nkoo', 'template_h5q99uw', input.email, 'bNXGT0sYRezR-bTZJ')
            .then((result) => {
                toast(
                    `¡Gracias por escribirme, ${input.name}! Te responderé lo más pronto posible.`,
                    {
                        icon: "😁",
                    }
                )
                return setInput({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                })
            }, (error) => {
                return toast.error("Ha sucedido un error. Por favor, inténtalo de nuevo.")
            });
    }

    return (
        <section className="contact-container">
            <div className="form-container">
                <h1>Contactame</h1>
                <form onSubmit={sendEmail}>
                    <span>
                        <div className="input">
                            <input
                                className="input-field"
                                placeholder="Nombre"
                                type="text"
                                name="name"
                                autoComplete="off"
                                onChange={(e) => handleChange(e)}
                                value={input.name}
                            />
                            {errors.name && (
                                <span className="errors">Este campo es requerido</span>
                            )}
                            <span className="input-border"></span>
                        </div>
                        <div className="input">
                            <input
                                className="input-field"
                                placeholder="Email"
                                autoComplete="off"
                                name="email"
                                type="email"
                                onChange={(e) => handleChange(e)}
                                value={input.email}
                            />
                            {errors.email && (
                                <span className="errors">Este campo es requerido</span>
                            )}
                            <span className="input-border"></span>
                        </div>
                    </span>
                    <div className="input">
                        <input
                            className="input-field"
                            placeholder="Asunto"
                            autoComplete="off"
                            name="subject"
                            type="text"
                            onChange={(e) => handleChange(e)}
                            value={input.subject}
                        />
                        <span className="input-border"></span>
                    </div>
                    <div className="input">
                        <textarea
                            className="input-field"
                            name="message"
                            placeholder="Mensaje"
                            autoComplete="off"
                            onChange={(e) => handleChange(e)}
                            value={input.message}
                        >
                        </textarea>
                        {errors.message && (
                            <span className="errors">Este campo es requerido</span>
                        )}
                        <span className="input-border"></span>
                    </div>
                    <button
                        type="submit"
                    >
                        <span>Enviar mensaje</span>
                    </button>
                </form>
            </div>
            <div className="container-reds">
                <h1>Otros medios de contacto</h1>
                <div className="reds">
                    <Tilt options={{
                        max: 35,
                        perspective: 300,
                        speed: 500,
                        scale: 1.2,
                        transition: true,
                        reset: true,
                        easing: 'easy-in-out'
                    }} className="red">
                        <a href='https://github.com/EnzoDosSantos' target='__blank'>
                            <Github />
                        </a>
                    </Tilt>
                    <Tilt options={{
                        max: 35,
                        perspective: 300,
                        speed: 500,
                        scale: 1.2,
                        transition: true,
                        reset: true,
                        easing: 'easy-in-out'
                    }} className="red">
                        <a href='https://www.linkedin.com/in/enzods/' target='__blank'>
                            <Linkedin />
                        </a>
                    </Tilt>
                </div>
            </div>
            <Toaster position='top' />
        </section>
    )
}

export default Contact