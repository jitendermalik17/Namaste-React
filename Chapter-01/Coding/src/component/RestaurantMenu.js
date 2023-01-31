import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import { IMG_CDN } from '../../Constants';
import def from '../assets/default__img.png'
import veg from '../assets/veg.jpg'
import nonveg from '../assets/nonveg.png'
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu = () => {
    const [filterVal, setFilterVal] = useState([]);
    //const [resDetail, setResDetail] = useState();
    const {id} = useParams();
    const resDetail = useRestaurant(id);

    const filterCat = (val) => {
        const result = Object.values(resDetail?.menu?.items).filter(cur => cur.category === val);
        setFilterVal(result);
    };

    //read dynamic ID by Following error
    
  return  (!resDetail) ? <div className="restaurant-list-container mt-8"><Shimmer/></div> : (
    <>    
    <div className="top__header">
        <div className='inner__header'>
        <img src={IMG_CDN + resDetail.cloudinaryImageId} alt="" />
        <div className="header__block">
        <h1>{resDetail?.name}</h1>
        <p>{resDetail?.cuisines.join(",")}</p>
        <p>{resDetail?.locality + " " + resDetail?.areaSlug}</p>
        <div className="info__block">
            <p>{resDetail?.avgRating} Rating</p>
            <p>{resDetail?.costForTwoMsg}</p>
        </div>
        </div>
      </div>
    </div> 
    <div className="restaurant-list-container mt-5">
    <div className='menu'>
    <div>
    <div className='body__section'>
    <div className='menu__category'>
        <ul>
        {resDetail?.menu?.widgets.map((curElem,index) => {
            return(
                <li key={index}><Link onClick={()=> filterCat(curElem.name)}>{curElem.name}</Link></li>
            )
        })}
        </ul>
    </div>
    <div className="menu__section">
    <h2 className='menu__heading'>Recommended</h2>
    {filterVal.length > 0 && filterVal.map(curIt => {
        return (
            <>
            <div className="menu__record" key={curIt.id}>
            
            <div className="menu__detail">
            <div>{curIt.isVeg ? <img src={veg} alt="" width="16" /> : <img src={nonveg} alt="" width="16"/>}</div>
            <p  className="menu__seller">{curIt.isBestSeller ? <span className="icon-star"> Best Seller</span> : ""}</p>
            <h2 className='menu__name'>{curIt?.name}</h2>
            <p className="menu__price"><span className="rupee">{Math.floor(curIt.price / 100) }</span></p>
            
            <p className="menu__description">{curIt.description}</p>
            </div>
            <div>
            <img src= { curIt?.cloudinaryImageId  ? IMG_CDN + curIt?.cloudinaryImageId : def } alt="" className="menu_img" />
            </div> 
        </div>
            </>
        )
    })}
        <p className='total__counts'>{Object.values(resDetail?.menu?.items).slice(0,20).length} ITEMS</p>
  
        {Object.values(resDetail?.menu?.items).slice(0,20).map((curItem) => 
            (<>
                
            <div className="menu__record" key={curItem.id}>
            
                <div key={curItem.id} className="menu__detail">
                <div>{curItem.isVeg ? <img src={veg} alt="" width="16" /> : <img src={nonveg} alt="" width="16"/>}</div>
                <p  className="menu__seller">{curItem.isBestSeller ? <span className="icon-star"> Best Seller</span> : ""}</p>
                <h2 className='menu__name'>{curItem?.name}</h2>
                <p className="menu__price"><span className="rupee">{Math.floor(curItem.price / 100) }</span></p>
                
                <p className="menu__description">{curItem.description}</p>
                </div>
                <div>
                <img src= { curItem?.cloudinaryImageId  ? IMG_CDN + curItem?.cloudinaryImageId : def } alt="" className="menu_img" />
                
                </div> 
                
            </div>
            </> 
            ))}
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default RestaurantMenu;