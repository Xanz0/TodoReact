import React from 'react';


const TodoItem= ({data,deleteTodo,completedHandler}) =>{
    return (
        <li className="fs-4 d-flex justify-content-between mt-2 px-5 " 
		 >
			<p
            onClick={(evt)=>completedHandler(data.id)}
            style={{
                textDecoration:data.completed?"line-through":'',
            }}
            >{data.name}</p>
			<button className="btn btn-danger" onClick={(evt)=>deleteTodo(data.id)}>Delete</button>

		 </li>
    )
}

export default TodoItem