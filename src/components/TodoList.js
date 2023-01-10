import React, { useEffect, useState } from 'react'

const TodoList = ({ todos }) => {
  console.log(todos)
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Proprietario: {todo.owner} <br />
          Tipologia: {todo.type} <br />
          Descrizione: {todo.description} <br />
          Mail: {todo.mail} <br />
        </li>
      ))}
    </ul>
  )
}

export default TodoList
