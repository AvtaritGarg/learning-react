import RestaurantCard from "./RestaurantCard"
import resList from "../utils/ResList"


const Body = ()=> (
    <div className="body">
        <div className="leftBody">
            <div className="cityName">
                <h1>Gautam Buddh Nagar</h1>
            </div>
            <div className="res-cards">

                {resList.data.cards.map((restaurant) => (
                    <RestaurantCard key = {restaurant.card.card.info.id} resData = {restaurant.card.card.info} />
                ))}

                <RestaurantCard
                resData = {resList.data.cards[2].card.card.info}/>
            </div>
        </div>
        <div className="rightBody">
            <div className="search">
                <input type="text" className="searchbar"></input>
            </div>
            <div className="filters">

            </div>
        </div>
    </div>
)

export default Body