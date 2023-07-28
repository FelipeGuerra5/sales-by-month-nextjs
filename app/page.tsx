import styles from './page.module.css'
import Filters from './components/Filters'
import Graph from './components/Graph';

export default function Home() {
  // const params: options = getCategories() 

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

  const placeholderSellsPerMonth: monthlySum[] = [
    { month: 'January', sells: 1000 },
    { month: 'February', sells: 1200 },
    { month: 'March', sells: 800 },
    { month: 'April', sells: 1500 },
    { month: 'May', sells: 1100 },
    { month: 'June', sells: 900 },
    { month: 'July', sells: 1300 },
    { month: 'August', sells: 1400 },
    { month: 'September', sells: 950 },
    { month: 'October', sells: 1600 },
    { month: 'November', sells: 1150 },
    { month: 'December', sells: 1700 },
  ]
  const content = (
    <>
      <Filters params={placeHolderOptions} />
      <Graph params={placeholderSellsPerMonth} />
    </>
  )


  return content
}
