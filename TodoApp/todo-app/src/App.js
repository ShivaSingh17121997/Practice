import { useState } from 'react';
import './App.css';
import Input from './Pages/Input';
import TodoList from './Pages/TodoList';

function App() {
  const [todo, setTodo] = useState([])
  console.log(todo, "data from todo")

  const AddTask = (data) => {
    setTodo([...todo,{id: Math.random() , data}])
    console.log(todo)
  }

  const removeTodo = (id) => {
    const updatedTodo = todo.filter((item)=> {
      return item.id !== id
    })
    
    setTodo(updatedTodo)

  }
   


  return (
    <div className="App">
     < h1>Todo App</h1>
     <Input  AddTask={AddTask}/>
     <TodoList todoListData={todo} removeTodo={removeTodo}   />
    </div>
  );
}

export default App;
