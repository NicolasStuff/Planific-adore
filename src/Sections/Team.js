import React, { Component } from 'react'
import SingleMember from '../Components/SingleMember'

class Team extends Component {

    state = {
        members: [
            {
                id: 1,
                name: "Leila",
                specialist: 'Creatrice',
                // social: {
                //     facebook: "https://facebook.com",
                //     twitter: "https://twitter.com",
                //     instagram: "https://instagram.com"
                // }
            },
            {
                id: 2,
                name: "Celia",
                specialist: 'Co-creatrice',
                // social: {
                //     facebook: "https://facebook.com",
                //     twitter: "https://twitter.com",
                //     instagram: "https://instagram.com",
                //     googlePlus: "https://google.com"
                // }
            }       
        ]
    }

    render() {
        const members = this.state.members.map( memb => {
            return (
                <div className="col-md-4" key={ memb.id }>
                    <SingleMember 
                        id={ memb.id }
                        name={ memb.name }
                        speciality={ memb.specialist }
                        // social={ memb.social }
                    />
                </div>
                
            )
        })

        return (
            // Team section start
            <section className="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 m-auto">
                            <div className="sec-heading">
                                <h3 className="sec-title">Notre Equipe</h3>
                                <p>Alliant éthique et exemplarité, nous vous proposons des créations uniques, sur mesures et nous vous ferons profiter de nos esprits atypiques afin de vous offrir la plus originale des prestations. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{justifyContent: 'center', alignItems: 'center'}}>
                        { members }
                    </div>
                </div>
            </section>
            // Team section end
        )
    }
    
}

export default Team