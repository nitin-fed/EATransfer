import React, { FC } from 'react'

const COMMON_STYLES = 'px-4 py-2 rounded-lg transition duration-300 '

interface Iprops {
  kind: string
  caption: string
  customClasses: string
}
const Button: FC<Iprops> = ({ kind, caption, customClasses = '' }) => {
  return (
    <>
      <button className={`${customClasses} ${classes(kind)}`}>{caption}</button>
    </>
  )
}

const classes = (kind: string) => {
  switch (kind) {
    case 'primary':
      return `${COMMON_STYLES} bg-blue-900 hover:bg-blue-600 text-white`

    case 'secondary':
      return `${COMMON_STYLES} bg-zinc-700 hover:bg-zinc-500 text-white`

    case 'primarySlim':
      return ` bg-blue-900 hover:bg-blue-600 text-white rounded-lg transition duration-300 `

    default:
      break
  }
}
export default Button

// background-color: gray;
//   border: 1px solid rgb(48, 47, 47);
//   margin: 5px;
//   border-radius: 8px;
//   padding: 0 10px;
//   color: white;
