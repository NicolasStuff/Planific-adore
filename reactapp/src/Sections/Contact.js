import React, { Component } from 'react'
import axios from '../axios-orders'

class Contact extends Component {

    state = {
        contactInfo: {
            firstName: '',
            email: '',
            message: '',
        },        
        messagePosted: false
    }

    inputChangeHandler = (e) => {

        const updatedContactInfo = {...this.state.contactInfo}
        updatedContactInfo[e.target.name] = e.target.value


        this.setState({
            ...this.state,
            contactInfo: updatedContactInfo
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()

        // console.log(prevComments, 'Comment form')
        axios.post("/contactInfo.json", this.state.contactInfo)
            .then( res => { 
                // console.log("Successfull")
                this.setState({
                    messagePosted: true
                })
                this.props.history.push('/')
            })
            .catch( err => {
                console.log(err.message)
            })
    }


    render () {
        return (
            // Contact section start
            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 m-auto">
                            <div className="sec-heading">
                            <h3 className="sec-title">Restons en contact</h3>
                            <p>Une demande particulière ? Laisser nous vos coordonnées nous vous répondrons sous 48h, merci !</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 col-md-12 m-auto">
                            <div className="row">
                                <div className="col-md-4">
                                    <address>
                                        <span className="ti-map-alt"></span>
                                        Ile-de-France,  <br />
                                        Paris, France
                                    </address>
                                    <address>
                                        <span className="ti-email"></span>
                                        <a href="mailto:samanimidf@gmail.com">samanimidf@gmail.com</a>
                                        <a href="mailto:samanimidf@gmail.com">samanimidf@gmail.com</a>
                                    </address>
                                    <address>
                                        <span className="ti-tablet"></span>
                                        <a href="tel:+336 61 08 52 94">tel:06 61 08 52 94</a>
                                        <a href="tel:336 61 08 52 94">06 61 08 52 94</a>
                                    </address>
                                </div>
                                <div className="col-md-7 offset-md-1">
                                    <form className="contact-form" onSubmit={ this.onSubmitHandler }>
                                        <input 
                                            type="text" 
                                            name="firstName" 
                                            placeholder="Prenom" 
                                            onChange={ this.inputChangeHandler}
                                            value={this.state.contactInfo.firstName} 
                                            required
                                        />
                                        <input 
                                            type="email" 
                                            name="email" 
                                            placeholder="Adresse Email" 
                                            onChange={ this.inputChangeHandler }
                                            value={this.state.contactInfo.email}
                                            required
                                        />
                                        <textarea 
                                            name="message" 
                                            placeholder="Ecrire un commentaire"
                                            onChange={ this.inputChangeHandler }
                                            value={this.state.contactInfo.message}
                                            required
                                        ></textarea>
                                        <button type="submit" className="btn btn-round">Envoyer maintenant</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            // Contact section end
        )
    }
}

export default Contact