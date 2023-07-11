import React from 'react'
import "./ResidenciesMumbai.css";
import { Link} from 'react-router-dom';

const cards = [
  { id: 5, title: 'Ocean View Versova', Price: '₹ 1.1 - 2.4Cr' ,img:'asset/ovv.jpg',location:'Versova Road' },
  { id: 6, title: 'Nicco Residency', Price: '₹ 1.5 - 2.4Cr' ,img:'nr.webp',location:'Kranti Nagar' },
  { id: 7, title: 'Chandiwala perl ', Price: '₹ 1.7 - 2.8Cr' ,img:'cph.jfif',location:'Andheri East' },
  { id: 8, title: 'Gurukripa society', Price: '₹ 1.6 - 2.4Cr' ,img:'gvj.jpg',location:'Gulmohar Road ' },
];


const ResidenciesMumbai = () => {
  return (
    <>  <div className='headingmumbai'>
        <center><h2>Featured Properties in Mumbai</h2></center>
        </div>
        <div className='mcontainer' >  
      <div className='mumbaicontainer'>
      <button className='Flats'> Flats</button>
      <button className='Villas'>Villas</button>
      <button className='Commercial'>Commercial</button>

    </div>
    </div> 



<div className="rowm">
{cards.map((card) => (
         <a key={card.id} href={`/property/${card.id}`}>
            <div className="columnm ">
    <div className="cardm" >
    
    <img src= {card.img} alt="images" className="propm-img"/>
      <h4>{ card.title}</h4>
      <p> {card.location} </p>
      <p>1 2 3 BHK APARTMENTS</p>
      <h4>{card.Price}</h4>
    </div>
  </div>
            
          </a>
        ))}  

  
  
</div>


      
    </>
  )
}
export default ResidenciesMumbai
