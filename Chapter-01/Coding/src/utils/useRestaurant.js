import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from '../../Constants';

const useRestaurant = (resid) => {
  const [resDetail, setResDetail] = useState(null);

  //get data from api
  useEffect(()=>{
    getRestorantInfo(); 
},[])

const getRestorantInfo = async () =>{
    const data = await fetch(FETCH_MENU_URL + resid);
    const json = await data.json();
    console.log(json.data);
    setResDetail(json.data);
    //setFilterVal(json.data);
}
return resDetail;
  //return restaurant data
}

export default useRestaurant;