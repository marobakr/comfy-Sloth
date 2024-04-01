import React from 'react'

const filters = () => {
  return (
    <div className='left_card_category'>
      <input
        style={{ textTransform: 'lowercase' }}
        type='search'
        placeholder='Search'
        // value={valueText}
        // ref={defultTextSearch}
        // onInput={handleOnChangeSearch}
      />
      <div className='our_category'>
        <h4>Category</h4>
        <div className='our_button'>
          <button
          // className={`${active === 'defult' ? 'active' : null}`}
          // onClick={() => All()}
          >
            all
          </button>
          <button
          // className={`${active === 'office' ? 'active' : null}`}
          // onClick={() => Office()}
          >
            office
          </button>
          <button
          // className={`${active === 'living-room' ? 'active' : null}`}
          // onClick={() => LivingRoom()}
          >
            living room
          </button>
          <button
          // className={`${active === 'kitchen' ? 'active' : null}`}
          // onClick={() => Kitchen()}
          >
            kitchen
          </button>
          <button
          // className={`${active === 'bedroom' ? 'active' : null}`}
          // onClick={() => Bedroom()}
          >
            bedroom
          </button>
          <button
          // className={`${active === 'dining' ? 'active' : null}`}
          // onClick={() => Dining()}
          >
            dining
          </button>
          <button
          // className={`${active === 'kids' ? 'active' : null}`}
          // onClick={() => Kids()}
          >
            kids
          </button>
        </div>
      </div>
      <div className='our_company'>
        <h4>company</h4>
        <select
          // ref={BrandValue}
          // value={brand}
          // onChange={UpdateState}
          // onClick={() => SelectBrandBox()}
          name='company'
          id='company'
        >
          <option value='all'>all</option>
          <option value='marcos'>marcos</option>
          <option value='lidy'>lidy</option>
          <option value='ikea'>ikea</option>
          <option value='careesa'>careesa</option>
        </select>
      </div>
      <div className='our_colors'>
        <h4>color</h4>
        <div className='colors'>
          <button>all</button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='our_price'>
        <h4>price</h4>
        {/* <p>$ {input}</p> */}
        <input
          min={0}
          max={3099}
          type='range'
          // value={input}
          // ref={defultValueInput}
          // onInput={() => Change()}
          // onInput={() => handleOnChangeInput()}
          step='1'
        />
      </div>
      <div className='selcet'>
        <label htmlFor='title'>free shipping</label>
        <input
          // onChange={() => handleClick()}
          id='title'
          className='checkbox'
          type='checkbox'
          // checked={!checked}
        />
      </div>
      <div className='clear'>
        <button>clear filters</button>
      </div>
    </div>
  )
}

export default filters
