import appGamery from '../../assets/images/App_Gamery.png'
import scriptMusic from '../../assets/images/Script_Music.png'
import Card from '../card'
import './index.scss'

function Proyects() {

    const cards = [{
        title: 'Script Music',
        id: 1,
        description: 'Script Music es una tienda de instumentos musicales hecha en React Native.',
        image: scriptMusic,
        link: 'https://github.com/JaluGJ/ScriptMusic'
    },
    {
        title: 'App Gamery',
        id: 2,
        description: 'App Gamery es una SPA donde se puede ver información de más de 100 juegos.',
        image: appGamery,
        link: 'https://github.com/EnzoDosSantos/PI-VideoGames'
    }
]


  return (
    <div className="conteiner-cards">
        <div className="conteiner-cards-left">
            <h1>Mis proyectos</h1>
            <span>En esta sección tendras acceso a una lista de mis proyectos destacados. <br/></span>
            <span>En cuanto tenga más ire actualizando la misma.</span>
        </div>
        <div className="conteiner-cards-right">
            {
                cards.map(card => {
                    return (
                        <div key={card.id}>
                        <Card 
                        image={card.image}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                        />
                        </div>
                    )
                })
            }
            </div>
    </div>
  )
}

export default Proyects