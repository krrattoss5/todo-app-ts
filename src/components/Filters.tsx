import { FILTERS_BUTTONS } from "../consts"
import { FILTER_VALUES } from "../types"

interface Props {
  // filterSelected: typeof TODO_FILTERS['all'] mala practica no es escalable
  // filterSelected: typeof TODO_FILTERS['all' | 'active' | 'completed] mala practica no es escalable

  // utiliza una de las keys del tipo de TODO_FILTERS: esto si es escalable
  // filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS] forma corrects
  filterSelected: FILTER_VALUES //asi es mas escalable
  onFilterChange: (filter: FILTER_VALUES) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  // const handleClick = (filter: FILTER_VALUES) => {}
  return(
    <ul className="filters">
      {
        Object.entries(FILTERS_BUTTONS).map(([key, {href, literal}]) => {
          const isSelected = filterSelected === key
          const className = isSelected ? 'selected' : ''
          return (
            <li key={key}>
              <a
                href={href}
                className={className}
                // onClick={handleClick(key)}
                onClick={(event) => {
                  event.preventDefault()
                  onFilterChange(key as FILTER_VALUES)
                }}
              >{literal}</a>
            </li>
          )
        })
      }
    </ul>
  )
}