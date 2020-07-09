import React from 'react'
import { Link } from 'react-router-dom'

const footer = props => {

    return (
        // Footer strat
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <Link to="index.html" className="logo foo-logo">
                            <img src={ require("../assets/images/NewLogoLeila.png") } alt="" />
                        </Link>
                        <nav className="foo-nav">
                            <ul> 
                                <li><Link to="#">Home</Link></li>
                                <li><Link to="#">About</Link></li>
                                <li><Link to="#">feature</Link></li>
                                <li><Link to="#">service</Link></li>
                                <li><Link to="#">Contact</Link></li>
                            </ul>
                        </nav>
                        <div className="foo-social">
                            <Link to="#"><i className="ti-facebook"></i></Link>
                            <Link to="#"><i className="ti-twitter-alt"></i></Link>
                            <Link to="#"><i className="ti-vimeo-alt"></i></Link>
                            <Link to="#"><i className="ti-instagram"></i></Link>
                        </div>
                        <p className="copyright">&copy; COPYRIGHT 2020 <a href="https://planificadore.com">PLANIFICADORE.COM.</a> TOUT DROIT RESERVEE.</p>
                    </div>
                </div>
            </div>
        </footer>
        // Footer end
    )
}

export default footer