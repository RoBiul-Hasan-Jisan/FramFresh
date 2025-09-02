// src/data/Gheeproducts.ts
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string; 
};

export const products: Product[] = [
  {
    id: 1,
    name: "Amul Ghee 1L",
    price: 800,
    image: "https://i5.walmartimages.com/seo/Amul-Pure-Ghee-Clarified-Butter-1L-905g-PACK-OF-4_8ad7d160-944d-4d38-a648-8f01882a17bf.0cbedb89e1072c81c7de3768e3211b41.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF",
   description: "Pure cow milk ghee from Amul, perfect for cooking and sweets."
  
},
  {
    id: 2,
    name: "Gowardhan Ghee 500ml",
    price: 450,
    image: "https://m.media-amazon.com/images/I/41ZQo93Q23L.jpg",
  description: "Pure cow milk ghee from Amul, perfect for cooking and sweets."
  
},
  {
    id: 3,
    name: "Mother Dairy Ghee 1L",
    price: 750,
    image: "https://m.media-amazon.com/images/I/91idhnLyJqL._SL1500_.jpg",
  description: "Pure cow milk ghee from Amul, perfect for cooking and sweets."
  
},
  {
    id: 4,
    name: "Nestle Everyday Ghee 500ml",
    price: 500,
    image: "https://m.media-amazon.com/images/I/61IXjLmfLpL._SX300_SY300_QL70_FMwebp_.jpg",
  description: "Pure cow milk ghee from Amul, perfect for cooking and sweets."
  
},
  {
    id: 5,
    name: "Patanjali Cow Ghee 500ml",
    price: 400,
    image: "https://m.media-amazon.com/images/I/41bkryyYGAL._SX300_SY300_QL70_FMwebp_.jpg",
 description: "Pure cow milk ghee from Amul, perfect for cooking and sweets."
  
},
];
