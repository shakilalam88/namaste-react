import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([])

  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=225317&catalog_qa=undefined&submitAction=ENTER'
    )
    const json = await data.json()
    setResInfo(json?.data?.cards[0]?.card?.card?.info)
  }

  if (resInfo === null) {
    return <Shimmer />
  }
  return (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Coke</li>
      </ul>
    </div>
  )
}
export default RestaurantMenu
