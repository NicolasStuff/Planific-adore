import React from 'react'
import { Link } from 'react-router-dom'

const banner = props => {
    return (
        // Banner section start
        <section className="banner">
            {/* <div className="spa-img">
                <img src={ require("../assets/images/appointment-img.jpg") } alt="" />
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <span>event planneur</span>
                            <h2>Organisateur d'évènements créatifs</h2>
                            <p>Spécialiste dans la personnalisation, nous saurons donner à votre évènement le charactère unique qu'il mérite.</p>
                            <Link to="#" className="btn">Reserver Maintenant</Link>
                            <a className="video-btn" data-fancybox href="https://www.youtube.com/watch?v=QWUPm0ND7HY">
                                <i className="ti-control-play"></i>
                                Notre histoire
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // Banner section end 
    )
}

export default banner