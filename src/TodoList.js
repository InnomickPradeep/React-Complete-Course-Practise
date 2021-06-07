import React, { useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './TodoList.css'
import swal from 'sweetalert'

export default function TodoList() {

    const[taskname,setTaskname] = useState('')
    const[tasksList,setTasksList] = useState([])

    function storeTask() {

        setTasksList([...tasksList,taskname])

        swal(taskname,'Task Added Successfully','success');

    }

    function deleteTask(index) {
        var duplicateTasks = [...tasksList];
        duplicateTasks.splice(index,1);
        setTasksList(duplicateTasks)
    }
    
    const displayTasks = tasksList.map( (object,index) => {
        
        return <div className='row justify-content-center'>
            <h1 className='col-md-4 m-1' style={{textAlign:'left'}}>{index+1}.{' '}{object}</h1>
            <button className='btn btn-danger col-md-1 m-1' onClick = {deleteTask}>DELETE</button>
        </div>

    } )

    return (
        <div>
            <h1>Todo List</h1>

            <div className='row justify-content-center'>

                <input type="text" placeholder='Enter Task Name' className='col-md-6 m-1' value={taskname} 
                onChange={ (e) => {setTaskname(e.target.value)} } />

                <button className='btn btn-primary col-md-1 m-1' onClick = {storeTask}>Add Task</button>

            </div>

            {displayTasks}

        </div>
    )
}
