import { TODO_FILTERS, FILTERS_BUTTONS } from "../consts"

interface Props {
  // filterSelected: typeof TODO_FILTERS['all'] mala practica no es escalable
  // filterSelected: typeof TODO_FILTERS['all' | 'active' | 'completed] mala practica no es escalable

  // utiliza una de las keys del tipo de TODO_FILTERS: esto si es escalable
  filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
}

export const Filters: React.FC<Props> = (): void => {
  return(

  )
}