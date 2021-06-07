import React, {Component} from 'react'

class LifeCycle extends React.Component{

    constructor(){

        super();

        this.state = {
            number : 0
        }
    }

    componentWillMount(){
        alert("componentWillMount will execute first")
    }

    componentDidMount(){
        alert("componentDidMount will execute next")
    }

    render(){

        return <div>

            <h1>Life Cycle : componentWillMount() & componentDidMount()</h1>

            <h1>{this.state.number}</h1>
        </div>
    }
}

export default LifeCycle