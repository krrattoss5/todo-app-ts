import { TODO_FILTERS } from "./consts"

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>
// export type TodoCompleted = Pick<Todo, 'completed' | 'id'> pueden hacerse mas parametros
// type ListOfTodos = Array<todo> asi tambien se puede tipar
export type ListOfTodos = Todo[]

export type FILTER_VALUES = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]