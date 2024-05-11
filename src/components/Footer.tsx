import { Filters } from './Filters'
import { type FILTER_VALUES } from '../types'

interface Props {
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
  filterSelected: FILTER_VALUES
  handleFilterChange: (filter: FILTER_VALUES) => void
}

export const Footer: React.FC<Props> = ({
   activeCount = 0,
   completedCount = 0,
   filterSelected,
   handleFilterChange,
   onClearCompleted
}) => {
  return (
    <footer className='footer'>
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes.
      </span>

      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />

      {
        completedCount > 0 && (
          <button
            className='clear-completed'
            onClick={onClearCompleted}
          >Borrar completados</button>
        )
      }
    </footer>
  )
}
