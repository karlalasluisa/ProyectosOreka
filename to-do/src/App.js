import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faP } from "@fortawesome/free-solid-svg-icons";

import { faCircleCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import './App.css';
import React, { use, useState } from "react";


function App() {

  const [toDo, setToDo] = useState([
    {"id": 1, "title":" Task 1", "status":false},
    {"id": 2, "title":" Task 2", "status":false},
  ]);

  //Temp State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  //Add task
  const addTask=()=>{

  }

  //Detele task
  const deleteTask=(id)=>{
    
  }
  
  //Mark task as done or completed
  const markDone=(id)=>{
    
  }

  //cancel update
  const cancelUpdate=()=>{
    
  }

  //change task for update
  const changeTask=(e)=>{
    
  }

  //update task
  const updateTask=()=>{
    
  }
  
  return (
    <div className="container App">
      
      <br /><br />

      <h2>To Do List App (ReactJS)</h2>

      <br /><br />
      

      {/* If there are no to dos in state, display a message   */}
      {toDo && toDo.length ? '' : 'No tasks...'}
      <p>error</p>
      {/* Show to dos   */}
      {toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map( (task, index) => {
        return(
          <React.Fragment key={task.id}>
          
            <div className="col taskBg">
              
              <div 
                // if task status is true, add class to this div named as done
                className={ task.status ? 'done' : '' }
              >
                {/* Show number of task */}
                <span className="taskNumber">{index + 1}</span> 
                <span className="taskText">{task.title}</span>
              </div>

              <div className="iconsWrap">
                <span 
                  onClick={(e) => markDone(task.id)}
                  title="Completed / Not Completed"
                >
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                
                {task.status ? null : (
                  <span 
                    title="Edit"
                    onClick={ () => setUpdateData({ id: task.id, title: task.title, satus: task.status ? true : false }) }
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                )}

                <span 
                  onClick={() => deleteTask(task.id)}
                  title="Delete"
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </div>

            </div>
                     
        </React.Fragment>
        );
      })}
    </div>
  );
}

export default App;
