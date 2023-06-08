import Link from 'next/link'
import React from 'react'

export const OutlineButton = ({title,href="",  additionalClass}) => {
  return (
    <Link href={href}>
      <button className={`border-2 border-[#E8A902] hover:bg-pry hover:text-white px-8 py-1 text-pry ${additionalClass}`}>
        {title}
      </button>   
    </Link>

  )
}
export const SolidButton = ({href = "", onClick, title, additionalClass}) => {
  return (
  <Link href={href}>
      <button onClick={onClick} className={`bg-pry  px-8 py-1 text-white ${additionalClass}`}>
        {title}
      </button>
  </Link>
  )
}
