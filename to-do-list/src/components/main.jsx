import React, { Component } from 'react';

//Form
import { FaPlus } from 'react-icons/fa';

//tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefa: [],
    index: -1,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefa, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();
    if (tarefa.indexOf(novaTarefa) !== -1) return;
    const novasTarefas = [...tarefa];

    if (index === -1) {
      this.setState({
        tarefa: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefa: [...novasTarefas],
        index: -1,
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleDelete = (e, index) => {
    const { tarefa } = this.state;
    const novasTarefas = [...tarefa];
    novasTarefas.splice(index, 1);
    this.setState({
      tarefa: [...novasTarefas],
    });
  };

  handleEdit = (e, index) => {
    const { tarefa } = this.state;

    this.setState({
      index,
      novaTarefa: tarefa[index],
    });
  };

  render() {
    const { novaTarefa, tarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#" className="form" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefa.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit
                  className="edit"
                  onClick={(e) => this.handleEdit(e, index)}
                />
                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
