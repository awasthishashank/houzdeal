
import './contact.css'

const ContactForm = () => {
  

  return (

    
   
      
      <div className='wrap-login100'>
            <h4><b>Contact Seller</b></h4>
          <hr/>
      
      <form className="login100-form validate-form">
        
        
                <div className="wrap-input100 validate-input">
                    <input className="input100" type="text" name="Name"/>
                    <span className="focus-input100" data-placeholder="Name"></span>
                </div>

                <div className="wrap-input100 validate-input" >
                    <input className="input100" type=" Number" name="Phone Number"/>
                    <span className="focus-input100" data-placeholder="Phone Number"></span>
                </div>

                <div className="wrap-input100 validate-input" >
                    <input className="input100" type=" email" name="Email"/>
                    <span className="focus-input100" data-placeholder="Email"></span>
                </div>
                <div className='containercheck'>
          <input 
            type="checkbox"
          />
          <label className='checkbox' htmlFor="agree">I agree to be contacted by Housing and other agents via WhatsApp, SMS, phone, email etc.
</label>
        </div>


                <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                        <div className="login100-form-bgbtn"></div>
                        <button type="submit" className="login100-form-btn">Get Contact Details</button>
                    </div>
                </div>

                
            </form>
          
            

    </div>
  );
};

export default ContactForm;
