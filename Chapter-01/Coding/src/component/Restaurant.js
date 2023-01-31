import React, {useContext} from "react";
import { Link } from "react-router-dom";
import '../../styles/restaurant.css'
import { IMG_CDN } from "../../Constants";
import userContext from "../utils/UserContext";

const Restaurant = ({
    id,
    name,
    cloudinaryImageId,
    cuisines,avgRating,
    deliveryTime,
    lastMileTravelString,
    costForTwoString
}) => {
    const {user} = useContext(userContext);
    return (
        <div className="restaurant-container shadow-lg">
        <Link to={`/restaurant/${id}`}><img src={IMG_CDN + cloudinaryImageId} alt="image" /></Link>
            <div className="names">{name}</div>
            <div className="categories">{cuisines.join(", ")}</div>
            <div className="restaurant-info-container">
                <div className="ratings">★ {avgRating}</div>
                <div className="separator">•</div>
                <div className="eta">{deliveryTime} min</div>
                <div className="separator">•</div>
                <div className="estimated-cost">{costForTwoString}</div>
                
            </div>
            <div className="categories">{lastMileTravelString}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
        </div>
    )
}
export default Restaurant