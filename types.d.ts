type filter = {
    name: string,
    options: string[]
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

type hooks = {
    category: string,
    product: string,
    brand: string,
    setCategory: Dispatch<SetStateAction<string>>,
    setProduct: Dispatch<SetStateAction<string>>,
    setBrand: Dispatch<SetStateAction<string>>,
}