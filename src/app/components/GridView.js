'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { fetchProducts } from './api/api'
import { formatPrice } from '@/utils/helpers'
import SearchIcon from '@mui/icons-material/Search'

const GridView = (props) => {
  const { product } = props
  const { id, image, name, price, description } = product
  if (id % 2 !== 0) {
    return (
      <div
        className='our_card_row'
        key={id}
        data-aos='fade-down'
        data-aos-easing='linear'
        data-aos-duration='800'
      >
        <div className='card_row' key={id}>
          <Link href={`/products/${id}`}>
            <div className='img_row'>
              <img src={image} alt='' />
              <div className='icnos_row'>
                <SearchIcon style={{ color: '#ffff' }} />
              </div>
            </div>
          </Link>
          <div className='title__info_row'>
            <h4>{name}</h4>
            <p className='price_row'>{formatPrice(price)}</p>
            <p className='lorem_row'>{description.substring(0, 180)}...</p>
            <Link href={`/products/${id}`}>
              <button>details</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default GridView
/* 
'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { fetchProducts } from './api/api'
import { formatPrice } from '@/utils/helpers'
import SearchIcon from '@mui/icons-material/Search'

const GridView = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchData() {
      const data = await fetchProducts()
      setProducts(data)
    }

    fetchData()
  }, [])
  return (
    <div className='our_card_row'>
      {products.map((product) => {
        const { id, image, name, price, description } = product
        if (id % 2 !== 0) {
          return (
            <div
              key={id}
              data-aos='fade-down'
              data-aos-easing='linear'
              data-aos-duration='800'
            >
              <div className='card_row' key={id}>
                <Link href={`/products/${id}`}>
                  <div className='img_row'>
                    <img src={image} alt='' />
                    <div className='icnos_row'>
                      <SearchIcon style={{ color: '#ffff' }} />
                    </div>
                  </div>
                </Link>
                <div className='title__info_row'>
                  <h4>{name}</h4>
                  <p className='price_row'>{formatPrice(price)}</p>
                  <p className='lorem_row'>
                    {description.substring(0, 180)}...
                  </p>
                  <Link href={`/products/${id}`}>
                    <button>details</button>
                  </Link>
                </div>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default GridView

*/
