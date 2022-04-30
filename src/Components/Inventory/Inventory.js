import React, { useEffect, useState } from 'react';

const Inventory = () => {
    const [inventory,setInventory]=useState([])
    useEffect(()=>{
        fetch('https://gentle-temple-80074.herokuapp.com/inventory')
        .then(res=>res.json())
        .then(data=>setInventory(data))
    },[])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5  container-fluid">
            {
                inventory.slice(0,6).map(item=>
                   
  <div className="col p-3 shadow">
    <div className="card text-center">
      <img src={item.img} className="img-fluid" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Name:{item.name}</h5>
        <h6 className="card-title">Price: {item.price}$</h6>
        <h6 className="card-title">Quantity: {item.quantity}</h6>
        <h6 className="card-title">SupplierName: {item.SupplierName}</h6>
        <p className="card-text">{item.description}</p>
        <button className='btn btn-danger'>Updated</button>
      </div>
    </div>
  </div>
   )
}
  </div>
 
    );
};

export default Inventory;