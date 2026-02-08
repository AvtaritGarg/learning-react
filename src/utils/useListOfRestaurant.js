import { useEffect, useState } from "react"


const useListOfRestaurant = () => {
    
    const[listOfRestaurant, setListOfRestaurants] = useState([])

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4761768&lng=77.4761638&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    return listOfRestaurant;

}

export default useListOfRestaurant