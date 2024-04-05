import { Link } from 'react-router-dom'
import { CDN_URL } from '../utils/constant'
import UserContext from '../utils/UserContext'
import { useContext } from 'react'
const RestaurantCard = ({ resData }) => {
  const { id, name, cuisines, avgRating, cloudinaryImageId } = resData?.info

  const { loggedInUser } = useContext(UserContext)
  console.log(loggedInUser)
  return (
    <div className="res-card">
      <Link
        to={'restaurants/' + id}
        key={id}
      >
        <img
          src={CDN_URL + cloudinaryImageId}
          alt=""
        />
        <h3>{name}</h3>
        <h5>{cuisines.join(', ')}</h5>
        <h5>{avgRating}</h5>
        <h5>38 minutes</h5>
        <p>{loggedInUser}</p>
      </Link>
    </div>
  )
}

// higher order components

//input - RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="promoted-label">
        <h1>Open</h1>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard
