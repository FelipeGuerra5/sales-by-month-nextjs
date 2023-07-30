import Data from '@/lib/data.json'

type Props = {
    params: filters
}

export default function getMonthlySales({ params }: Props): monthlySales[] {
    // This function surfice for the data was thought to be already a sum of all monhtly sales
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

    return monthlySalesArr
}
