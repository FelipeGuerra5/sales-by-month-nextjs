import styles from './page.module.css'
import Filters from './components/Filters'

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

  const content = (
    <Filters params={placeHolderOptions} />
  )


  return content
}
