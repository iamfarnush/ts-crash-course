import React, { useState } from 'react'
import { IProduct } from '../models'

interface ProductProps {
  product: IProduct
}

const Product = ({product}: ProductProps) => {

  const [show, setShow] = useState(false)


  return (
    <div className='border py-4 px-4 flex flex-col items-center'>
      <img src={product.image} className='w-1/6' alt="" />
      {product.title}
      <p className='font-bold'>{product.price}</p>
      <button className={show ? 'bg-blue-400 px-2 py-2 text-white' : 'bg-yellow-400 px-2 py-2 text-white'} onClick={() => setShow(prev => !prev)}>
        {show ? 'Hide Dedails' : "Show Dedails"} 
      </button>

{
  show && 
        <div>
        <p>{product.description}</p>
      </div>
}
    </div>
  )
}

export default Product