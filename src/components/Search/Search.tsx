import { ChangeEvent, FC, memo, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import ButtonTest from '../Button/Button'
import Icon from '../Icon/Icon'
import { debounce } from '../../utils/debounce'
import { setFilter } from '../../store/slices/filterSlice'
import { SEARCH, SEARCH_INPUT } from '../../styles/search.styles'

const Search: FC = () => {
  const dispatch = useAppDispatch()
  const filter = useAppSelector((state) => state.filter)

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
  const handleClick = useCallback(
    () => dispatch(setFilter(filter)),
    [dispatch, filter, setFilter]
  )

  return (
    <div css={SEARCH}>
      <input
        type="text"
        placeholder="Найти авто"
        css={SEARCH_INPUT}
        onChange={debouncedFilter}
      />
      <ButtonTest
        size="xxl-small"
        type="primary"
        icon={<Icon type="search" />}
        onClick={handleClick}
      />
    </div>
  )
}

export default memo(Search)
