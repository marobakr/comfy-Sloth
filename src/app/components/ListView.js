'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search'
// import styled from 'styled-components'
import { formatPrice } from '@/utils/helpers'
const ListView = (props) => {
  const { product } = props
  const { id, image, name, price, description } = product
  if (id % 2 !== 0) {
    return (
      <div key={id} style={{ width: '100%' }} data-aos='zoom-in-down'>
        <div className='card' key={id}>
          <Link href={`/products/${id}`}>
            <div className='img'>
              <img src={image} alt='' />
              <div className='icnos'>
                <SearchIcon />
              </div>
            </div>
          </Link>
          <div className='title__info'>
            <p>{name}</p>
            <p className='price_row'>{formatPrice(price)}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ListView
/* 
---------- old method
'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import SearchIcon from '@mui/icons-material/Search'
// import styled from 'styled-components'
import { formatPrice } from '@/utils/helpers'
import { fetchProducts } from './api/api'
const ListView = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchData() {
      const data = await fetchProducts()
      setProducts(data)
    }

    fetchData()
  }, [])

  return (
    <div className='our_card'>
      {products.map((product) => {
        const { id, image, name, price } = product
        if (id % 2 !== 0) {
          return (
            <div key={id} style={{ width: '100%' }} data-aos='zoom-in-down'>
              <div className='card' key={id}>
                <Link href={`/products/${id}`}>
                  <div className='img'>
                    <img src={image} alt='' />
                    <div className='icnos'>
                      <SearchIcon />
                    </div>
                  </div>
                </Link>
                <div className='title__info'>
                  <p>{name}</p>
                  <p className='price_row'>{formatPrice(price)}</p>
                </div>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}
export default ListView

*/
