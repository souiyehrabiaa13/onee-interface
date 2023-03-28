import React from 'react'
import elec from '../pictures/elec.jpg'
import eau from '../pictures/eau.jpg'
import './Service.css'

const Service = () => {
  return (
    <div className='service'>
        <div className='ser_col'>
            <div className='img_col'>
                <img src={elec} alt='img1' className='img1'/>
            </div>
            <div className='textbanner'>
                <h1>Branche Électricité</h1>
                <p>
                Au cœur d'un service public stratégique, l'ONEE joue un rôle important dans l'amélioration du niveau de vie des citoyens marocains et la compétitivité économique du pays.
                Avec 9 897 collaborateurs et 6 762 355 clients (fin 2021), l'ONEE exerce des activités centrées sur les métiers de l'électricité : Production, Transport et Distribution de l'énergie électrique..................
                </p>
            </div>
        </div>
        
        <div className='ser_col'>
            <div className='img_col'>
                <img src={eau} alt='img2' className='img2'/>
            </div>
            <div className='textbanner'>
                <h1>Branche Eau Potable</h1>
                <p>
                L’Office National de l’Électricité et de l’Eau potable (ONEE) est un acteur de référence pour le développement durable au Maroc. Il est le pilier de la stratégie énergétique
                et bras armé de l’Etat dans le secteur de l’eau et de l’assainissement dans le Royaume. Depuis le milieu des années 1990, l’Office est sur tous les fronts : généralisation
                de l’accès à l’électricité et à l’eau potable
                </p>
            </div>
        </div>
    </div>
  )
}

export default Service