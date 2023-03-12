import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useRef, useState } from "react";
import TodoItem from "./Components/TodoItem/TodoItem"



function App() {
  const[todos,setTodos]=useState([]);
//   const [todo,setTodo]=useState('');

	const todo =useRef();

  const submitHandler=(evt)=>{
    evt.preventDefault();    

      setTodos([
		...todos,
		{
			name:todo.current.value,
			id:todos.length>0 ? todos.length : 0,
			completed: false,
		}
	]);
    todo.current.value="";
   // setTodo('')
  }

  const deleteHandler=(id)=>{
	const result=todos.filter((todo)=>{
		if (todo.id!==id) {
			return todo;
		}
	});
	setTodos(result);
}

const completedHandler=(id)=>{
	const result=todos.map((todo)=>{
		if (todo.id===id) {
			todo.completed=!todo.completed;
		}
		return todo;
	});
	setTodos(result);
	
	
}

  return (
    <div id="topPage">
      <form onSubmit={submitHandler} className="form-control abc">
        <input ref={todo} className="form-control" 
         type="text" placeholder="Add todo" 
		 //onChange={(evt)=>setTodo(evt.target.value)} 
        //value={todo}
		/>
        <button type="submit" className="form-control btn btn-outline-info mt-2">Qo'shish</button>
      </form>
      <ul className="bg-info ull text-dark">
        <li className="text-dark fs-2 text-center">Todo list</li>
        {todos.map((todo,i)=>(
         <TodoItem
		 key={i}
		 data={todo}
		 deleteTodo={deleteHandler}
		 completedHandler={completedHandler}
		 />
                ))}

      </ul>
    </div>
  );
}

export default App;