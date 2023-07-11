import React, { useState } from 'react';
import './Header.css';
import{BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
const [menuOpened,setmenuOpened]=useState(false)
let ssize = false
    const getMenuStyles=(menuOpened)=>{
        if(document.documentElement.clientWidth <= 800)
        {
            ssize =true
            return{right:!menuOpened && '100%'}
        }
    }
    const clickhandler =(menuOpened)=>{
        return setmenuOpened(!menuOpened)
    }
    return (
        <section className='h-wrapper'>
            <div className=' flexCenter  paddings  innerWidth  h-container'>
                <img src='houzdeal_logo 1.png' alt='logo' width={200} />
        
            { !menuOpened && ssize ? <>
            <OutsideClickHandler 
            onOutsideClick={()=>{setmenuOpened(false)}}>
                <div className=' flexCenter h-menu' style ={getMenuStyles(menuOpened)}>
                
                    <a href="#loan">Loan offers</a>
                
                    <a href="#list"> List Property</a>
                    <button className='button'>
                    <a href="#"> Free</a>
                    </button>
                
                </div>
                </OutsideClickHandler> 
                </>: <><div className="menu-icon" onClick={()=>{clickhandler(menuOpened)}}>
                    <BiMenuAltRight size={30}/>
                </div>
                </>}
                { !ssize ? <>
            
                <div className=' flexCenter h-menu' style ={getMenuStyles(menuOpened)}>
                
                <a href="#loan">Loan offers</a>
            
                <a href="#list"> List Property</a>
                <button className='button'>
                <a href="#list"> Free</a>
                </button>
            
            </div>
    

            </>:<>
                </>
            }
            </div>

            <div>
                <center><h2 className='heading'>Find properties in your budget</h2></center>
                <center><p className='para'>Discover your dream home with our premier real estate listings.Explore stunning<br/> properties tailored to your unique desires.




</p></center>
            </div>
            <div className='s-container'>
            <div className="search-bar">
                <select className='location'>
                    <option>Location</option>
                
                <option>Goregaon</option>
                
                <option>Magarpatta City</option>
                <option>Navi Mumbai</option>
                <option>Pune</option>
                <option>Viman nagar</option>
                </select>
             
          
                
             <input className='text' type="text" placeholder="Search your location..." />
            <button className="search-button">Search</button>
             </div>
             </div>
            
        </section>
    )
}

export default Header
