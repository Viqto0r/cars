import { FC, memo } from 'react'
import Button from '../Button/Button'
import {
  HEADER,
  HEADER_CONTACTS,
  HEADER_LOGO,
  HEADER_PHONE,
} from '../../styles/header.style'
import { favoriteIcon } from '../../icons/icons-paths'
import { Link } from 'react-router-dom'
import { LINK } from '../../styles/link.style'

interface HeaderProps {
  active: boolean
}

const Header: FC<HeaderProps> = ({ active }) => {
  return (
    <header css={HEADER}>
      <img src="/src/img/Logo.svg" alt="Logo" css={HEADER_LOGO} />
      <Link to="" css={LINK}>
        <Button
          size="x-small"
          type="primary"
          onClick={() => {}}
          text="Каталог"
          menu
        />
      </Link>
      <address css={HEADER_CONTACTS}>
        <span>Москва, Волгоградский пр-кт, 43, стр 1</span>
        <a css={HEADER_PHONE} href="tel:+78005553535">
          +7 800 555 35 35
        </a>
      </address>
      <Link to="/favorites" css={LINK}>
        <Button
          size="xxl-small"
          type="transparent"
          label="Избранное"
          icons={favoriteIcon}
          active={active}
        />
      </Link>
    </header>
  )
}

export default memo(Header)
