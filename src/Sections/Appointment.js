import React from 'react'

const appointment = props => {
    return (
        // Appointment section start
        <div className=" appointmentHome">
            <div className="appointmentHome-wrap">
                <figure>
                    <img src={ require("../assets/images/appointment-img.jpg") } alt="" />
                </figure>
                <div className="appointmentHome-form">
                    <form action="#">
                        <div className="form-field half-width">
                            <input type="text" placeholder="Nom" required />
                            <input type="email" placeholder="Adresse Email" required />
                        </div>
                        <div className="form-field half-width">
                            <div className="select-field">
                                <select>
                                    <option>Decoration</option>
                                    <option>Planification d'évènements</option>
                                </select>
                            </div>
                            <input type="tel" placeholder="Numéro de téléphone" />
                        </div>
                        <div className="form-field half-width">
                            <input type="date" placeholder="date" />
                            <input type="time" placeholder="heure" />
                        </div>
                        <div className="form-field">
                            <textarea name="notes" placeholder="Votre message"></textarea>
                        </div>
                        <button className="btn btn-round">Prendre rendez-vous</button>
                    </form>
                </div>
            </div>
        </div>
        // Appointment section end
    )
}
export default appointment