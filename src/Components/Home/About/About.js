import React from 'react';
import about from "../../../images/abouts.jpg"
import Fade from 'react-reveal/Fade';
const About = () => {
    return (
        <div>
            <div className="container pt-5">
                <h3 className='text-primary text-center pt-5 pb-3'>About Us</h3>
                <div className="row">
                    <div className="col-md-6">
                    <Fade left>
                    <h6 className='text-info'>Welcome to Mahira!!</h6>
<p>Mahira Furniture, a brand, is now considered as a well-known furniture brand in Bangladesh. With the utmost promise to provide the finest home and office furniture Mahira started its journey in 2013. Mahira has introduced a large variety of quality product with exclusive, contemporary and customized design. To cope up with the national and international demand of furniture, Mahira established world class factories in Narayangonj and produces furniture using best quality imported raw materials, modern machineries, seasoning plant, CNC machine etc with the help of experienced engineers, architects and hundreds of skilled labors. From the conceptualization to the final delivery, all out production goes through strict quality control process.


Mahira is relentlessly trying with a vision to provide quality products at a reasonable price and absolute services towards its valued customers, even after sales. Mahira family believes that this would ensure Mahira Furniture as a trusted name in Bangladesh and beyond.


Mahira welcomes the opportunity to become your partner and is ready to deliver you with the appropriate goods and services.</p>

</Fade>
                    </div>
                   
                    <div className="col-md-6">
                        <Fade right>
                    <img className='img-fluid' src={about} alt="" />
                    </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;