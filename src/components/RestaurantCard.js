import { CDN_URL } from '../utils/constant'
const RestaurantCard = ({ resData }) => {
  return (
    <>
      {resData.map((data) => {
        const { id, name, cuisines, avgRating, cloudinaryImageId } = data.info
        return (
          <div
            className="res-card"
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
          </div>
        )
      })}
    </>
  )
}

export default RestaurantCard
