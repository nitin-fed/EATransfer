import React, { useEffect, useState } from 'react'

export const Menu = () => {
  const [menu, setMenu] = useState()

  useEffect(() => {
    setMenu(document.getElementById('menu'))
  }, [])

  function openMenu() {
    menu?.classList.add('open')
  }

  function closeMenu() {
    menu?.classList.remove('open')
  }

  function listClickHandler(e) {
    if (e.target.tagName.toLowerCase() == 'a') {
      closeMenu()
    }
  }
  return (
    <>
      <nav className="nav">
        <button className="menu-toggle" onClick={() => openMenu()}>
          &#9776;
        </button>
        <div className="menu" id="menu">
          <button className="close-btn md:hidden" onClick={() => closeMenu()}>
            ✕
          </button>
          <ul
            className="bg-gray-100 md:bg-transparent mt-10 text-left  md:mt-0 h-dvh md:h-auto"
            onClick={listClickHandler}
          >
            <li className="active">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#review">Review</a>
            </li>
            <li>
              <a href="#contactus">Contact Us</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
