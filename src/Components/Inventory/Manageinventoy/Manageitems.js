import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Manageitems = () => {
    const [inventory,setinventory]=useState([])
    useEffect(()=>{
        fetch('https://gentle-temple-80074.herokuapp.com/inventory')
        .then(res=>res.json())
        .then(data=>setinventory(data))
    },[])
    
    return (
        <div className='container mt-5 pt-5'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    inventory.map(items=>
  <div key={items._id} className="col">
    <div className="card">
    <img  src={items?.img} className="img-fluid rounded-start" alt="..." />
      <div className="card-body">
      <h5 className="card-title">Item Name:{items?.name}</h5>
        <h6 className="card-title">Price: {items?.price}$</h6>
        <h6 className="card-title">Quantity: {items?.quantity}</h6>
        <h6 className="card-title">SupplierName: {items?.SupplierName}</h6>
        <p className="card-text">Item Description:{items?.description}</p>
      </div>
    </div>
  </div>
  )
}
</div>

        </div>
    );
};

export default Manageitems;