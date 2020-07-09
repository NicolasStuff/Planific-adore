import React from 'react'

const reservation = props => {
    return (
        // Appointment section start
        <section className="appointment">
            <div className="appointment-wrap">
                <figure>
                    <img src={ require("../assets/images/appointment-img.jpg") } alt="" />
                </figure>
                <div className="appointment-form">
                    <form action="#">
                    <h4 className="sec-title">Informations sur l'évènement</h4>
                        <div className="form-field half-width">
                            <input type="text" placeholder="Nom et prénom" required />
                            <input type="email" placeholder="Adresse Email" required />
                        </div>
                        <div className="form-field half-width">
                            <div className="select-field">
                                <select>
                                    <option>Formule Sweet</option>
                                    <option>Formule Prestige</option>
                                    <option>Formule Thématique</option>
                                    <option>Formule Flower</option>
                                </select>
                            </div>
                            <input type="tel" placeholder="Numéro de téléphone" />
                        </div>
                        <div className="form-field half-width">
                            <input type="text" placeholder="Adresse de l'évènement (Ville ou code postal)" required />
                            <div className="select-field">
                                <select>
                                    <option>Type d'évènements : Baptème</option>
                                    <option>Type d'évènements : Mariage</option>
                                    <option>Type d'évènements : Baby-shower/Fêtes de naissance</option>
                                    <option>Type d'évènements : Anniversaire</option>
                                    <option>Type d'évènements : Fiançaille</option>
                                    <option>Type d'évènements : Corporate Event</option>
                                    <option>Autres évènements(A préciser)</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-field half-width">
                            <input type="date" placeholder="date" />
                            <input type="time" placeholder="time" />
                        </div>

                        <h4 className="sec-title">Suppléments</h4>
                        <h6 className="sec-title">Sucrée et Salée</h6>
                        <h7 className="sec-title" style={{marginTop: 10, marginBottom: 10}}>Nous proposons d'accompagner nos décorations avec :</h7>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1" >
                            Sweet table sucrée assortie à votre décoration et au prénom (gateau central, cupcakes, pop cakes, magnum cakes, sucettes de meringues et sablés
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1" >
                            Table de mignardises salées
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1" >
                            Traiteur complet
                            </label>
                        </div>
                        {/* <h6 className="sec-title" style={{marginTop: 15}}>Formule d'animation enfants lors de l'évènement</h6>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1" >
                            Oui j'aimerais
                            </label>
                        </div>
                        <div className="form-field half-width">
                            <input type="text" placeholder="nombre d'enfants" />
                        </div> */}

                        <h6 className="sec-title" style={{marginTop: 10}}>Autres souhaits</h6>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1" >
                            Souhait 1
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1" >
                            Souhait 2
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1" >
                            Souhait 3
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1" >
                            Souhait 4
                            </label>
                        </div>
                        <div className="form-field">
                            <textarea name="notes" placeholder="Plus d'informations sur l'évènement"></textarea>
                        </div>
                        <h6 className="sec-title" style={{marginTop: 15}}>Une fois le formulaire envoyé, vous recevrez un devis par mail et notre équipe prendra contact avec vous par téléphone dans un délais de 24h.</h6>
                        <h6 className="sec-title" style={{marginTop: 15}}>Merci de votre confiance !</h6>
                        <button className="btn btn-round">M'envoyer un devis</button>
                    </form>
                </div>
            </div>
        </section>
        // Appointment section end
    )
}

export default reservation