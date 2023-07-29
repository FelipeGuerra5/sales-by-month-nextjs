import Data from '@/lib/data.json'

type Props = {
    params: filters
}

export default function getMonthlySales({ params }: Props): monthlySales[] {

    const monthlySalesArr: monthlySales[] = []
    Data.map(item => {
        if (
            item.Category === params.category &&
            item.Product === params.product &&
            item.Brand === params.brand
        ) {
            item.MonthlySales.map(item => monthlySalesArr.push(item))
        }
    })
    monthlySalesArr.push({ month: '', sales: 0 })

    return monthlySalesArr
}
