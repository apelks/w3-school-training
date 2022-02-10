import './App.css';
import Todos from './component/Todos';
import Todo from '../src/models//todo';
import NewTodo from './component/NewTodo';
import { useState } from "react";

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) =>{

    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {

      return prevTodos.concat(newTodo);

    });

  };

  const removeTodoHandler = (todoId: string) =>{

    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })



  };

  return (
    <div>

      <NewTodo onAddTodo={addTodoHandler}/>

      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>

     
    </div>
  );
}

export default App;
