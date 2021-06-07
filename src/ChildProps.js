import React,{Component} from 'react'

class ChildProps extends React.Component{

    constructor(props){

        super(props);

    }

    render(){
        return <div>
            <h1>Child Props</h1>
            <h1>Language received from Parent Props is {this.props.language}</h1>
            <h1>Framework received from parent Props is {this.props.framework}</h1>
        </div>
    }

}

export default ChildProps