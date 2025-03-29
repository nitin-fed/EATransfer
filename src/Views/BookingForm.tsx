/** @format */

import React from 'react'
import Map from '../assets/icons/map.svg'
import Calender from '../assets/icons/calender.svg'
import Clock from '../assets/icons/clock.svg'
import Numbers from '../assets/icons/numbers.svg'
import Button from '../Components/Button'
import ViaInputField from './ViaInputField'

export default function BookingForm() {
  return (
    <>
      <div className="tabsContainer ">
        <form action="submit">
          <div>
            <div className="flex px-3 gap-4">
              <button className="tabs activeTab">Transfer</button>
              <button className=" tabs inActiveTab">Hourly</button>
            </div>
          </div>

          <div className="transferFormComponents">
            <div className="flex">
              <img src={Map} className="w-6" />
              <input type="text" placeholder="Pick Up - Location/Address" />
            </div>
            <ViaInputField />
            <ViaInputField />

            {/* <div className="flex">
              <img src={Flag} className="w-6" />
              <input type="text" placeholder="Drop Off - Location/Address" />
              <Button
                kind="primarySlim"
                caption="Via"
                customClasses="h-6 px-2 mt-1.5"
              />
            </div> */}
            <div className="flex">
              <img src={Calender} className="w-6" />
              <input type="text" placeholder="Date" />
            </div>
            <span className="flex">
              <div className="flex" style={{ margin: '2px 10px' }}>
                <img src={Clock} className="w-6" />
                <input type="text" placeholder="HH" />
              </div>

              <div className="flex" style={{ margin: '2px 10px' }}>
                <img src={Clock} className="w-6" />
                <input type="text" placeholder="MM" />
              </div>
            </span>
            <div className="flex">
              <img src={Numbers} className="w-6" />
              <input type="text" placeholder="No. of Passengers" />
            </div>
            <div className="buttonBox">
              <Button kind="secondary" caption="Reset" />
              &nbsp;&nbsp;
              <Button kind="primary" caption="Submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
