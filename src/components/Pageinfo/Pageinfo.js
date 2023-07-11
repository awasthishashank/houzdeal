import React from 'react'
import { useParams } from 'react-router-dom';
import './Pageinfo.css'
import ContactForm from './contact';


const Pageinfo = () => {
  const { id } = useParams();

  const cardContent = {
    1: { id: 1, title: 'Nayati Equinox', Price: '₹2.1-2.4Cr', location: 'Bavdhan, Pune' },
    2: { id: 2, title: 'Shree Sai Fortune', Price: '₹1.4-2.4Cr', location: 'Moshi, Pune' },
    3: { id: 3, title: 'Subh Nirvana', Price: '₹1.2-2.4Cr', location: 'Viman Nagar, Pune' },
    4: { id: 4, title: 'Lotus Urban Home', Price: '₹1.8-2.4Cr', location: 'Charholi, Pune ' },
    5: { id: 5, title: 'Ocean View Versova', Price: '₹1.1-2.4Cr', img: 'asset/ovv.jpg', location: 'Versova Road' },
    6: { id: 6, title: 'Nicco Residency', Price: '₹1.5-2.4Cr', img: 'nr.webp', location: 'Kranti Nagar' },
    7: { id: 7, title: 'Chandiwala perl ', Price: '₹1.7-2.8Cr', img: 'cph.jfif', location: 'Andheri East' },
    8: { id: 8, title: 'Gurukripa society', Price: '₹1.6-2.4Cr', img: 'gvj.jpg', location: 'Gulmohar Road ' },
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
            
            <td className='col-8 threeimage'><img className='img-fluid rounded' src="../interior.webp" alt='interior' /></td>
            <td className='col-4 m-2 twoimage'>
              <tr><td className=''><img className='img-fluid rounded' src="../interior2.jpg" alt='interior' /></td></tr>
              <tr><td className=''><img className='img-fluid rounded' src="../interior2.jpg" alt='interior' /></td></tr>
            </td>
          </tr>
        </table>


        <div className='container subdetail'>
          <div className='sds'><h4>1, 2, 3 BHK Apartments</h4>
            <p>Specifications</p></div>
          <div className='sds'><h4>July,2023</h4>
            <p>Possession</p></div>
          <div className='sds'><h4>₹2k/sq-ft</h4>
            <p>Avg. Price</p></div>
          <div className='sds'><h4>895 sq.ft- 1200sq.ft</h4>
            <p>Carpet Area Sizes</p></div>

        </div>
        <div className='container pagelink'>
          <div className='pglinks'>
            <a href="#Overview"><h6>Overview</h6></a></div>
          <div className='pglinks'>
            <a href="#about-project"><h6>About Project</h6></a></div>
          <div className='pglinks'>
            <a href="#FloorPlan"><h6>Floor plan</h6></a></div>
          <div className='pglinks'>
            <a href="#Amenities"><h6>Amenities</h6></a></div>
          <div className='pglinks'>
            <a href="#brochure"><h6>Brochure</h6></a></div>
          <div className='pglinks'>
            <a href="#about-developer"><h6>About Developer</h6></a></div>


        </div>

      </div>


      <div className='container mt-4'>
        <div className='row'>
            <div className='col-8'>
            <section id="Overview">  
              <div className='overview'>
                <h3><b>Overview</b></h3>
                <hr></hr>
                <div className='ovrow'>
                  <div className='ovcol'><h5>Project Area</h5>
                    <h6>  2.01Acres</h6></div>
                  <div className='ovcol'><h5>Possession</h5>
                    <h6>  May, 2023</h6></div>
                  <div className='ovcol'><h5>Specification</h5>
                    <h6> 1, 2, 3 BHK Apartments</h6></div>
                </div>
                <div className='ovrow'>
                  <div className='ovcol'><h5>Project Size</h5>
                    <h6> building- 200 units </h6> </div>
                  <div className='ovcol'><h5>Carpet Area Sizes</h5>
                    <h6>2 building- 200 units</h6></div>
                  <div className='ovcol'><h5> Reference Id</h5>
                    <h6>23456789</h6></div>
                </div>
                <div className='ovrow'>
                  <div className='ovcol'><h5> Reference Id</h5>
                    <h6>23456789</h6></div>
                  <div className='ovcol'><h5>Avg. Price</h5>
                    <h6>₹2k/sq-ft</h6></div>
                  <div className='ovcol'></div>
                </div>


              </div>
          </section>


          <section id="about-project">
            <div className=' Aboutproject mt-5'>
              <h4><b>About  Project</b></h4>
              <hr></hr>
              <p>We are developing luxurious apartments in a prime location. With meticulous planning and architectural brilliance, We offers state-of-the-art amenities and stylish living spaces. We seamlessly integrates modern design elements with eco-friendly features, creating a sustainable and vibrant community. Residents can enjoy stunning views, lush green spaces, and convenient access to nearby amenities. Our company  sets a new standard for contemporary living, providing an exceptional lifestyle for discerning buyers.</p>
              <p>Each listing is accompanied by detailed property information, including high-resolution images, floor plans, amenities, and comprehensive descriptions. We prioritize transparency and accuracy, ensuring that you have all the necessary information to make an informed decision.

                For sellers, we offer a seamless process to list and showcase your property to a wide audience of potential buyers. Our platform utilizes effective marketing strategies, reaching interested buyers through various channels to maximize exposure and increase the chances of a successful sale.</p>

            </div>
          </section>

          <section id="FloorPlan">
            <div className=' Aboutproject mt-5 '>
              <div className='FloorPlan'>
                <h4><b>Floor Plan</b></h4>
                <hr></hr>
                <div className='Floorcontainer'>
                  <button className='THREEBHK'> 3bhk</button>
                  <button className='TWOBHK'>2bhk</button>
                  <button className='ONEBHK'>1bhk</button>

                </div>
                <hr className='fphr'></hr>
                <div className='floor-img '>
                  <img src='../FLOORPLAN.png' className='img-floor' alt='interior' />
                </div>
              </div>
            </div>
          </section>


          <section id="Amenities">
            <div className=' Aboutproject mt-5'>
              <h4><b>Amenities</b></h4>
              <hr></hr>
              <img className='img-fluid' src="../amenties.png"></img>
            </div>
          </section>

          <section id="brochure">
            <div className=' Aboutproject mt-5 '>
              <div className='FloorPlan'>
                <h4><b>Brochure</b></h4>
                <hr></hr>
                <div className='brochure-img '>
                  <img src='../b1.png'  alt='brochure' width={230}/>
                  <a href="#" className="b-button">View Brochure</a>
                
                  <img src='../b2.png' alt='interior' width={230}/>
                  <img src='../b2.png' alt='interior' width={230}/>
                  </div>
                
              </div>
            </div>
          </section>


          <section id="about-developer">
            <div className=' Aboutdeveloper mt-5'>

              <h4><b>About Developer</b></h4>
              <hr></hr>
              <p>We Are constructing high-quality residential and commercial properties, with a focus on innovation and sustainability,We strive to create modern and functional spaces that meet the needs of their clients. Our expert team of architects, engineers, and designers collaborates to deliver projects that exceed expectations. From concept to completion, We are committed to providing exceptional craftsmanship, attention to detail, and superior customer service, ensuring client satisfaction and making dreams come true.</p>
              <p>Embrace the opportunity to be part of our visionary developments, where thoughtful design and impeccable execution come together to redefine the notion of modern living. Experience the difference with our real estate developer as we continue to shape communities that stand the test of time.</p>
            </div>
          </section>
        </div>
          <div className='col-4'>
          <ContactForm />
          </div>
      </div>
      </div>

    </>

  )
}

export default Pageinfo

