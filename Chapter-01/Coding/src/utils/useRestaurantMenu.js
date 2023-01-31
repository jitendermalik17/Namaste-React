import { useState } from 'react'

const filterCat = (name) => {
    alert(name);
    const [filterVal, setFilterVal] = useState([]);
    const result = Object.values(resDetail?.menu?.items).filter(cur => cur.category === name);
    setFilterVal(result);
   return filterVal
}
export default filterCat;
    