import React from 'react'
import Button from '../Components/Button'
import Flag from '../assets/icons/flag.svg'

export default function ViaInputField() {
  return (
    <div className="flex">
      <img src={Flag} className="w-6" />
      <input type="text" placeholder="Drop Off - Location/Address" />
      <Button
        kind="primarySlim"
        caption="Via"
        customClasses="h-6 px-2 mt-1.5"
      />
    </div>
  )
}
