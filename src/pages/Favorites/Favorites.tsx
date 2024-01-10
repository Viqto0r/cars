import { FC } from 'react'
import {
  FAVORITES_LIST,
  FAVORITES_TITLE,
  FAFORITES,
} from '../../styles/favorites.style'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import { deleteIcon } from '../../icons/icons-paths'

interface FavoritesProps {
  count: number
}

const cars = [
  {
    availability: true,
    brand: 'Volvo',
    color: 'Жемчужно-белый металлик',
    description:
      'Большой люксовый кроссовер, второе поколение которого выпускается в Швеции с 2014 года, продажи машин на российском рынке начались в 2015 году. Автомобиль оснащают бензиновыми и дизельными турбомоторами объёмом два литра. ',
    id: 1,
    img_src: '/static/images/volvo_xc90.png',
    model: 'XC90',
    model_year: 2022,
    price: '$54333',
  },
  {
    availability: true,
    brand: 'BMW',
    color: 'Золотой Гальваник металлик',
    description:
      'Баварский кроссовер спортивного типа. Автомобиль выпускается с 2017 года, и является представителем принципиально новой линейки автомобилей, выпускаемых мюнхенским автоконцерном. Новая модель относится к тому же классу, что и автомобили линеек Х1, Х3, Х5 и Х6 – компактный городской кроссовер, однако как внешне, так и технически существенно отличается от своих «собратьев».',
    id: 2,
    img_src: '/static/images/bmw_x2.png',
    model: 'X2',
    model_year: 2017,
    price: '$58307',
  },
  {
    availability: true,
    brand: 'Volvo',
    color: 'Неметаллик/стандарт Черный',
    description:
      'Стильный Volvo S90 в сборке 2021-2022 года является сочетанием аристократической элегантности и практичности, подтвержденной скандинавской надежностью. Разрабатывая новую версию престижного седана, талантливые инженеры позаботились о максимальной безопасности водителя и пассажиров. Их здоровье и жизнь при столкновении надежно защищены благодаря усиленной конструкции кузова с программируемыми зонами деформации. А интеллектуальный помощник Сity Safety сведет к минимуму вероятность таких происшествий на дороге. У официального дилера Volvo brand M1 в Москве можно купить обновленную версию седана с полным списком опций безопасности, предусмотренных для российского рынка.',
    id: 3,
    img_src: '/static/images/volvo_s90.png',
    model: 'S90',
    model_year: 2020,
    price: '$69653',
  },
]

const Favorites: FC<FavoritesProps> = ({ count }) => {
  return (
    <div css={FAFORITES}>
      <h2 css={FAVORITES_TITLE}>Избранные товары — {count} позиций</h2>
      <div css={FAVORITES_LIST}>
        {cars.map((car) => (
          <Card
            key={car.id}
            {...car}
            type="large"
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
                type="danger"
                onClick={() => {}}
                size="small"
                icons={deleteIcon}
              />,
            ]}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites
