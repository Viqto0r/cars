import { Car } from '../graphql/generated'
import { SortFieldsType, SortType } from '../types/types'

const fixedPrice = (price: string | number | boolean) => {
  if (typeof price !== 'string') return price
  return +price.replace(/\$/, '')
}

export const sortCars = (sortType: SortType, field: SortFieldsType) => {
  let res = [1, -1]
  if (sortType === 'asc') res.reverse()

  return (a: Car, b: Car): number => {
    if (field === 'price') {
      return fixedPrice(a[field]) > fixedPrice(b[field]) ? res[0] : res[1]
    }
    if (field === 'brand') {
      return a[field] + a.model > b[field] + b.model ? res[0] : res[1]
    }
    return a[field] > b[field] ? res[0] : res[1]
  }
}

//lodash sorBy
