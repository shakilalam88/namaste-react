import { CDN_URL } from '../utils/constant'

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li
            className="border-b-2 flex justify-between border-gray py-3 "
            key={item?.card?.info?.id}
          >
            <div>
              <p className="text-2xl pb-3">
                {item?.card?.info?.name}-- Rs: {item?.card?.info?.price / 100}
              </p>

              <p>{item?.card?.info?.description}</p>
            </div>
            <img
              className="size-40"
              src={CDN_URL + item?.card?.info?.imageId}
              alt=""
            />
          </li>
        )
      })}
    </ul>
  )
}
export default ItemList
