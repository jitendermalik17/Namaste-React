import React, { useState,useEffect,useContext } from "react";
import Restaurant from "./Restaurant";
import {CONFIG} from "../../Constants";
import Shimmer from "./Shimmer";
import { filter } from "../utils/Helper";
import useOnline from '../utils/useOnline';
import UserContext from "../utils/UserContext";

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const {user,setUser} = useContext(UserContext);
    
    //FOR SHIMMER UI ON INITIAL LOAD
    const [isError, setIsError] = useState(false);
 



useEffect(()=>{
    getRestaurants(CONFIG);   
},[])

    const filter = (searchText,restaurants) =>{
        debugger;
        let filterData = restaurants.filter((curElem) => 
          curElem?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
        )
        return filterData
    }


const getRestaurants = async (apiData) =>{
    try{
    let ftch = await fetch(apiData);
    let convert = await ftch.json();
    setIsError(true);
    setAllRestaurants(convert?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(convert?.data?.cards[2]?.data?.data?.cards);
    console.log(convert);
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
                <button type="submit" className="search__btn" onClick={()=>{ 
                    const data = filter(searchText,allRestaurants)
                    setFilteredRestaurants(data)}}>Search</button>  </div><br/>
                    <div style={{display:"flex",justifyContent:"center"}}>
                    <label>UserName </label>
                    <input type="text" style={{border:"1px solid #000"}} value={user.name} onChange={
                        e => setUser({
                        ...user,
                        name : e.target.value,
                    })} />

                   <label>Email</label> <input type="text" value={user.email} style={{border:"1px solid #000",marginLeft:"20px"}} onChange={
                        e => setUser({
                            ...user,  
                        email:e.target.value,
                    })} />
                    </div>

                    
          
            {filteredRestaurants.length > 0 && <h3 className="total__count"> Total Restaurants:  {filteredRestaurants.length}</h3>}
            <div className="restaurant-list-container">
            {!isError && <Shimmer />}
            
            {filteredRestaurants.length === 0 && <div style={{flex:"1",color:"red",textAlign:"center"}}>No Restaurant Match your search, <br/>please search with some other name</div>}
                {
                    filteredRestaurants.map(restaurant => {
                        return <Restaurant {...restaurant.data} key={restaurant.data.id}  />
                    })
                }
            </div>
        </div>
    )
}

export default Body;