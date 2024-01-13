import { FC, memo } from 'react'
import Search from '../Search/Search'
import Dropdown from '../Dropdown/Dropdown'
import { FILTER } from '../../styles/filter.styles'

const Filter: FC = () => {
  return (
    <div css={FILTER}>
      <Dropdown />
      <Search />
    </div>
  )
}

export default memo(Filter)
