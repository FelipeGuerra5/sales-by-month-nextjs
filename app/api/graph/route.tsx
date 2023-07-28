// Must return the values for the graph:

import { NextResponse } from "next/server";
import Data from '@/lib/monthlySum.json'

export async function GET() {
    const data: monthlySum[] = Data

    return NextResponse.json(data)
}
