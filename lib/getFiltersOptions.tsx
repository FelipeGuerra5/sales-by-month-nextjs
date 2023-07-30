import Data from '@/lib/data.json'


export default function getFiltersOptions(): filter[] {
    const categorySet: Set<string> = new Set()
    const productSet: Set<string> = new Set()
    const brandSet: Set<string> = new Set()

    Data.map(item => {
        categorySet.add(item.Category)
        productSet.add(item.Product)
        brandSet.add(item.Brand)
    })

    const response: filter[] = [
        { name: 'Category', options: Array.from(categorySet) },
        { name: 'Product', options: Array.from(productSet) },
        { name: 'Brand', options: Array.from(brandSet) }
    ]

    return response
}
