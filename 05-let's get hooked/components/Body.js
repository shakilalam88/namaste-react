import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'
import { useState } from 'react'

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList)
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterRes = resList.filter((res) => {
              // console.log(res.info.avgRating > 4.3)
              return res.info.avgRating > 4.3
            })
            setListOfRestaurant(filterRes)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        <RestaurantCard resData={listOfRestaurant} />
      </div>
    </div>
  )
}

export default Body
