
import './App.css';
import { useState } from 'react';
function ShowToDo(props) {
  return (
    <div className="todobox">
      <div>{props.todo.todoComments}</div>
    </div>
  )
}

function App() {

  const [todo, setTodo] = useState([
    { todoComments: 'react를 배워봅시다.' },
    { todoComments: 'usestate를 배워봅시다.' },
    { todoComments: '자바스크립트를 배워봅시다.' }])

  const addTodoList = () => {
    const newtodo = { todoComments: todoComments }
    setTodo([...todo, newtodo])
    setTodoComments('')
  }

  const [todoComments, setTodoComments] = useState('')

  const commentChangeHandler = (event) => {
    if (event.target.value != '') { 
      setTodoComments(event.target.value)
    }

  }
  return (
    <div className='defaultlayout'>
      <div className='submitcontainer'>
        <div className='submitbox'>
          <input value={todoComments} onChange={commentChangeHandler} />
        </div>
        <button onClick={addTodoList}>

          <b>기록하기</b></button>
      </div>
      <div className='todoboxcontainer'>
        {todo.map((list) => {
          return (<ShowToDo todo={list} />)

        })}
      </div>
    </div>
  );
}

export default App;
