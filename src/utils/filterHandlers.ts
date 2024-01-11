import { Car } from '../graphql/generated'

export const filterCars = (filter: string) => (car: Car) =>
  car.model.toLowerCase().includes(filter) ||
  car.brand.toLowerCase().includes(filter)
