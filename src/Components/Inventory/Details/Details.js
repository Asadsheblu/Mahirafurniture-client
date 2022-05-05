import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventory from "../../Hook/useInventory"
import Zoom from 'react-reveal/Zoom';
import axios from "axios"

const Details = () => {
    const {Inventoryid}=useParams()
const [newQuantity,setNewQuantity]=useState(0)

    const [inventory,setInventory]=useState({})
    useEffect(()=>{
        const url=`https://gentle-temple-80074.herokuapp.com/inventory/${Inventoryid}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
          setInventory(data);
          setNewQuantity(data.quantity)
          console.log(data.quantity);
        })
        
        
    },[Inventoryid])
    const handeldelivered=async()=>{
      const updatedQuantity = +newQuantity - 1;
      console.log(updatedQuantity);
      setNewQuantity(updatedQuantity)

      const url = `https://gentle-temple-80074.herokuapp.com/inventory/${Inventoryid}`;
      fetch(url, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({ updatedQuantity })
      })
          .then(res => res.json())
          .then(data => {
              
console.log('success', data);
              alert('Delivered successfully!!!');
          })
      
    }
    const handeStock=async(e)=>{
      e.preventDefault()
      const quantity = e.target.stock.value;
        const updatedQuantity = newQuantity + parseInt(quantity);
        setNewQuantity(updatedQuantity);
     

      const url = `https://gentle-temple-80074.herokuapp.com/inventory/${Inventoryid}`;
      fetch(url, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({ updatedQuantity })
      })
          .then(res => res.json())
          .then(data => {
              
console.log('success', data);
              alert('New Stock updated successfully!!!');
          })
      
    }
    
    return (
        <div className='m-5 pt-5'>
           <div className="card mb-3 mt-5 cards  container">
  <div className="row g-0">
    <div className="col-md-6">
        <Zoom>
      <img  src={inventory?.img} className="img-fluid rounded-start" alt="..." />
      </Zoom>
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title">Item Name:{inventory?.name}</h5>
        <h6 className="card-title">Price: {inventory?.price}$</h6>
        <h6 className="card-title">Quantity: {newQuantity}</h6>
        <h6 className="card-title">SupplierName: {inventory?.SupplierName}</h6>
        <p className="card-text">Item Description:{inventory?.description}</p>
        <button onClick={handeldelivered}  className='btn btn-danger'>delivered</button>
      </div>
      <form onSubmit={handeStock}>
        <input type="number" name="stock" />
        <input type="submit" value="STock" />
      </form>
    </div>
  </div>
</div>
          
        </div>
    );
};

export default Details;