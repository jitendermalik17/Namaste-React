import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import { IMG_CDN } from '../Data/Constants';
import def from '../assets/default__img.png'
import veg from '../assets/veg.jpg'
import nonveg from '../assets/nonveg.png'
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const [filterVal, setFilterVal] = useState();
    const [resDetail, setResDetail] = useState();
    const {id} = useParams();
useEffect(()=>{
    getRestorantInfo(); 
},[])


const getRestorantInfo = async () =>{
    const data = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=28.6307076&lng=77.23800059999999&menuId=${id}`);
    const json = await data.json();
    console.log(json.data);
    setResDetail(json.data);
    setFilterVal(json.data);
}

const filterCat = (val) => {
    const result = Object.values(resDetail?.menu?.items).filter(cur => cur.category === val);
    setFilterVal(result);
  };

    //read dynamic ID by Following error
    
  return  (!filterVal) ? <div className="restaurant-list-container"><Shimmer/></div> : (
    <>    
    <div className="top__header">
        <div className='inner__header'>
        <img src= {IMG_CDN + resDetail.cloudinaryImageId} alt="" />
        <div className="header__block">
        <h1>{resDetail?.name}</h1>
        <p>{resDetail?.cuisines.join(", ")}</p>
        <p>{resDetail?.locality + " " + resDetail?.areaSlug}</p>       
        <div className="info__block">
            <p>{resDetail?.avgRating} Rating</p>
            <p>{resDetail?.costForTwoMsg}</p>
            
        </div>
        </div>
      </div>
    </div> 
    <div className="restaurant-list-container">
    <div className='menu'>
    <div>
    <div className='body__section'>
    <div className='menu__category'>
        <ul>
        {resDetail?.menu?.widgets.map((curElem) => {
            return(
                <li><button onClick={()=> filterCat(curElem.name)}>{curElem.name}</button></li>
            )
        })}
        </ul>
    </div>
    <div className="menu__section">
    <h2 className='menu__heading'>Recommended</h2>
    {filterVal.length > 0 && filterVal.map(curIt => {
        return (
            <>
            <div>{curIt.name}</div>
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