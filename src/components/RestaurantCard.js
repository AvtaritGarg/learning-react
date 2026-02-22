import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props)=>{
    const {resData} = props;
 
    return (<div className="h-100 bg-gray-100 w-68 m-5 rounded-lg">
                <div>
                    <img className="w-68 h-56 rounded-t-lg" src={CDN_URL + resData.cloudinaryImageId}></img>
                </div>
                <div className="resText ml-5 mt-1">
                    <h2 className="font-bold">
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



