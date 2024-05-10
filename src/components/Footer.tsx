import { type FC } from 'react'
import { Filters } from './Filters'

export const Footer: FC<Props> = ({activeCount, todos, onClearCompleted}) => {
  return (
    <footer className='footer'>
      <span className="todo-count">
        <strong>{todos.length}</strong> tareas pendientes.
      </span>

      <Filters
        filterSelected={}
        onFilterSelected={() => {}}
      />
    </footer>
  )
}