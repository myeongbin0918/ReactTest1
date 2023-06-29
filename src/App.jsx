import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([{ id: 0, text: 'react를 배워봅시다.' }]);

  const [text, setText] = useState('');

  const textGhangeHandler = event => {
    setText(event.target.value);
  };

  // 추가 버튼 클릭
  const clickAddButtonHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      text: text,
    };

    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <div className='header-style'>
        <input value={text} onChange={textGhangeHandler} />
        <button onClick={clickAddButtonHandler}>추가하기</button>
      </div>
      <h1 className='title-style'>Todo List</h1>
      <div className='app-style'>
        {todos.map(function (item) {
          return (
            <div key={item.id} className='component-style'>
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
