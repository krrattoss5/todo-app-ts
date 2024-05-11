import { type TodoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Props {
  onAddTodo: ({title}: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>todo<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/64px-Typescript.svg.png' alt='todo' /></h1>
      <input />

      <CreateTodo saveTodo={onAddTodo}/>
    </header>
  )
}