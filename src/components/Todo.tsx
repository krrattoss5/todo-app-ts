import { type TodoId, type Todo as TodoType } from "../types"

interface Props extends TodoType {
  onRemoveTodo: ({id}:TodoId) => void
  onToggleCompleteTodo: ({id,completed}: Pick<TodoType, 'id' | 'completed'>) => void
}
//tambien se puede importar el FC de react y solo tipar con el FC ejmpl: const fn: FC<Props> = (): void => {}
export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {

    // tipar eventos correctamente
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
      onToggleCompleteTodo({
        id,
        completed: event.target.checked
      })
    }


  return(
    <div className="view">
      <input
        className="toggle"
        type='checkbox'
        checked={completed}
        onChange={handleChangeCheckbox}
        // onChange={(event) => {
        //   onToggleCompleteTodo({id, completed: event.target.checked})
        // }}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => onRemoveTodo({id}) }
      />
    </div>
  )
}