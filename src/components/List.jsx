import React from 'react';

const List = ({ memoryList, handleRemoveClick }) => {
  return (
    <ul id="todo">
      {memoryList.map((item) => (
        <li className="list-item" key={item}>
          <div className="text">{item}</div>
          <button className="remove" onClick={() => handleRemoveClick(item)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default List
