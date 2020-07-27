import React, {useState} from 'react'

const Appointment = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [type, setType] = useState('')
    const [tel, setTel] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [message, setMessage] = useState('')

    var handleSubmitAppointment = async () => {
        //envoi la data vers le back
        const AppointmentMessage = await fetch('/appointmentHome', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `nameFromFront=${name}&emailFromFront=${email}&typeFromFront=${type}&telFromFront=${tel}&dateFromFront=${date}&timeFromFront=${time}&messageFromFront=${message}`
        })
        console.log(AppointmentMessage)
      }
    return (
            <div className=" appointmentHome">
                <div className="appointmentHome-wrap">
                    <figure>
                        <img src={ require("../assets/images/appointment-img.jpg") } alt="" />
                    </figure>
                    <div className="appointmentHome-form">
                        <form action="/appointmentHome" method='POST'>
                            <div className="form-field half-width">
                                <input type="text" placeholder="Nom" onChange={(e) => setName(e.target.value)} required />
                                <input type="email" placeholder="Adresse Email" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="form-field half-width">
                                <div className="select-field">
                                    <select onChange={(e) => setType(e.target.value)}>
                                        <option>Decoration</option>
                                        <option>Planification d'évènements</option>
                                    </select>
                                </div>
                                <input type="tel" placeholder="Numéro de téléphone" onChange={(e) => setTel(e.target.value)}/>
                            </div>
                            <div className="form-field half-width">
                                <input type="date" placeholder="date" onChange={(e) => setDate(e.target.value)}/>
                                <input type="time" placeholder="heure" onChange={(e) => setTime(e.target.value)}/>
                            </div>
                            <div className="form-field">
                                <textarea name="notes" placeholder="Votre message" onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <button className="btn btn-round" type="button" onClick={() => handleSubmitAppointment()}>Prendre rendez-vous</button>
                        </form>
                    </div>
                </div>
            </div>
        
    )
}
export default Appointment