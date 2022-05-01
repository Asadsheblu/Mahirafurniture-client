import React from 'react';
import './Carrer.css'
import img from "../../images/01.png"
const Career = () => {
    return (
        <div className='pt-5 container mt-5 pb-5 mb-5'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Dept.</th>
      <th scope="col">Education</th>
      <th scope="col">Apply</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">HR.Admin.</th>
      <td>HR</td>
      <td>Bsc</td>
      <td>Apply</td>
    </tr>
    <tr>
      <th scope="row">SR</th>
      <td>Marketing</td>
      <td>BBA</td>
      <td>Apply</td>
    </tr>
    <tr>
      <th scope="row">Sr.Enginner</th>
      <td >Service</td>
      <td>BSC</td>
      <td>Apply</td>
      
    </tr>
  </tbody>
</table>
          {/* <div className="row">
            <div className="col-lg-12 col-sm-12">
            <table className='pt-5 pb-5'>
  <tr>
    <th>Job Title</th>
    <th>Department</th>
    <th>Education</th>
    <th>PubDate</th>
    <th>Apply</th>
  </tr>
  <tr>
    <td>HR Admisntartive</td>
    <td>HR</td>
    <td>Bechelor's</td>
    <td>12-5-2022</td>
    <th><a className='text-decoration-none' href="">Apply</a></th>
  </tr>
  <tr>
    <td>Sales Representative</td>
    <td>Marketing</td>
    <td>Bechelor's</td>
    <td>12-4-2022</td>
    <th><a className='text-decoration-none' href="">Apply</a></th>
  </tr>
  <tr>
    <td>Service Enginer</td>
    <td>Project Department</td>
    <td>Bachelor's</td>
    <td>12-4-2022</td>
    <th><a className='text-decoration-none' href="">Apply</a></th>
  </tr>
  <tr>
    <td>Accountant</td>
    <td>Accounce Department</td>
    <td>BBA(ACC)</td>
    <td>12-5-2022</td>
    <th><a className='text-decoration-none' href="">Apply</a></th>
  </tr>
  <tr>
    <td>Product Enginer</td>
    <td>Development Department</td>
    <td>Bachelor's</td>
    <td>19-5-2022</td>
    <th><a className='text-decoration-none' href="">Apply</a></th>
  </tr>
  <tr>
    <td>Accountant</td>
    <td>Accounce Department</td>
    <td>BBA(ACC)</td>
    <td>12-5-2022</td>
    <th><a className='text-decoration-none' href="">Apply</a></th>
  </tr>
</table>
            </div>
          </div>
             */}
        </div>
    );
};

export default Career;