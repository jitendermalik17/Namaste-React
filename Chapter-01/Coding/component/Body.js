import React, { useState,useEffect } from "react";
import Restaurant from "./Restaurant";
import {CONFIG} from "../Data/constants";
import Shimmer from "./Shimmer";



const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    //FOR SHIMMER UI ON INITIAL LOAD
    const [isError, setIsError] = useState(false);
 
useEffect(()=>{
    getRestaurants(CONFIG);   
},[])

useEffect(()=>{
    getRestaurants();
},[filteredRestaurants])

useEffect(()=>{
    filter(searchText,allRestaurants);
},[searchText])


// let avg = (e) => {
//     let convert =  allRestaurants.filter((curElem) => {debugger
//         curElem.data.avgRating.sort((a,b) => {
//         return a.data.avgRating - b.data.avgRating
//        })
//     }) 
//    filteredRestaurants(convert)
// }
    const filter = (searchText,restaurants) =>{
        let filterData = restaurants.filter((curElem) => 
          curElem?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
        )
        setFilteredRestaurants(filterData)
    }
const getRestaurants = async (apiData) =>{
    try{
        let ftch = await fetch(apiData);
    let convert = await ftch.json();
    setIsError(true);
    setAllRestaurants(convert?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(convert?.data?.cards[2]?.data?.data?.cards);
    }
    catch(error){
        console.log(error);
    }

}
const searchBox = (e) =>{
    setSearchText(e.target.value);
}
    return (
        <div className="body-container">  
                <div className="search-container">
                <input type="text"
                    name="search"
                    value={searchText}
                    className="search-input"
                    placeholder="Sarch your Favourite Restaurant"
                    onChange={(e) => searchBox(e)}
                />
            </div>
            {filteredRestaurants.length > 0 && <h3 className="total__count"> Total Restaurants:  {filteredRestaurants.length}</h3>}
            <div className="restaurant-list-container">
            {!isError && <Shimmer />}
            
            {filteredRestaurants.length === 0 && <div style={{flex:"1",color:"red",textAlign:"center"}}>No Restaurant Match your search, <br/>please search with some other name</div>}
                {
                    filteredRestaurants.map(restaurant => {
                        return <Restaurant restaurant={restaurant.data} key={restaurant.data.id}></Restaurant>
                    })
                }
            </div>
        </div>
    )
}

export default Body