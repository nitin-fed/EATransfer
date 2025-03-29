import React from 'react'

import Phone from '../assets/icons/phone.svg'
import Email from '../assets/icons/email.svg'

export const Banner = () => {
  return (
    <div className="banner">
      <div className="phoneBox sm:w-full lg:w-fit">
        <div className="md:flex">
          <div className="flex">
            <img src={Phone} className="w-6 text-xl" /> &nbsp; +442080049002
            &nbsp;
          </div>
          <div className="flex">
            <img src={Email} className="w-6 " /> &nbsp; info@eatransfers.com
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <div className="md:block lg:block ">
          <span className="p1">Fast</span>
          <span className="p2"> Convenient</span>

          <div className="row2">
            <span className="p2">Everywhere</span>
            <span className="p1"> Anytime</span>
          </div>
          <br />
          <div className="quote">
            Ride with ease, arrive with style. Order taxi on the go
          </div>
        </div>
      </div>
    </div>
  )
}
