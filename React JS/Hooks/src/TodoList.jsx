// // import React from 'react'
// import { useState } from 'react'

// const TodoList = () => {
//   const[todo, setTodo] = useState([])
//   const[task, setTask] = useState('')
//   const[updatedTask, setUpdatedTask] = useState(null)
//   const[updateedText, setUpdateText] = useState('')



//   function addTodo(){
//     setTodo([...todo, task])
//     setTask('')
//   }

//   function deleteTask(index){
//     setTodo(todo.filter((v, i) => i !== index))
//   }
   
//   function updateTodo(index){
//     let newTodo = [...todo]
//     newTodo[index] = updateedText
//     setTodo(newTodo)
//     setUpdateText('')
//     setUpdatedTask(null)
//   }

//   return (
//     <div>

//         <input type="text"  name='task' onChange={(e) => setTask(e.target.value)} value={task} />

//         <button onClick={addTodo}>Add Task</button>
//         <ol>
//         {todo.map((v, i) => (
//           <li key={i}>
//             {v}
//             <input type='text' onChange={(e) => setUpdateText(e.target.value)} value={updateedText} />
//             <button onClick={() => updateTodo(i)}  >Update</button>
//             <button onClick={() => deleteTask(i)}>Delete</button>
//           </li>
//         ))}

//          {}

         
    
//         </ol>
//     </div>
//   )
// }

// export default TodoList





import  { useState } from 'react';

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [updatedText, setUpdatedText] = useState('');

  function addTodo() {
    if (task.trim() !== '') {
      setTodo([...todo, task]);
      setTask('');
    }
  }

  function deleteTask(index) {
    setTodo(todo.filter((_, i) => i !== index));
  }

  function updateTodo() {
    if (updatedText.trim() !== '') {
      let newTodo = [...todo];
      newTodo[editingIndex] = updatedText;
      setTodo(newTodo);
      setUpdatedText('');
      setEditingIndex(null);
    }
  }

  return (
    <div>
      <input
        type="text"
        name='task'
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button onClick={addTodo}>Add Task</button>

      <ol>
        {todo.map((item, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  type='text'
                  onChange={(e) => setUpdatedText(e.target.value)}
                  value={updatedText}
                />
                <button onClick={updateTodo}>Update</button>
                <button onClick={() => setEditingIndex(null)}>Cancel</button>
              </>
            ) : (
              <>
                {item}
                <button onClick={() => { setEditingIndex(index); setUpdatedText(item); }}>Edit</button>
              </>
            )}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
