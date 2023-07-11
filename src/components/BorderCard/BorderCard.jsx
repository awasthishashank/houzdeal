import React from 'react'
import './BorderCard.css'

const BorderCard = () => {
  return (
    <div id='loan'>
      <div className='BorderLoan'>
        <div className='BorderLoantext'>
          <h2>Need a secured loan?</h2>

          <p> Affordable housing loan with a hassle-free documentation process and easy EMI's options .</p>

          <p>Get Loan amount upto 85-90% of property value</p>

          <p>Get cashback on loan processing fee ,upto 5000rs</p>

          <p>Associated with more than 25 leading bank</p>

          <button>
          <a href="mailto: awasthishashank183@gmail.com"> Explore Offers </a> </button>

        </div>
        <div className='BorderLoanimage'>
          <img src="src/components/BorderCard/bajaj finserv.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default BorderCard
