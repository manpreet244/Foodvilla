import { IMG_CDN_URL } from "../config";
const RestaurantCard =( {name , cloudinaryImageId}) =>{
    // console.log(props)
    //Destructuring 
    // const{name , cuisines , cloudinaryImageId} = restaurant.data;
    return(
      <div className="card">
         {/* //  restaurantList[0].data?.cloudinaryImageId} */}
        <img 
        alt="img1"
        src={ IMG_CDN_URL +  cloudinaryImageId}
        />
        <h3>{name}</h3>                                                              
        {/* <p>{props.restaurant.data?.cuisines.join(" , ")}</p> */}
        
      </div>
    )
  }

  export default RestaurantCard;