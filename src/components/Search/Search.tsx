import { FC } from 'react'
import Button from '../Button/Button'
import { SEARCH, SEARCH_INPUT } from '../../styles/search.style'
import { searchIcon } from '../../icons/icons-paths'

const Search: FC = () => {
  return (
    <div css={SEARCH}>
      <input type="text" placeholder="Найти авто" css={SEARCH_INPUT} />
      <Button
        size="xl-small"
        onClick={() => {}}
        type="primary"
        icons={searchIcon}
      />
    </div>
  )
}

export default Search
