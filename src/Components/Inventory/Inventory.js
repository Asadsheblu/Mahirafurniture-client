import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Items from './Items';

const Inventory = () => {
    const [inventory,setInventory]=useState([])
    useEffect(()=>{
        fetch('https://gentle-temple-80074.herokuapp.com/inventory')
        .then(res=>res.json())
        .then(data=>setInventory(data))
    },[])
    const navigate=useNavigate()
    const manageItem=()=>{
        navigate('/manage')
    }
    return (
        <div>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-5  container-fluid">
        
           {
             inventory.slice(0,6).map(item=><Items key={item._id}item={item}></Items>)
           }
               
          </div>
            <div className='w-75 mx-auto text-center m-5'>
            <button  onClick={manageItem}                                                                                             className='btn btn-info'>See Inventory</button>
            </div>
  </div>
 
    );
};

export default Inventory;