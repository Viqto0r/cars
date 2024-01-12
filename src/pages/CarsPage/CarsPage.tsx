import { FC, memo } from 'react'
import Filter from '../../components/Filter/Filter'
import Cars from '../../components/Cars/Cars'

const CarsPage: FC = () => {
  return (
    <>
      <Filter />
      <Cars />
    </>
  )
}

export default memo(CarsPage)
