import React,{Component} from 'react'
import ChildProps from './ChildProps'

class ParentProps extends React.Component{

    constructor(props){

        super(props);

    }

    render(){
        return <div>
            <h1>Parent Props</h1>

            <h1>Movie received from Parent(App.js)  is {this.props.movie}</h1>

            <ChildProps language = 'Javascript' framework = 'React' />

        </div>
    }

}

export default ParentProps