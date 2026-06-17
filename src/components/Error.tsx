import React from 'react'
import { useProducts } from '../hooks/products'

const Error = () => {

    const {error} = useProducts();
    
  return (
    <div>
        <p className='text-center text-red-600'>{ error }</p>
    </div>
  )
}

export default Error