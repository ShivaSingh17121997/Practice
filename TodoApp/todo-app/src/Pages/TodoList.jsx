import React from 'react'

export default function TodoList({todoListData,removeTodo}) {
console.log(todoListData, "data from todolist")



  return (
    <div>
      <h1>Todo list</h1>
      {todoListData.map((item) => {
        return (
          <>
            <div>
              <p>Task : {item.data.task}</p>
              <p>Name : {item.data.name}</p>
              <button onClick={()=>removeTodo(item.id)} >Delete</button>
            </div>
          </>
        )
      })}
    </div>


  )
}
