import { FC, useState } from 'react'
import {
  DROPDOWN,
  DROPDOWN_ACTIVE,
  DROPDOWN_LIST,
} from '../../styles/dropdown.styles'

const Dropdown: FC = () => {
  const [showList, setShowList] = useState<boolean>(false)

  const handleClick = () => {
    setShowList((prev) => !prev)
  }

  return (
    <div css={DROPDOWN} onClick={handleClick}>
      <div css={DROPDOWN_ACTIVE}>
        <img src="/src/icons/Sort.svg" alt="search" />
        <div css>Сначала в наличии</div>
      </div>
      {showList && (
        <ul css={DROPDOWN_LIST}>
          <li>Сначала в наличии</li>
          <li>По имени (A-Z)</li>
          <li>По имени (Z-A)</li>
          <li>Сначала новее</li>
          <li>Сначала старше</li>
          <li>Сначала дешевле</li>
          <li>Сначала дороже</li>
        </ul>
      )}
    </div>
  )
}

export default Dropdown
