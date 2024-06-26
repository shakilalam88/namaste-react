import RestaurantCard, { withPromotedLabel } from './RestaurantCard'
// import resList from '../utils/mockData'
import { useState, useEffect, useContext } from 'react'
import UserContext from '../utils/UserContext'

import Shimmer from './Shimmer'

const Body = () => {
  const [apiData, setApiDat] = useState([])
  const [listOfRestaurant, setListOfRestaurant] = useState([])
  const [searchText, setSearchText] = useState('')

  const { loggedInUser, setUserName } = useContext(UserContext)
  console.log(loggedInUser)

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )
    const json = await data.json()

    //optional chaining
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    setApiDat(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  }

  // conditional rendering
  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />
  // }
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box border border-black"
            name=""
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button
            className="searchBtn"
            onClick={() => {
              // console.log(searchText)
              const updatedRes = apiData.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              })
              setListOfRestaurant(updatedRes)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterRes = listOfRestaurant.filter((res) => {
              // console.log(res.info.avgRating > 4.3)
              return res.info.avgRating > 4.3
            })
            setListOfRestaurant(filterRes)
          }}
        >
          Top Rated Restaurant
        </button>
        <input
          type="text"
          value={loggedInUser}
          className="border border-black h-8 mt-3"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => {
          {
            /* console.log(restaurant) */
          }
          const { isOpen } = restaurant?.info
          return isOpen ? (
            <RestaurantCardPromoted
              key={restaurant.info.id}
              resData={restaurant}
            />
          ) : (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant}
            />
          )
        })}

        {/* {listOfRestaurant.map((restaurant) => (
          const { isOpen } = restaurant?.info?.isOpen
          return{
            isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )
          }
        ))} */}
      </div>
    </div>
  )
}

export default Body
