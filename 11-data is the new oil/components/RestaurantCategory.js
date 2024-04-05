import { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItem, setShowItem] = useState(false)
  const handleClick = () => {
    setShowIndex()
  }
  return (
    <div>
      <div className="head w-6/12 mx-auto my-4 shadow-lg p-4 flex flex-col cursor-pointer text-left">
        <div
          className="flex justify-between items-center"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
      {/* <div className="body">
        {data.map((item) => {
          return (
            <p>
              {item?.card?.info?.name}-{item?.card?.info?.name}
            </p>
          )
        })}
      </div> */}
    </div>
  )
}
export default RestaurantCategory
