import React, { Component } from 'react'
//import './style.css'
import './card.css'

export class Card extends Component {

    render() {
        return (
            <div className="card">
                {this.props.children}
            </div>
        )

    }

}




