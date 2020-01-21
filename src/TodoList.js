import React, { useState } from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'

let currId = 1

const defaultTodos = [
  { id: currId++, title: 'Learn React', completed: false },
  { id: currId++, title: 'Learn Rust', completed: false },
  { id: currId++, title: 'Learn AI', completed: false },
]

const Container = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const TodoList = () => {
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const [todos, setTodos] = useState(defaultTodos)

  const handleNewTodoTitleChange = (e) => {
    setNewTodoTitle(e.target.value)
  }

  const addTodo = () => {
    setTodos([
      ...todos,
      { id: currId++, title: newTodoTitle, completed: false }
    ])
    setNewTodoTitle('')
  }

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => todo.id !== id ? todo : { ...todo, completed: !todo.completed })
    setTodos(updatedTodos)
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <Container>
      {todos.map(i =>
        <TodoItem
          key={i.id}
          item={i}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      )}
      <div>
        <input type="text" value={newTodoTitle} onChange={handleNewTodoTitleChange} />
        <input type="button" value="+" onClick={addTodo} />
      </div>
    </Container>
  )
}

export default TodoList
