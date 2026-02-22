import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props)=>{
    const {resData} = props;
    console.log(props);
    
 
    return (<div className="h-100 bg-gray-100 w-68 m-5 rounded-lg">
                
                <div>
                    <img className="w-68 h-56 rounded-t-lg" src={CDN_URL + resData?.cloudinaryImageId}></img>
                </div>
                <div className="resText ml-5 mt-1">
                    <h2 className="font-bold">
                        {resData?.name}
                    </h2>
                    <h3>
                        {resData?.cuisines.join(", ")}
                    </h3>
                    <h3>
                        {resData?.avgRating} ⭐️
                    </h3>
                    <h3>
                        {resData?.sla?.deliveryTime} minutes
                    </h3>
                </div>
            </div>
        )
    }

export const withOpenLabel = (props) => {
    return (props) => {  
        return(
    
    <div className="relative">
        <label className="absolute px-4 my-8 bg-green-500 rounded-lg w-24 text-center">Open</label>
        <RestaurantCard {...props}/>

    </div>

        )
    }
}
export default RestaurantCard;



