import { FC, memo, useCallback } from 'react'
import {
  HEADER,
  HEADER_CONTACTS,
  HEADER_LOGO,
  HEADER_PHONE,
} from '../../styles/header.styles'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import { isFavoriteBtnActive } from '../../store/slices/favoritesCarsIdsSlice'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'

const Header: FC = () => {
  const navigate = useNavigate()
  const active = useAppSelector(isFavoriteBtnActive)

  const handleClick = useCallback(
    (path: string) => () => navigate(path),
    [navigate]
  )

  return (
    <header css={HEADER}>
      <img src="/src/img/Logo.svg" alt="Logo" css={HEADER_LOGO} />
      <Button
        size="small"
        type="primary"
        text="Каталог"
        onClick={handleClick('')}
        menu
      />
      <address css={HEADER_CONTACTS}>
        <span>Москва, Волгоградский пр-кт, 43, стр 1</span>
        <a css={HEADER_PHONE} href="tel:+78005553535">
          +7 800 555 35 35
        </a>
      </address>
      <Button
        size="s-medium"
        type="transparent"
        onClick={handleClick('/favorites')}
        icon={<Icon type="favorites" active={active} />}
        text="Избранное"
      />
    </header>
  )
}

export default memo(Header)
