import React from 'react';
import PropTypes from 'prop-types';
import ToDo from './ToDo';

const ToDoList = ({ title, todoList, setTodoList, checkedList }) => (
  <div className="todoapp__list">
    <p className="todoapp__list-tit">{title}</p>
    <ul className="todoapp__list-ul">
      {todoList && 
        todoList.map((todo) => {
          if (todo.deleted) return null;
          if (checkedList !== todo.checked) return null;
          
          return (
            <ToDo
              key={todo.id}
              todo={todo}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          );
        })}
    </ul>
  </div>
);

ToDoList.propTypes = {
  title: PropTypes.string.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  setTodoList: PropTypes.func.isRequired,
  checkedList: PropTypes.bool.isRequired,
};

export default ToDoList;