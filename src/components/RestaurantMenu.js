import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null)

  const { resID } = useParams()
  // console.log(resID)

  const resInfo = useRestaurantMenu(resID)

  // useEffect(() => {
  //   fetchMenu()
  // }, [])

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=' +
  //       resID
  //   )
  //   const json = await data.json()
  //   setResInfo(json?.data)
  // }

  if (resInfo === null) return <Shimmer />

  // console.log(resInfo)
  // console.log(resInfo?.cards[0]?.card?.card?.info)
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

  // console.log(itemCards)

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines}-{costForTwoMessage}
      </h3>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name}- Rs.{item.card.info.defaultPrice / 100}
            </li>
          )
        })}
        {/* <li>Biryani</li>
        <li>Burger</li>
        <li>Coke</li> */}
      </ul>
    </div>
  )
}
export default RestaurantMenu
