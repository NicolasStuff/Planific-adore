import React, { Fragment } from 'react'
import Procedure from '../../Sections/Procedure'
import Appointment from '../../Sections/Appointment'
import Reservation from '../../Sections/Reservation'
const services = props => {
    return (
        <Fragment>
            <Procedure />
            {/* <Appointment /> */}
            <Reservation />
        </Fragment>
    )
}

export default services