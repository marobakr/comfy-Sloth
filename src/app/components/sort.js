'use client'
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import AppsIcon from '@mui/icons-material/Apps'
import MenuIcon from '@mui/icons-material/Menu'
const Sort = () => {
  const [isGrid, setIsGrid] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const stateButton = useRef(null)
  if (stateButton.current) {
    const classNameValue = stateButton.current.className
  }

  return (
    <div className='frist_line_section'>
      <div className='icons'>
        <Link
          href={{
            query: {
              name: 'GridView',
            },
          }}
        >
          <button
            ref={stateButton}
            className={`${isGrid ? 'active_button' : 'notactive'}`}
            onClick={() => setIsGrid(true)}
          >
            <AppsIcon />
          </button>
        </Link>
        <Link
          href={{
            query: {
              name: 'ListView',
            },
          }}
        >
          <button
            className={`${isGrid ? 'notactive' : 'active_button'}`}
            onClick={() => setIsGrid(false)}
          >
            <MenuIcon />
          </button>
        </Link>
      </div>
      <div className='title'> products found</div>
      <span></span>
      <div className='sortby'>
        <p>sort by</p>
        <select
          // ref={OptionValue}
          // value={selectedClient}
          // onChange={() => SelectOptionBox()}
          name='sort'
          id='sortCompany'
        >
          <option value='lowest'>price (lowest)</option>
          <option value='highest'>price (highest)</option>
          <option value='az'>Name (A-Z)</option>
          <option value='za'>Name (Z-A)</option>
        </select>
      </div>
    </div>
  )
}

export default Sort
