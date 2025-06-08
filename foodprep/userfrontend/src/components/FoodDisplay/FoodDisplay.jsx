import {useContext} from 'react'
import './FoodDisplay.css'
import {StoreContext} from '../../context/StoreContext'
import { food_list } from '../../assets/assets';
import FoodCard from '../FoodCard/FoodCard';

const FoodDisplay = ({category}) => {
    const {Food_list} = useContext(StoreContext);
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {
                food_list.map((item,index)=>{
                    if(category==="All" || category===item.category)
                    return <FoodCard id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
                })
            }
        </div>
    </div>
  )
}

export default FoodDisplay