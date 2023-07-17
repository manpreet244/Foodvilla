import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import {useState} from 'react';

function filterData(searchText , restaurants){
 
  return restaurants.filter((restaurant) =>
  restaurant.data.name.includes(searchText)

  );
  
}
const Body =() =>{
    // const searchText ="KFC";//In normal JS
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText , setSearchText] = useState("Swad");
   
    return (
      
        <>
        <div className="search-container">
            <input 
                type="text"
                className="search-input"
                placeholder="search"
                value={searchText}
                onChange={(e) =>{
                    // searchText = e.target.value;
                    console.log(e.target.value)
                    setSearchText(e.target.value);
                }}
                />
                <button
                 className="search-btn"
                 onClick={()=>{
                  //need to filter the data
                  const data = filterData(searchText , restaurants);
                  console.log(data)
                  setRestaurants(data);

                 }}
                
                >Search</button>

        </div>
     <div class="restaurant-list">
      {
        restaurantList.map((restaurantObj)=>{
          return(
            <RestaurantCard {...restaurantObj.data} key ={restaurantObj.data.id}/>
          );
        })
      }
     {/* <RestaurantCard {...restaurantList[0].data}/>
     <RestaurantCard {...restaurantList[1].data}/>
     <RestaurantCard {...restaurantList[2].data}/>
     <RestaurantCard {...restaurantList[3].data}/>
     <RestaurantCard {...restaurantList[4].data}/>
     <RestaurantCard {...restaurantList[5].data}/> */}
     {/* <RestaurantCard name ={restaurantList[2].data.name} img={restaurantList[2].data.cloudinaryImageId}/> */}
     {/* <RestaurantCard  restaurant ={restaurantList[3]}/> */}
  
     </div>
     </>
    )
  }
  export default Body;