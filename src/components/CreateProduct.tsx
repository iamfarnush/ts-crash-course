import React, { useState } from 'react'
import { IProduct } from '../models'
import axios from 'axios'
import Error from './Error'

const productData: IProduct = {
  title: "string",
  price: 0.1,
  description: "string",
  category: "string",
  image: "http://example.com",
  rating: {
    rate: 22,
    count: 10
  }
}

  interface CreateProductProps {
    onCreate: (product: IProduct) => void
  }


const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')


  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    console.log(value)

    setError('')


    if (value.trim().length === 0) {
        setError('Please enter valid title.')
        return
    }

    productData.title = value
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

    onCreate(response.data)
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter a title"
        className="w-full border py-2 px-4 mb-2"
        value={value}
        onChange={changeHandler}
      />

      {error && 
       <p className='text-center text-red-600'>Enter a title</p>
      }

      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400"
      >
        Create
      </button>
    </form>
  )
}

export default CreateProduct