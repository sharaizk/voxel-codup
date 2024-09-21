export type Category = string;
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: 120;
  };
};

export type Categories = Category[];

export type Products = Product[];

export interface CartState {
  cart_items: Products | [];
  cart_popup: boolean;
}
