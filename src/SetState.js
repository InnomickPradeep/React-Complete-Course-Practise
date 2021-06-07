import React,{Component} from 'react'
var dateTimes = new Date();
var seconds = dateTimes.getSeconds();

class SetState extends React.Component{

    constructor(){

        super();

        this.state ={

            country : 'America',
            secs : 50,
            language : 'English',
        }

    }

    changeCountry = () => {

            this.setState({country : 'Australia'})
            this.setState({language : 'French'})
            this.setState({secs : seconds})
    }

    render(){

        return <div>
            <h1>This is SetState Component {this.state.secs}</h1>
            <h1>Country is {this.state.country}</h1>
            <h1>Language is {this.state.language}</h1>
            <button onClick={this.changeCountry}>ChangeCountry</button>
        </div>

    }

}

export default SetState