import React from 'react'
import { Link } from 'react-router-dom'

const aboutSec = props => {
    return (
        // About section start
        <section className="about">
            {/* <img src={ require("../assets/images/china-rose.png") } alt="" className="flower-1" />
            <img src={ require("../assets/images/jasmine.png") } alt="" className="flower-2" /> */}

            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-md-12 m-auto">
                        <div className="sec-heading">
                            <img src={ require("../assets/images/NewLogoLeila.png") } alt="" />
                            <span className="tagline">A propos de nous</span>
                            <h3 className="sec-title">Pour vous, nous avons choisi l'exception</h3>
                            {/* <p>It’s the end of summer the sweltering heat makes human sweat in the night and makes the plants and trees wilt even in the moonlit nights. The eastern wind breeze brings an eerie feeling, that the monsoon clouds are soon coming, there is a strange silence in the ears, the sky gets darker and darker</p> */}
                            <p>Que ce soit pour un anniversaire, un mariage, une fête de famille ou une présentation de produit, nous vous proposons des créations sur-mesures et une coordination complête afin de rendre votre évènement inoubliable !</p>
                        </div>
                        <Link to="/about" className="btn btn-round">En Savoir Plus</Link>
                    </div>
                </div>
            </div>      
        </section>
        // About section end 
        )
}

export default aboutSec