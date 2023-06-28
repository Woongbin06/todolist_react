import React from 'react';
import PropTypes from 'prop-types'; 

const ToDo = ({ todo, todoList, setTodoList }) => {
  return (
  <li className="todoapp__item">
    {/* 투두 체크박스 */}
    <input type="checkbox" className="todoapp__item-checkbox" />
    {/* 투두 내용 */}
    <span className="todoapp__item-ctx">{ todo?.text }</span>
    {/* 수정 버튼 */}
    <button type="button" className="todoapp__item-edit-btn">
      ✏
    </button>
    {/* 삭제 버튼 */}
    <button type="button" className="todoapp__item-delete-btn">
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