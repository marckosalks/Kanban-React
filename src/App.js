import React, { useState } from "react";
import "./styles.css"

import Navbar from "./components/Navbar/navbar";
import TaskList from "./components/TaskList/taskList";



let idAcc = 0;

const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
}

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask]
    })
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state }
        } else {
          return task;
        }
      })
    });
  }

  const deleteTask = (id) =>{
    setTasks((existingTasks) =>{
      return existingTasks.filter((task) => task.id !== id);
    });
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Pendente"
          onAddTask={addTask}
          taskState="Pendente"
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask} 
          onDeleteTask={deleteTask}
          />

        <TaskList
          title="Fazendo"
          onAddTask={addTask}
          taskState="Fazendo"
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask} 
          onDeleteTask={deleteTask}
          />

        <TaskList
          title="Concluido"
          onAddTask={addTask}
          taskState="Concluido"
          tasks={tasks.filter((t) => t.state === "Concluido")}
          onTaskUpdate={updateTask} 
          onDeleteTask={deleteTask}
          />


      </div>
    </div>
  )
}

/*
 <TaskList title="Fazendo"/>
        <TaskList title="Completa"/>
*/