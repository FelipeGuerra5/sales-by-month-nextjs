type options = {
    name: string,
    items: string[]

}

type monthlySales = {
    month: string;
    sales: number;
}

type monthlySalesProduct = {
    Category: string,
    Product: string,
    Brand: string,
    MonthlySales: monthlySales[]
}

type filters = {
    category: string,
    product: string,
    brand: string,
}