import React from 'react'

function MenuCCard({el}) {
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
  <button  className="buy-btn">Buy</button>
  
</div>
</div>
</div>

</div> 
  )
}

export default MenuCCard