import RestaurantCard from "./RestaurantCard"
import { useEffect, useState} from "react"
import Shimmer from "./shimmer"
import useOnlineStatus from "../utils/useOnlineStatus"



const Body = ()=> {

    const [originalList, setOriginalList] = useState([])

    const[listOfRestaurants, setlistOfRestaurants] = useState([])

    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchdata();
    }, [])
    
    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4761768&lng=77.4761638&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setOriginalList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(listOfRestaurants.length === 0){
        return <Shimmer />
    }


    if (onlineStatus === false) return (
        <h1>
            Looks like you're offline, please check your internet connection.
        </h1>
    )
        
    return(

    <div className="flex body">
        <div className="leftBody">
            <div className="cityName">
                <h1>Gautam Buddh Nagar</h1>
            </div>
            <div className="flex flex-wrap justify-evenly">

                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} resData = {restaurant.info} />
                ))}

            </div>
        </div>
        <div className="rightBody">
            <div className="search">
            <button className="filterBtn ori orm oro ort orx orz osb ose osg osi" onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => res.info.avgRating>4);
                setlistOfRestaurants(filteredList)
            }
            }>Top rated Restaurants</button>
            <input type="text"className="searchbox" value = {searchText} onChange={(e)=>{
                setSearchText(e.target.value)
            }}></input>
            <button className="searchBtn" onClick={()=>{
                const searchedList = originalList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setlistOfRestaurants(searchedList)
            }}>Search</button>
            </div>
            <div className="filters">

            </div>
        </div>
    </div>
    )
}

export default Body