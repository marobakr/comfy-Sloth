'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import GridView from './GridView'
import ListView from './ListView'
import Sort from './sort'
import { data } from 'autoprefixer'

const ProductList = (props) => {
  // const {}
  console.log(props.gridOrList)
  const api_url = 'https://www.course-api.com/react-store-products'
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
  return (
    <div
      className={`${
        props.gridOrList === 'GridView' ? 'our_card_row' : 'our_card'
      }`}
    >
      {products.map((product) => {
        return (
          <>
            {props.gridOrList === 'GridView' ? (
              <GridView product={product} />
            ) : (
              <ListView product={product} />
            )}
          </>
        )
      })}
    </div>
  )
}

export default ProductList
/* 
  ----old method
  'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import GridView from './GridView'
import ListView from './ListView'
import Sort from './sort'
const ProductList = () => {
  return (
    <>
      <GridView />
    </>
  )
}

export default ProductList

*/
