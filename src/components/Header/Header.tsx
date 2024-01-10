import { FC } from 'react'
import Button from '../Button/Button'
import {
  HEADER,
  HEADER_CONTACTS,
  HEADER_LOGO,
  HEADER_PHONE,
} from '../../styles/header.style'
import { favoriteIcon } from '../../icons/icons-paths'

const Header: FC = () => {
  return (
    <header css={HEADER}>
      <img src="/src/img/Logo.svg" alt="Logo" css={HEADER_LOGO} />
      <Button
        size="x-small"
        type="primary"
        onClick={() => {}}
        text="Каталог"
        menu
      />
      <address css={HEADER_CONTACTS}>
        <span>Москва, Волгоградский пр-кт, 43, стр 1</span>
        <a css={HEADER_PHONE} href="tel:+78005553535">
          +7 800 555 35 35
        </a>
      </address>
      <Button
        size="xxl-small"
        type="transparent"
        label="Избранное"
        icons={favoriteIcon}
        onClick={() => {}}
      />
    </header>
  )
}

export default Header
