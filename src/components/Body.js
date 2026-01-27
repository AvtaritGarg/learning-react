import RestaurantCard from "./RestaurantCard"
import resList from "../utils/ResList"
import {use, useState} from "react"



const Body = ()=> {

    const[listOfRestaurants, setlistOfRestaurants] = useState(resList[0].cards)
    
    return(

    <div className="body">
        <div className="leftBody">
            <div className="cityName">
                <h1>Gautam Buddh Nagar</h1>
            </div>
            <div className="res-cards">

                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key = {restaurant.card.card.info.id} resData = {restaurant.card.card.info} />
                ))}

            </div>
        </div>
        <div className="rightBody">
            <div className="search">
            <button className="filterBtn" onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => res.card.card.info.avgRating>4);
                setlistOfRestaurants(filteredList)
            }
            }>Top rated Restaurants</button>
            </div>
            <div className="filters">

            </div>
        </div>
    </div>
    )
}

export default Body