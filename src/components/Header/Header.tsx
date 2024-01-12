import { FC, memo, useCallback } from 'react'
import Button from '../Button/Button'
import {
  HEADER,
  HEADER_CONTACTS,
  HEADER_LOGO,
  HEADER_PHONE,
} from '../../styles/header.style'
import { favoriteIcon } from '../../icons/icons-paths'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  active: boolean
}

const Header: FC<HeaderProps> = ({ active }) => {
  const navigate = useNavigate()

  const handleClick = (path: string) => {
    return useCallback(() => navigate(path), [navigate])
  }

  return (
    <header css={HEADER}>
      <img src="/src/img/Logo.svg" alt="Logo" css={HEADER_LOGO} />

      <Button
        size="x-small"
        type="primary"
        onClick={handleClick('')}
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
        onClick={handleClick('/favorites')}
        label="Избранное"
        icons={favoriteIcon}
        active={active}
      />
    </header>
  )
}

export default memo(Header)
