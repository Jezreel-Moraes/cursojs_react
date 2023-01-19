import React, { Component } from 'react';

import Form from './Form';
import './Main.css';
import Tasks from './Tasks';

export default class Main extends Component {
  state = {
    tasks: [],
    newTask: '',
    index: -1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (prevState.tasks === tasks) return;
    console.log('updated');
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) return;
    this.setState({ tasks });
  }

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (!newTask || tasks.indexOf(newTask) !== -1) {
      return;
    }

    if (index === -1) {
      this.setState({
        tasks: [newTask, ...tasks],
        newTask: '',
      });
    } else {
      tasks[index] = newTask;

      this.setState({
        tasks: [...tasks],
        newTask: '',
        index: -1,
      });
    }

    event.target.parentNode.parentNode.parentNode
      .querySelector('input')
      .focus();
  };

  handleEdit = (event, index) => {
    const { tasks } = this.state;

    this.setState({
      index,
      newTask: tasks[index],
    });

    event.target.parentNode.parentNode.parentNode.parentNode.parentNode
      .querySelector('input')
      .focus();
  };

  handleDelete = (event, index) => {
    const { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState({ tasks: [...tasks] });

    event.target.parentNode.parentNode.parentNode.parentNode.parentNode
      .querySelector('input')
      .focus();
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />

        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
