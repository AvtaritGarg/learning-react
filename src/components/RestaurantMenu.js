import { useEffect } from "react"
import resInfo from "./MenuItemList"

const RestaurantMenu = () => {

    const data = resInfo[0].card.card.itemCards

    return (

    <div className="menuCard">
        <div className="menuTitle">
            <h1>Subway</h1>
            <h2>250 for 2</h2>    

        </div>
        <div className="menuItems">
            {/* {data.map((res) => {(
                <h3> res.card.info.name      res.card.info.defaultPrice || res.card.info.price</h3>)
            })} */}
            <h3>Sandwich</h3>
            <h3>Salads</h3>
            <h3>Healthy Food</h3>
            <h3>Wrap</h3>
            <h3>Burger</h3>
            <h3>Rice Bowl</h3>
        </div>
    </div>
)}

export default RestaurantMenu