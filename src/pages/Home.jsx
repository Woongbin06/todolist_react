import React, { useState } from 'react';
import InputBox from '../components/InputBox';
import ToDoList from '../components/ToDoList';

const Home = () => {

  const [todoList, setTodoList] = useState([]);

  return (
    <div className="homepage__container">
      {/* ToDo를 추가할 수 있는 input 박스 */}
      <InputBox todoList={todoList} setTodoList={setTodoList}/>

      {/* 할 일 ToDo 리스트 */}
      <ToDoList />

      {/* 완료한 ToDp 리스트 */}
      <ToDoList />
    </div>
  );
};

export default Home;