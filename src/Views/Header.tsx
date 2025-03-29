/** @format */

import React from 'react'
import { Menu } from './Menu'

export const Header = () => {
  const blurBackgroundEAT =
    'sticky top-0 z-40  backdrop-blur flex-none transition-colors duration-500 lg:z-50   supports-backdrop-blur:bg-green/40'

  return (
    <>
      <header className={blurBackgroundEAT}>
        <div className="flex   p-5">
          <div className="flex grow">
            <h2 className="pageTitle text-4xl px-8 sm:px-8 md:px-0 bg-nitin-100">
              EA Transfers
            </h2>
          </div>
          <div className="flex flex-none text-right">
            <Menu />
          </div>
        </div>
      </header>
    </>
  )
}
