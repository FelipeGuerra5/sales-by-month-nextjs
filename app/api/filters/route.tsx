import { NextResponse } from "next/server"
import getFiltersOptions from '@/lib/getFiltersOptions'

export async function GET() {
    const data: filter[] = getFiltersOptions()

    return NextResponse.json(data)
}