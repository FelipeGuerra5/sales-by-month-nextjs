// Must return the values for the graph:
import { useSearchParams } from 'next/navigation'
import { NextResponse } from "next/server";
import Data from '@/lib/data.json'
import getMonthlySales from '@/lib/getMonthlySales'


export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    // const obj = Object.fromEntries(searchParams.entries())
    const category = searchParams.get('category')!
    const product = searchParams.get('product')!
    const brand = searchParams.get('brand')!

    const params: filters = ({ category, product, brand })

    // Must Receive filterParams to sum the products
    const data: monthlySales[] = getMonthlySales({ params })

    return NextResponse.json(data)
}

