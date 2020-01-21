import React from 'react'
import styled from 'styled-components'

const Title = styled.span`
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`

const TodoItem = ({ item, toggleTodo, deleteTodo }) => (
  <li>
    <input type="checkbox" checked={item.completed} onChange={() => toggleTodo(item.id)} />
    <Title completed={item.completed}>{item.title}</Title>
    <input type="button" value="x" onClick={() => deleteTodo(item.id)} />
  </li>
)

export default TodoItem
