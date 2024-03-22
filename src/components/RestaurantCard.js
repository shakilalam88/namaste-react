import { Link } from 'react-router-dom'
import { CDN_URL } from '../utils/constant'
const RestaurantCard = ({ resData }) => {
  // console.log(resData)
  return (
    <>
      {resData.map((data) => {
        const { id, name, cuisines, avgRating, cloudinaryImageId } = data.info
        return (
          <Link
            to={'restaurants/' + id}
            key={id}
          >
            <div className="res-card">
              <img
                src={CDN_URL + cloudinaryImageId}
                alt=""
              />
              <h3>{name}</h3>
              <h5>{cuisines.join(', ')}</h5>
              <h5>{avgRating}</h5>
              <h5>38 minutes</h5>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default RestaurantCard
