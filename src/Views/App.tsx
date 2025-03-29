// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Body } from './Body'
import { Header } from './Header'
import { Footer } from './Footer'
import Button from '../Components/Button'

// import '../assets/css/styles_default.css'
// import '../assets/css/tailwind_output.css'

function App() {
  const toggleTheme = () => {
    const htmlElement = document.documentElement
    const currentTheme = htmlElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    htmlElement.setAttribute('data-theme', newTheme)
  }

  // Example: Attach toggleTheme to a button click event

  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <button
        style={{ position: 'absolute', zIndex: 999 }}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button> */}
      <Header />

      <Body />
      <Footer />
    </>
  )
}

export default App
