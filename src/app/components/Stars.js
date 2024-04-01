'use client'
import React from 'react'
import styled from 'styled-components'
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp'
import StarHalfSharpIcon from '@mui/icons-material/StarHalfSharp'
import StarBorderSharpIcon from '@mui/icons-material/StarBorderSharp'
const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars > number ? (
          <StarPurple500SharpIcon />
        ) : stars > index ? (
          <StarHalfSharpIcon />
        ) : (
          <StarBorderSharpIcon />
        )}
      </span>
    )
  })
  return (
    <div className='vote'>
      <div className='stars'>{tempStars}</div>
      <p>({reviews} customer reviews)</p>
    </div>
  )
}
export default Stars
