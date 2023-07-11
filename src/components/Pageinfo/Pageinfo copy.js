import React from 'react'
import { useParams } from 'react-router-dom';
import './Pageinfo.css'
import interior1 from 'C:/Users/AC/houzdeal/public/interior.webp'

const Pageinfo = () => {
  const { id } = useParams();

  const cardContent = {
    1:  { id: 1, title: 'Nayati Equinox', Price: '₹2.1-2.4Cr' ,location:'Bavdhan, Pune',img1:'interior.web' ,img2:'interior2.jpg',img:'interior3.JPG'},
    2: { id: 2, title: 'Shree Sai Fortune', Price: '₹1.4-2.4Cr',location:'Moshi, Pune' ,img1:'interior.webp' ,img2:'interior2.jpg',img:'interior3.JPG'},
    3: { id: 3, title: 'Subh Nirvana', Price: '₹1.2-2.4Cr' ,location:'Viman Nagar, Pune' ,img1:'interior.webp' ,img2:'interior2.jpg',img:'interior3.JPG'},
    4: { id: 4, title: 'Lotus Urban Home', Price: '₹1.8-2.4Cr' ,location:'Charholi, Pune ',img1:'interior.webp' ,img2:'interior2.jpg',img:'interior3.JPG' },
  };
  const content = cardContent[id];
  return (
    <>
    <div className='Property_info'>
      <span>
      <h4> {content.title}</h4>
      <h5> {content.location}</h5>
      </span>
      <span>
       <h4>{content.Price}</h4>
      </span>
      </div>
      <div className='interior-img'>
        <table className='table-img'>
          <tr>
            <td className='col-8'><img className='img-fluid rounded' src ={interior1} alt='interior'/></td>
            <td  className='col-8 m-2'>
              <tr><td className=''><img className='img-fluid rounded'src= {content.img2}alt='interior'/></td></tr>
              <tr><td className=''><img className='img-fluid rounded'src={content.img3} alt='interior'/></td></tr>
            </td>
          </tr>
        </table>
      </div>
  

      <div className='subdetails'>
        <table className='table-sd'>
          <tr>
            <td><h4>1, 2, 3 BHK Apartments</h4>
            <p>Specifications</p>
            </td>
            <td><h4>July,2023</h4>
            <p>Possession</p></td>
            <td><h4>₹2k/sq-ft</h4>
            <p>Avg. Price</p></td>
            <td><h4>895 sq.ft- 1200sq.ft</h4>
            <p>Carpet Area Sizes</p></td>
          </tr>
        </table>
      </div>
      <div className='optionlink'>
        <table className='table-sd'>
          <tr>
            <td><a href="#Overview"><h6>Overview</h6></a></td>
            <td><a href ="#about-project"><h6>About Project</h6></a></td>
            <td><a href="#FloorPlan"><h6>Floor plan</h6> </a></td>
            <td><a href="#Amenities"> <h6>Amenities</h6></a></td>
            <td> <a href="#about-developer"> <h6>About Developer</h6></a></td>
          </tr>
            
        </table>

      </div>

      <div className='container mt-4'>
        <div className='row'>
          <section id = "Overview">
          <div className='col overview'>
            <h3><b>Overview</b></h3>
            <hr></hr>

            <div class="table-container">
  <table class="table">
    <tr>
      <td><h5>Project Area</h5>
      <h6>  2.01Acres</h6></td>
      <td><h5>Possession</h5>
      <h6>  May, 2023</h6></td>
      <td><h5>Specification</h5>
      <h6> 1, 2, 3 BHK Apartments</h6></td>
    </tr>
    <tr>
      <td><h5>Project Size</h5>
      <h6> building- 200 units </h6> </td>
      <td><h5>Launch Date</h5>
       <h6>Aug, 2023</h6></td>
      <td><h5>Carpet Area Sizes</h5>
      <h6>2 building- 200 units</h6></td>
    </tr>
    <tr>
      <td><h5> Reference Id</h5>
       <h6>23456789</h6></td>
      <td><h5>Avg. Price</h5>
      <h6>  ₹2k/sq-ft</h6></td>
      <td></td>
    </tr>
  </table>
</div>
            </div>
</section>


    <section id="about-project">
    <div className='col Aboutproject mt-5'>
      <h4><b>About  Project</b></h4>
      <hr></hr>
      <p>We are developing luxurious apartments in a prime location. With meticulous planning and architectural brilliance, We offers state-of-the-art amenities and stylish living spaces. We seamlessly integrates modern design elements with eco-friendly features, creating a sustainable and vibrant community. Residents can enjoy stunning views, lush green spaces, and convenient access to nearby amenities. Our company  sets a new standard for contemporary living, providing an exceptional lifestyle for discerning buyers.</p>
      <p>Each listing is accompanied by detailed property information, including high-resolution images, floor plans, amenities, and comprehensive descriptions. We prioritize transparency and accuracy, ensuring that you have all the necessary information to make an informed decision.

For sellers, we offer a seamless process to list and showcase your property to a wide audience of potential buyers. Our platform utilizes effective marketing strategies, reaching interested buyers through various channels to maximize exposure and increase the chances of a successful sale.</p>

    </div>
    </section>

    <section id = "FloorPlan">
    <div className='col Aboutproject mt-5 '>
    <div className='FloorPlan'>
    <h4><b>Floor Plan</b></h4>
    <hr></hr>
    <div className='Floorcontainer'>
     <button className='THREEBHK'> 3bhk</button>
      <button className='TWOBHK'>2bhk</button>
      <button className='ONEBHK'>1bhk</button>
    
    </div>
      <hr></hr>
    <div className='floor-img '>
    <img src='FLOORPLAN.png' className='img-floor' alt='interior'/>
    </div>
    </div>
    </div>
    </section>

    
     <section id ="Amenities">
      <div className='col Aboutproject mt-5'>
      <h4><b>Amenities</b></h4>
      <hr></hr>
      <img className='img-fluid' src="amenties.png"></img>
    </div>
    </section>

    <section id = "about-developer">
    <div className='col Aboutdeveloper mt-5'>

      <h4><b>About Developer</b></h4>
      <hr></hr>
      <p>We Are constructing high-quality residential and commercial properties, with a focus on innovation and sustainability,We strive to create modern and functional spaces that meet the needs of their clients. Our expert team of architects, engineers, and designers collaborates to deliver projects that exceed expectations. From concept to completion, We are committed to providing exceptional craftsmanship, attention to detail, and superior customer service, ensuring client satisfaction and making dreams come true.</p>
      <p>Embrace the opportunity to be part of our visionary developments, where thoughtful design and impeccable execution come together to redefine the notion of modern living. Experience the difference with our real estate developer as we continue to shape communities that stand the test of time.</p>
    </div>
    </section>
          </div>
        </div>

    </>

  )
}

export default Pageinfo

