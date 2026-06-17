import React, { useEffect, useState } from 'react';

// import { products } from './data/data';
import axios, { AxiosError } from 'axios';
import { IProduct } from '../models';


export function useProducts() {
    
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetchProducts() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
            setProducts(response.data)
            console.log(response)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return {products, loading, error}
}