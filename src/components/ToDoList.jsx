import React from 'react';
import ToDo from './ToDo';

const ToDoList = () => (
  <div className="todoapp__list">
    <p className="todoapp__list-tit">제목</p>
    <ul className="todoapp__list-ul">
      <ToDo />
      <ToDo />
    </ul>
  </div>
);

export default ToDoList;