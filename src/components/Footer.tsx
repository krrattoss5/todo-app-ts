import { type FC } from 'react'

export const Footer: FC<Props> = ({activeCount, todos, onClearCompleted}): void => {
  return (
    <footer className='footer'>
      <span className="todo-count">
        <strong>{todos.length}</strong> tareas pendientes.
      </span>

      
    </footer>
  )
}