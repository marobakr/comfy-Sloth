import { formatPrice } from '../../../utils/helpers'
import ProductImages from '../../components/ProductImages'
import Stars from '@/app/components/Stars'
import AddToCart from '@/app/cart/page'
import PageHero from '@/app/components/pagehero'
export default async function fetchSingleProducts({ params }) {
  const postid = params.postid

  const response = await fetch(
    `https://course-api.com/react-store-single-product?id=${postid}`,
    {
      next: {
        revalidate: 120,
      },
    }
  )
  const product = await response.json()
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product
  return (
    <>
      {/* //! محتاج افهمها من احمد يونس عشان مش فاهمها */}
      <PageHero title={name} product />
      <div className='single_padge'>
        <div className='container'>
          <ProductImages images={images} />
          <div className='our_info_cadr' key={sku}>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='lorem'>{description}</p>
            <div className='some_info'>
              <div className='I'>
                <span>Available :</span>
                <p> {stock > 0 ? 'In stock' : 'out of stock'}</p>
              </div>
              <div className='I'>
                <span>SKU :</span>
                <p> {sku}</p>
              </div>
              <div className='I'>
                <span>Brand :</span>
                <p> {company}</p>
              </div>
            </div>
            <hr className='line' />
            {/* <div className='selected_attintion'>
            <div className='select_color'>
              <p>colors :</p>
              <div className='spanes'>
                <button
                  className={`${activeBtn === 'defultBtn' ? 'activeBtn' : ''}`}
                >
                  {activeBtn === 'defultBtn' ? (
                    <i className='icon'>
                      <GrFormCheckmark />
                    </i>
                  ) : (
                    ''
                  )}
                </button>
              </div>
            </div>
            <div className='number_of_your_product'>
              <div className='count'>
                <button>
                  <HiMinusSm onClick={() => decrease()} />
                </button>
                <h2>{countOfProduct}</h2>
                <button onClick={() => Increase()}>
                  <HiPlusSm />
                </button>
              </div>
              <Link to='/cart'>
                <button className='add_to_cart'>ADD TO CART</button>
              </Link>{' '}
            </div>
          </div> */}
            {/* {stock > 0 && <AddToCart product={product} />} */}
          </div>
        </div>
      </div>
    </>
  )
}
