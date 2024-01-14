import { FC, memo, useState } from 'react'
import {
  DROPDOWN,
  DROPDOWN_ACTIVE,
  DROPDOWN_LIST,
} from '../../styles/dropdown.styles'
import { Car } from '../../graphql/generated'
import { ISort, SortType } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setSort } from '../../store/slices/sortSlice'

interface SortList {
  id: string
  text: string
  field: keyof Car
  type: SortType
}

const sortList: SortList[] = [
  { id: '0', text: 'Сначала в наличии', field: 'availability', type: 'asc' },
  { id: '1', text: 'По имени (A-Z)', field: 'brand', type: 'desc' },
  { id: '2', text: 'По имени (Z-A)', field: 'brand', type: 'asc' },
  { id: '3', text: 'Сначала новее', field: 'model_year', type: 'asc' },
  { id: '4', text: 'Сначала старше', field: 'model_year', type: 'desc' },
  { id: '5', text: 'Сначала дешевле', field: 'price', type: 'desc' },
  { id: '6', text: 'Сначала дороже', field: 'price', type: 'asc' },
]

const Dropdown: FC = () => {
  const dispatch = useAppDispatch()
  const id = useAppSelector((state) => state.sort.id)
  const [showList, setShowList] = useState<boolean>(false)

  const handleOpenClick = () => {
    setShowList((prev) => !prev)
  }
  const handleSelectClick = (e: React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLLIElement)) return

    const { field, type, id } = e.target.dataset
    const data = {
      field,
      by: type,
      id,
    } as ISort

    dispatch(setSort(data))
  }

  return (
    <div css={DROPDOWN} onClick={handleOpenClick}>
      <div css={DROPDOWN_ACTIVE}>
        <img src="/icons/Sort.svg" alt="search" />
        <div css>{sortList.find((item) => item.id === id)?.text}</div>
      </div>
      {showList && (
        <ul css={DROPDOWN_LIST} onClick={handleSelectClick}>
          {sortList.map(({ id, text, field, type }) => (
            <li key={id} data-field={field} data-type={type} data-id={id}>
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default memo(Dropdown)
