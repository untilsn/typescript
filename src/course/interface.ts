export interface IProduct {
  name: string;
  brand: string;
  color: string;
}

export interface IProductNewFeature extends IProduct {
  price: number;
}

export type ITotalProduct = IProduct & IProductNewFeature;
