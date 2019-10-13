import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import actions from './actions/actions';
import './App.css';


export const App = ({
    submitTodo,
    todos,
    deleteTodo,
    undeleteTodo,
    inputChanged,
    disableAddTodo,
    disableUndelete,
    editTodo,
    show
  }) => (
    <div>
      <h1>Todo list</h1>

      <AddTodo
        submitTodo={submitTodo}
        undeleteTodo={undeleteTodo}
        inputChanged={inputChanged}
        disableAddTodo={disableAddTodo}
        disableUndelete={disableUndelete}
      />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        submitTodo={submitTodo}
        inputChanged={inputChanged}
        disableAddTodo={disableAddTodo}
        editTodo={editTodo}
        show={show}
      />
    </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  undeleteTodo: PropTypes.func.isRequired,
  inputChanged: PropTypes.func.isRequired,
  disableAddTodo: PropTypes.bool.isRequired,
  disableUndelete: PropTypes.bool.isRequired,
  editTodo: PropTypes.func.isRequired,
  show:PropTypes.func.isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },
  editTodo: (text, id) => {
    if (text) {
      dispatch(actions.editTodo(text,id))
    }
  },
  show: (id) => {
      dispatch(actions.show(id))
  },
  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id));
  },

  undeleteTodo: () => {
    dispatch(actions.undeleteTodo());
  },

  inputChanged: (text) => {
    dispatch(actions.inputChanged(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);