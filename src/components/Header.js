import Title from "./Title";
import AppLayout from "./AppLayout";
const HeaderComponent =() =>{
    return(
      // parent flex
      // React.Fragment or <>
      <>  
      <div className="header" >
        {/* flex item 1 */}
         <Title />
         {/* flex item 2 */}
         <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
         </div>
         
      </div>
      <AppLayout />
      </>
    )
  }
  export default HeaderComponent;