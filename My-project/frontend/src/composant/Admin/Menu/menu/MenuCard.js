import React from 'react'
import { removeFood } from '../../../../api/foodApi'
import { useNavigate } from 'react-router'
function MenuCard({el, getFood}) {

  const navigate = useNavigate()

  const deletefood =async ()=>{
  await removeFood(el._id)
  getFood()
  }
  return (
    <div>
    <div className="card">
<img
src={el.imageUrl}
alt="Product Image"
className="card-img"
/>
<div className="card-content">
<h2 className="card-name">{el.name}</h2>
<p className="card-description">
 {el.description}
</p>
<div className="card-footer">
  <span className="price">{el.price}</span>
  <button onClick={()=>deletefood()} className="buy-btn">remove</button>
  <button onClick={()=>navigate(`/updatefood/${el._id}`)} className="buy-btn">update</button>
</div>
</div>
</div>

</div> 
 )
}

export default MenuCard