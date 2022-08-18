import Tilt from 'react-tilt'
import './index.scss'

function Card({ image, title, description, link }) {

  return (
    <div className="container-card">
      <Tilt options={{
        max: 35,
        perspective: 300,
        speed: 500,
        scale: 1,
        transition: true,
        reset: true,
        easing: 'easy-in-out'
      }} className="card">
        <h2 className='card-title'>{title}</h2>
        <img className='image' src={image} height={200} width={200} alt={title} />
        <div className="card-description">
          <p>{description}</p>
          <span>Más información <a href={link} target='__blank'>aquí</a>.</span>
        </div>
      </Tilt>
    </div>
  )
}

export default Card