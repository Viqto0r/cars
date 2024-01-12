import { ChangeEvent, FC, memo, useCallback } from 'react'
import Button from '../Button/Button'
import { SEARCH, SEARCH_INPUT } from '../../styles/search.style'
import { searchIcon } from '../../icons/icons-paths'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setFilter } from '../../store/slices/carSlice'
import { debounce } from '../../utils/debounce'

const Search: FC = () => {
  const dispatch = useAppDispatch()
  const { filter } = useAppSelector((state) => state.cars)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setFilter(e.target.value))
    },
    [dispatch, setFilter]
  )
  const debouncedFilter = useCallback(debounce(handleChange, 300), [
    debounce,
    handleChange,
  ])
  const handleClick = useCallback(() => dispatch(setFilter(filter)), [])

  return (
    <div css={SEARCH}>
      <input
        type="text"
        placeholder="Найти авто"
        css={SEARCH_INPUT}
        onChange={debouncedFilter}
      />
      <Button
        size="xl-small"
        type="primary"
        icons={searchIcon}
        onClick={handleClick}
      />
    </div>
  )
}

export default memo(Search)
