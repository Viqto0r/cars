import { FC, useEffect, useState } from 'react'
import { Car } from '../../graphql/generated'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import { CARS } from '../../styles/cars.style'
import { favoriteIcon } from '../../icons/icons-paths'

const HOST = 'http://localhost:4000'
export const getImgSrc = (src: string) => HOST + src

interface IResponse {
  data: { cars: Car[] }
}

const Cars: FC = () => {
  const [cars, setCars] = useState<Car[]>([])

  useEffect(() => {
    ;(async () => {
      const response = await fetch(`${HOST}/api`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `{cars {id,brand,model,color,model_year,img_src,price,description,availability}}`,
        }),
      })

      const {
        data: { cars },
      }: IResponse = await response.json()

      setCars(cars)
    })()
  }, [])

  return (
    <div css={CARS}>
      {cars.map((car) => {
        const { description, ...props } = car
        return (
          <Card
            key={car.id}
            {...props}
            type="medium"
            buttons={[
              <Button
                key={0}
                type="primary"
                onClick={() => {}}
                size="medium"
                text="Купить"
              />,
              <Button
                key={1}
                type="transparent"
                onClick={() => {}}
                size="xl-small"
                icons={favoriteIcon}
              />,
            ]}
          />
        )
      })}
    </div>
  )
}

export default Cars
