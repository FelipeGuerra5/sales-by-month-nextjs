'use client'

import styles from './page.module.css'
import Filters from './components/Filters'
import Graph from './components/Graph';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';


export default function Home() {


  const [monthlySells, setMonthlySellls] = useState<monthlySales[]>([])
  const [category, setCategory] = useState<string>("Dairy")
  const [product, setProduct] = useState<string>("Milk and Derivatives")
  const [brand, setBrand] = useState<string>("MooMilk Co.")
  const [filters, setFilters] = useState<filter[]>([
    { name: 'Category', options: [category] },
    { name: 'Product', options: [product] },
    { name: 'Brand', options: [brand] },
  ])


  useEffect(() => {
    fetch("http://localhost:3000/api/filters")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((data) => {
        setFilters(data)
      })
  }, [])

  useEffect(() => {
    const searchParams = new URLSearchParams()
    searchParams.append('category', category)
    searchParams.append('product', product)
    searchParams.append('brand', brand)

    const baseUrl = "http://localhost:3000/api/graph?"
    const url = baseUrl + searchParams
    console.log(url)
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => setMonthlySellls(data))
      .catch((err) => console.error('Error fetching data', err))
  }, [category, product, brand])

  const content = (
    <>
      <Filters params={{
        options: filters, hooks: {
          category, product, brand, setCategory, setProduct, setBrand
        }
      }} />
      <Graph params={monthlySells} />
    </>
  )


  return content
}
