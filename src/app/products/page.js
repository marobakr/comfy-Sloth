'use client'
import React from 'react'
import ProductList from '@/app/components/productlist'
import Filters from '../components/filters'
import Sort from '../components/sort'
import PageHero from '../components/pagehero'
import ListView from '../components/ListView'
import GridView from '../components/GridView'
const ProductsPage = ({ searchParams }) => {
  return (
    <main>
      <PageHero title='Products' />
      <div className='product'>
        <div className='container'>
          <Filters />
          <div className='right_card_product'>
            <Sort />
            <ProductList gridOrList={searchParams.name} />
            {/* {searchParams.name === 'GridView' ? <GridView /> : <ListView />} */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductsPage
