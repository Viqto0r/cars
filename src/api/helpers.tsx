import { Car } from '../graphql/generated'
import { HOST, query } from './host'

interface IResponse {
  data: { cars: Car[] }
}

export const fetchCars = async () => {
  const response = await fetch(`${HOST}/api`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  })

  if (!response.ok) {
    throw new Error('Ошибка')
  }

  const {
    data: { cars },
  }: IResponse = await response.json()
  return cars
}

export const getImgSrc = (src: string) => HOST + src
