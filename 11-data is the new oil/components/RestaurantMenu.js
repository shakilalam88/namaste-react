import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory'

const RestaurantMenu = () => {
  const { resID } = useParams()
  const resInfo = useRestaurantMenu(resID)

  const [showIndex, setShowIndex] = useState(0)

  if (resInfo === null) return <Shimmer />

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

  console.log(
    'restaurantMenu',
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  )

  // const itemCategories =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (c) =>
  //       c?.card?.card?.['@type'] ===
  //       'type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge'
  //   )

  const itemCategories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (categories) => {
        return (
          categories?.card?.card?.['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        )
      }
    )
  console.log('item', itemCategories)
  return (
    <div className="menu text-center ">
      <h1 className="text-3xl py-4 font-bold">{name}</h1>
      <h3>
        {cuisines}-{costForTwoMessage}
      </h3>
      {itemCategories.map((categ, index) => {
        return (
          <RestaurantCategory
            key={categ?.card?.card?.title}
            data={categ?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        )
      })}
      {/* <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name}- Rs.
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}
export default RestaurantMenu
