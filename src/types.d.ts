export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type ListOfTodos = Todo[]
// type ListOfTodos = Array<todo> asi tambien se puede tipar