
import React from "react"
import "./taskList.css"
import PropTypes from "prop-types";
import plusIcon from "../../img/plus-icon.svg"

import TaskItem from "../Taskitem/taskItem";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask }) {

  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  }

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            taskState={task.state}
            onTaskUpdate={onTaskUpdate}
            onDeleteTask={onDeleteTask}
          />
        })}

        <button className="btn" onClick={addTask}>
          <img src={plusIcon} />
          Adicionar tarefa
        </button>
      </div>

    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.string.isRequired,
  tasks: PropTypes.string.isRequired,
}