import React from 'react'

const appointment = props => {
    return (
        // Appointment section start
        <section className="appointment">
            <div className="appointment-wrap">
                <figure>
                    <img src={ require("../assets/images/appointment-img.jpg") } alt="" />
                </figure>
                <div className="appointment-form">
                    <form action="#">
                        <div className="form-field half-width">
                            <input type="text" placeholder="NAME" required />
                            <input type="email" placeholder="Email address" required />
                        </div>
                        <div className="form-field half-width">
                            <div className="select-field">
                                <select>
                                    <option>Select service</option>
                                    <option>Select service 1</option>
                                </select>
                            </div>
                            <input type="tel" placeholder="Phone numer" />
                        </div>
                        <div className="form-field half-width">
                            <input type="date" placeholder="date" />
                            <input type="time" placeholder="time" />
                        </div>
                        <div className="form-field">
                            <textarea name="notes" placeholder="Your notes"></textarea>
                        </div>
                        <button className="btn btn-round">Make an Appointment</button>
                    </form>
                </div>
            </div>
        </section>
        // Appointment section end
    )
}

export default appointment