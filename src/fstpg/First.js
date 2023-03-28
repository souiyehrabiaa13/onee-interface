import React from 'react'
import lg from '../pictures/logo.png'
import './First.css'

const First = () => {
  return (
    <div className='bner'>
        <div className='textbanner'>
            <h1>ONEE</h1>
            <p>
                L’Office National de l’Électricité et de l’Eau potable (ONEE) est le pilier de la stratégie énergétique et bras armé de l’Etat dans le secteur de l’eau et de l’assainissement au Maroc. Depuis le milieu des années 1990, l’Office est sur tous les fronts : généralisation de l’accès à l’électricité et à l’eau potable, épuration des eaux usées et développement du service de l’assainissement liquide,modernisation et élargissement des réseaux de production, de commercialisation et de distribution des ressources électriques et hydrauliques, lutte contre le gaspillage et implémentation de nouveaux instruments et techniques d’économies de l’eau et d’électricité…
            </p>
            <div className='btn'>
                <button>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default First