import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {useState} from 'react';
import { type } from '@testing-library/user-event/dist/type';


function ToDoList() {
  var [tasks, editTasks] = useState([]);
  var [task, editTask] = useState("");

  function addTask() {
    if (task !== "") {
      var newTasks = tasks;
      newTasks.push(task);
      editTasks(newTasks);
      editTask("");
    }
  }

  function delTask(index) {
    var newTasks = [];
    for (var i = 0; i < tasks.length; i ++) {
      if (i !== index) {
        newTasks.push(tasks[i]);
      }
    }
    editTasks(newTasks);
  }

  return (<div>
  <h1>To-Do List</h1>

  <span>
      <input className="Textbox" type="text" placeholder="Enter new task..." value={task} onChange={(e) => editTask(e.target.value)}/>
  </span>
  <button className="Add" onClick={addTask}>Add Task</button>

  <ul style={{"list-style-type": "none"}}>
    {tasks.map((task, i) => 
      <li key={i}>
        <input className="Check" type="checkbox"/>
        <span className="Task">{tasks[i]}</span>
        <button className="Delete" onClick={() => delTask(i)}> Delete</button>
      </li>
    )}
  </ul>
  </div>)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <ToDoList/>
    </React.StrictMode>
);
