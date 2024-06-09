interface

export interface IProduct {
name: string;
brand: string;
color: string
}

export interface IProductNewFeature extend Product {
price: number
}

const product:Product {
name: "car",
brand: "bmw",
color: "red"
}

function card (product: Product) {
product.
}

thường đặt tên I

type ITotalInterface = IProduct & IProductNewFeature
