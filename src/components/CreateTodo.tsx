import { useState } from "react"
import { TodoTitle } from "../types"
interface Props {
  saveTodo: ({title}: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveTodo({ title: newTodo })
    setNewTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
       className="new-todo"
       value={newTodo}
       onChange={evt => setNewTodo(evt.target.value)}
       onKeyDown={() => {}}
       placeholder="¿Qué quieres hacer?"
       autoFocus
      />
    </form>
  )
}