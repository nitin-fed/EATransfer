/** @format */

import React from 'react'
import BookingForm from './BookingForm'
import AboutUs from './AboutUs'
import Services from './Services'

import { Banner } from './Banner'

export const Body = () => {
  return (
    <>
      <div className="eatransfers">
        <div className="main bg-cover">
          <div
            className="lg:flex p-5"
            style={{ maxWidth: '1024px', margin: '0 auto' }}
          >
            <div className="md:w-full lg:w-2/3 mt-5 lg:mr-5">
              <Banner />
            </div>
            <div className="md:w-full lg:w-1/3 mt-5">
              <BookingForm />
            </div>
          </div>
        </div>
        <div
          className="eatransfersBody"
          style={{ maxWidth: '1024px', margin: '0 auto' }}
        >
          <AboutUs />
          <br /> <br />
          <Services />
          <br /> <br />
        </div>
      </div>
    </>
  )
}
