import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props)=>{
    const {resData} = props;
 
    return (<div className="res-card">
                <div>
                    <img className="cardImage" src={CDN_URL + resData.cloudinaryImageId}></img>
                </div>
                <div className="resText">
                    <h2>
                        {resData.name}
                    </h2>
                    <h3>
                        {resData.cuisines.join(", ")}
                    </h3>
                    <h3>
                        {resData.avgRating} ⭐️
                    </h3>
                    <h3>
                        {resData.sla.deliveryTime} minutes
                    </h3>
                </div>

            </div>
        )
    }

export default RestaurantCard