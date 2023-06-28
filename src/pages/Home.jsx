import React, { useState } from 'react';
import InputBox from '../components/InputBox';
import ToDoList from '../components/ToDoList';

const Home = () => {

  const [todoList, setTodoList] = useState([]);

  return (
    <div className="homepage__container">
      {/* input box */}
      <InputBox todoList={todoList} setTodoList={setTodoList}/>

      {/* 할 일 ToDo 리스트 */}
      <ToDoList 
        title={'할 일'}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false}
      />

      {/* 완료한 ToDo 리스트 */}
      <ToDoList 
        title={'완료한 일'}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={true}
      />
    </div>
  );
};

export default Home;