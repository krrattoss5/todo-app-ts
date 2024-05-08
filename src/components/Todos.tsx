import { type ListOfTodos } from "../types"

interface Props { //interface(contrato) para pasarle el parametro de las props al tipo de la funcion
  todos: ListOfTodos
}

export const Todos: React.FC<Props> = ({ todos }) => {
  return(
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed} ? 'completed' : ''`}>{todo.title}</li>
      ))}
    </ul>
  )
}