import React, {Component} from 'react'

class States extends React.Component{

    constructor(){

        super();

        this.state ={

            'Player' : 'Ronaldo',
            'Country' : 'Japan'
        }
    }
     
    render(){

        return <div>
            <h1>This is States Component</h1>
            <h1>Player Name is : {this.state.Player}</h1>
            <h1>He Belongs to {this.state.Country}</h1>
        </div>

    }
}

export default States