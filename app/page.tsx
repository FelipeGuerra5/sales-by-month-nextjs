'use client'

import styles from './page.module.css'
import Filters from './components/Filters'
import Graph from './components/Graph';
import { useEffect, useState } from 'react';

export default function Home() {
  // const params: options = getCategories() 

  const [monthlySells, setMonthlySellls] = useState<monthlySum[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/api/graph')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network respons was not ok')
        }
        return response.json()
      })
      .then((data) => setMonthlySellls(data))
      .catch((err) => console.error('Error fetching data', err))
  }, [])


  const placeHolderOptions: options[] = [
    {
      name: 'Category',
      items: ['Cat Place Holder']
    },
    {
      name: 'Product',
      items: ['Product Place Holder']
    },
    {
      name: 'Brand',
      items: ['Brand Place Holder']
    },
  ]


  const content = (
    <>
      <Filters params={placeHolderOptions} />
      <Graph params={monthlySells} />
    </>
  )


  return content
}
