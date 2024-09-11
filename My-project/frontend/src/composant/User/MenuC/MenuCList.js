import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFood } from '../../../redux/foodSlice'
import { fetchFood } from '../../../api/foodApi'
import MenuCCard from './MenuCCard'
import './MenuCList.css'
import NavBar from '../NavBar/NavBar'
function MenuCList() {
    const Food = useSelector(state=> state.food)
    const dispatch = useDispatch()
    console.log('listet l mekla', Food)

    const getFood = async()=>{
        const data = await fetchFood()
        dispatch(setFood(data.food))
        console.log("data=> ", data)
       }
       useEffect(()=>{
         getFood()
         },[])
  return (
    <div>
      <NavBar/>
      
      
     
          {
    Food.map((el)=> <MenuCCard el={el} getFood={getFood} />)
   
         }
    </div>
  )
}

export default MenuCList