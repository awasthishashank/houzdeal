import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
   <section className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-container">
        {/*left-side*/}
        <div className="flexColStart f-left">
            <img src='../houzdeal_logo 1.png' width={180}/>
            <span className="secondaryText">
                Our vision is to provide
                <br/>
                the best place to live for them.
               
            </span>
            
        </div>
        <div className="flexColStart  f-right">
                <span className='primaryText'> Information</span>
                <br/>
                <span className='secondaryText'>Shashank Awasthi</span>
           
                <div className="flexCenter f-menu">
                <a href="#"> Properties</a>
                <a href="#lp"> Services</a>
                <a href="#"> Contact-Us</a>
                <a href="#"> About-Us</a>
                </div>
        </div>
        </div>
    <div/>
   </section>
  )
}

export default Footer