import { useState } from "react"
import { Todos } from "./components/Todos"
import { FILTER_VALUES, type TodoId, type Todo as TodoType } from "./types"
import { TODO_FILTERS } from "./consts"
import { Footer } from "./components/Footer"

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

// podemos tipar un componente como (): JSX.Element o App: React.FC
const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FILTER_VALUES>(TODO_FILTERS.ALL)

  const handleRemove = ( {id}: TodoId ): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleteTodo = ( {id, completed}: Pick<TodoType, 'id' | 'completed'> ): void => {
    const newTodos = todos.map(todo => {
      if(todo.id === id ){
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FILTER_VALUES): void => {
    setFilterSelected(filter)
  }

  const filteredTodos = todos.filter(todo => {
    if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })
  const activeCount = todos.filter(todo => !todo.completed).length

  const completedCount = todos.length - activeCount

  return (
    <div className="todoapp">
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onToggleCompleteTodo={handleCompleteTodo}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={() => {}}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
