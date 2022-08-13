
import AnimatedLetters from '../animatedLetters'
import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import { useState, useEffect } from 'react'
import anime from 'animejs';
import './index.scss'

function Intro() {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArr = ['E', 'n', 'z', 'o', 'D', 'o', 's', 'S', 'a', 'n', 't', 'o', 's']
  const jobArr = ['W', 'e', 'b', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
  const hiArr = ['H', 'o', 'l', 'a', ',']
  const imArr = ['y', 'o', 's', 'o', 'y']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  useEffect(() => {
    anime({
      targets: "#Layer_1 .st0",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 2000,
      delay: function(el, i) { return i * 250 },
      direction: "alternate",
      loop: false
    });
  }, [])



  return (
    <div className='container'>
      <div className='intro-left'>
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={hiArr} idx={1} /> <br /> <AnimatedLetters letterClass={letterClass} strArray={imArr} idx={6} />
          <AnimatedLetters letterClass={letterClass} strArray={nameArr} idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArr} idx={30} />
        </h1>
        <h2>Frontend Developer / Backend Developer / FullStack Developer</h2>
        <a href='#' className='intro-button'>Contactame</a>
      </div>
      <div className='intro-right'>
        <Logo/>
      </div>
    </div>
  )
}

export default Intro