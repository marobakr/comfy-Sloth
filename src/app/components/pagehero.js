import React from 'react'
import Link from 'next/link'
//! محتاج افهمها من احمد يونس عشان مش فاهمها
const PageHero = ({ product, title }) => {
  return (
    <div className='pagehero'>
      <div className='container'>
        <h3>
          <Link href='/'>Home</Link>
          {product && <Link href='/products'>/ Products</Link>} / {title}
        </h3>
      </div>
    </div>
  )
}

export default PageHero
