import React, {useContext} from "react";
import { Link } from "react-router-dom";
import '../../styles/restaurant.css'
import { IMG_CDN } from "../../Constants";
import userContext from "../utils/UserContext";

const FoodItem = ({
    id,
    name,
    description,
    cloudinaryImageId,
    price
}) => {
    const {user} = useContext(userContext);
    return (
        <div className="restaurant-container shadow-lg">
        <Link to={`/restaurant/${id}`}><img src={IMG_CDN + cloudinaryImageId} alt="image" /></Link>
            <div className="names">{name}</div>
            <div className="categories">{description}</div>
           <div className="categories">Rupees {Math.round(price / 100)} </div>
        </div>
    )
}
export default FoodItem