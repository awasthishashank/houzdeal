import React from 'react'
import "./ResidenciesPune.css"
import { Link} from 'react-router-dom';


const cards = [
  { id: 1, title: 'Nayati Equinox', Price: '₹ 2.1 - 2.4Cr' ,img:'NE.jpg',location:'Bavdhan, Pune' },
  { id: 2, title: 'Shree Sai Fortune', Price: '₹ 1.4 - 2.4Cr' ,img:'ssf.webp',location:'Moshi, Pune' },
  { id: 3, title: 'Subh Nirvana', Price: '₹ 1.2 - 2.4Cr' ,img:'sn.jpg',location:'Viman Nagar, Pune' },
  { id: 4, title: 'Lotus Urban Home', Price: '₹ 1.8 - 2.4Cr' ,img:'luh.jfif',location:'Charholi, Pune ' },
];



const ResidenciesPune = ({handleclick}) => {
  return (
    <>
     <div className='puneheading'>
     <center><h2>Featured Properties in Pune</h2></center>
      </div>
    <div className='pcontainer' >
    <div className='punecontainer'>
      
      <button className='Flats'> Flats</button>
      <button className='Villas'>Villas</button>
      <button className='Commercial'>Commercial</button>
    

    </div>
    </div>


  <div className="rowp">
  {cards.map((card) => (
          
            <a key={card.id} href={`/property/${card.id}`}>
            <div className="column ">
    <div className="cardp" >
    
    <img src= {card.img} alt="images" className="prop-img"/>
      <h4>{ card.title}</h4>
      <p> {card.location}</p>
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

export default ResidenciesPune



