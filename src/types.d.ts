interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}
