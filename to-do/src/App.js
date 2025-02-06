import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React, { use, useState } from "react";
import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import ToDo from './components/ToDo.jsx';



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
    if(newTask){
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status:false}
      setToDo([...toDo, newEntry]);
      setNewTask("")
    }

  }

  //Detele task
  const deleteTask=(id)=>{
    let newTasks = toDo.filter(task => task.id !== id);

    setToDo(newTasks);
  }
  
  //Mark task as done or completed
  const markDone=(id)=>{
    let newTask = toDo.map( task =>{ //map genera un nuevo array con la condición dada  
      if(task.id === id){
        return ({...task, status: !task.status})
      }
      return task;
      
    });
    setToDo(newTask)
  }

  //cancel update
  const cancelUpdate=()=>{
    setUpdateData("");
  }

  //change task for update
  const changeTask=(e)=>{
    let newEntry = { id:updateData.id, title: e.target.value, status:updateData.status? true: false}
    setUpdateData(newEntry);
  }

  //update task
  const updateTask=()=>{
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id);
    let updateToDo = [...filterRecords,updateData];
    setToDo(updateToDo);
    setUpdateData("");
  }
  
  return (
    <div className="container App">
      
      <br /><br />
      <h2>To Do List App (ReactJS)</h2>
      <br /><br />

      {/*si updateData tiene un valor definido y es verdadero: */}
      {updateData && updateData ? (
        <UpdateForm updateData={updateData} changeTask={changeTask} updateTask={updateTask} cancelUpdate={cancelUpdate}></UpdateForm>
      ): (
        <AddTaskForm newTask={ newTask} setNewTask={setNewTask} addTask={addTask}/>
      ) }
        
      
      {/* If there are no to dos in state, display a message   */}
      {toDo && toDo.length ? '' : 'No tasks...'}

      {/* Show to dos   */}
      <ToDo toDo={toDo} markDone={markDone} setUpdateData={setUpdateData}  deleteTask={deleteTask}></ToDo>
    </div>
  );
}

export default App;
