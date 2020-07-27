import React, { Component } from 'react'
import axios from '../axios-orders'
import Post from '../Components/Post'
import { Link } from 'react-router-dom'

class Procedure extends Component {

    state = {
        procedures: null
    }

    componentDidMount() {
        axios.get('/procedures.json')
            .then( res => {
                // console.log(res)
                this.setState({ procedures: res.data.slice(0, 3) })
            })
            .catch( err => {
                console.log(err)
            })
    }

    render() {

        // URL should be signle service page -> '/services/'+procedure.id

        let procedures = "Loading..."
        if( this.state.procedures !== null ) {
            procedures = this.state.procedures.map( procedure => {
                return (
                    <Post 
                        key={procedure.id}
                        id={procedure.id}
                        title={procedure.title}
                        excerpt={procedure.excerpt}
                        body={procedure.body}
                        url={'/'}
                    />
                )            
            })
        }
        
        
        return (
            // Procedures section start
            <div>
            <section className="procedures">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 m-auto">
                            <div className="sec-heading">
                                <h3 className="sec-title">Devis</h3>
                                <p>Nous vous proposons 3 formules différentes pour répondre à toutes vos attentes</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        { procedures }
                    </div>
                </div>      
            </section>
            </div>
            // Procedures section end
        )
    }
}

export default Procedure