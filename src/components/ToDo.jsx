import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types'; 

const ToDo = ({ todo, todoList, setTodoList }) => {
  const [edited, setEdited] = useState(false);
  const [newText, setNewTest] = useState(todo.text);
  const editInputRef = useRef(null);

  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      checked: item.id === todo.id ? !item.checked : item.checked,
    }));

    setTodoList(nextTodoList);
  };

  const onClickEditButton = () => {
    setEdited(true);
  };

  const onChangeEditInput = (e) => {
    setNewTest(e.target.value);
  };

  const onClickSubmitButton = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      text: item.id === todo.id ? newText : item.text, 
    }));
    setTodoList(nextTodoList);

    setEdited(false); 
  };

  const onClickDeleteButton = () => {
    if (window.confirm('지울 겅미?')) {
      const nextTodoList = todoList.map((item) => ({
        ...item,
        deleted: item.id === todo.id ? true : item.deleted,
      }));

      setTodoList(nextTodoList);
    }
  };

  useEffect(() => {
    if (edited) {
      editInputRef.current.focus();
    }
  }, [edited]);

  return (
  <li className="todoapp__item">
    {/* 투두 체크박스 */}
    <input 
      type="checkbox" 
      className="todoapp__item-checkbox"
      checked={todo.checked}
      onChange={onChangeCheckbox}
    />
    {/* 투두 내용 */}
    {
      edited ? (
        <input
          type="text"
          className="todoapp__item-edit-input"
          value={newText}
          ref={editInputRef}
          onChange={onChangeEditInput}
        />
      ) : (
        <span
          className={`todoapp__item-ctx ${
            todo.checked ? 'todoapp__item-ctx-checked' : ''
          }`}
        >
          {todo?.text} 
        </span>
      )
    }
    {/* 수정 버튼 */}
    {
      !todo.checked ? (
        edited ? (
          <button
            type="button"
            className="todoapp__item-edit-btn"
            ref={editInputRef}
            onClick={onClickSubmitButton}
          >
            👌
          </button>
        ) : (
          <button
            type="button"
            className="todoapp__item-edit-btn"
            onClick={onClickEditButton}
          >
            ✏
          </button>
        )
      ) : null
    }
    {/* 삭제 버튼 */}
    <button
      type="button"
      className="todoapp__item-delete-btn"
      onClick={onClickDeleteButton}
    >
      🗑
    </button>
  </li>
)};

ToDo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string.isRequired,
  }),
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  setTodoList: PropTypes.func.isRequired,
};

export default ToDo;