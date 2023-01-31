const filter = (searchText,restaurants) =>{
    let filterData = restaurants.filter((curElem) => 
      curElem?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    )
    return filterData;
}
export {filter};