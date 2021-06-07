import react from 'react' 

function ChildFunctionalProps(props){

    return <div>
        <h1>Child Functional Props</h1>
        <h1>Country received from Parent Functional Props is {props.country}</h1>
        <h1>Game received from Parent Functional Props is {props.game} </h1>
    </div>

}

export default ChildFunctionalProps