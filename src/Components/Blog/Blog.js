import React from 'react';
import jsNode from "../../images/download.jpg"
import mnode from "../../images/MongoDB_NodeJS_Driver-0qkvda7kk0.png"
import sql from "../../images/SQL-Vs-NoSQL1.png";
const Blog = () => {
    return (
        <div className='container pt-5 pb-3 mt-5'>
            <div className="row">
                <h6 className='pt-5'>1. Difference between Javascript and Nodejs</h6>
                <div className="col-md-5">
        <img className='img-fluid' src={jsNode} alt="" />
                </div>
                <div className="col-md-7">
                    <ol>
                        <li>
                            Javascript is Programming Language And Node Js is a Javascript Runtime Environment.
                        </li>
                        <li>Javascript genarlly Used for client side. And Node js used for server-side. </li>
                        <li>Javasctipt basically run Only Browser But We are doing Run Javascript outside of Browser Help of Node Js </li>
                        <li>Javascript Used  Front end Developement And Node js used for Backend Development</li>
                        
                    </ol>
                </div>
            </div>
            <div className="row">
                <h6 className='pt-5'>2. When should you use nodejs and when should you use mongodb</h6>
                <div className="col-md-5">
        <img className='img-fluid' src={mnode} alt="" />
                </div>
                <div className="col-md-7">
                    <h6>Node Js:</h6>
                    <p>Node Js is a Javascript Runtime Environment.Basially we are using node js for server side Developement.We are for  connect database client side to server side when we are using node js.</p>
                    <h6>Mongodb:</h6>
                    <p>MongoDB makes it easy for developers to store structured or unstructured data.Mongodb is Stored Data in Json Format.MongoDB can also handle high volume and can scale both vertically or horizontally to accommodate large data loads.</p>
                </div>
            </div>
            <div className="row">
                <h6 className='pt-5'>3. Differences between sql and nosql databases.</h6>
                <div className="col-md-5">
        <img className='img-fluid' src={sql} alt="" />
                </div>
                <div className="col-md-7">
                    <h6>SQL:</h6>
                    <p>SQL Means Structured query Language.SQL is made database table to store data.Need Query Langugate to access Data.SQL is horizontally long.</p>
                    <h6>NO SQL:</h6>
                    <p>No SQL means Non relational database.In No sql all is an object in JSON Format .No Sql Doesn't have any Language.No SQL is Vertically long</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;