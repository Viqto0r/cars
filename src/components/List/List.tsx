import { FC, ReactNode, memo } from 'react'
import { LIST } from '../../styles/list.syles'
import { ListType } from '../../types/types'

interface IList {
  type: ListType
  items: () => ReactNode[]
}

const List: FC<IList> = ({ type, items }) => {
  return <div css={LIST(type)}>{items()}</div>
}

export default memo(List)
