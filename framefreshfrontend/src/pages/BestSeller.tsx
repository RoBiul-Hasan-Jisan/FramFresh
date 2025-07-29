//import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function BestSeller() {
  const products: Product[] = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image:
        "https://gadgetnmusic.com/wp-content/uploads/2025/02/Acefast-H6-ANC-Wireless-Headset.png",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      image:
        "https://gadgetnmusic.com/wp-content/uploads/2025/02/Acefast-H6-ANC-Wireless-Headset.png",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 59.99,
      image:
        "https://gadgetnmusic.com/wp-content/uploads/2025/02/Acefast-H6-ANC-Wireless-Headset.png",
    },
       {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image:
        "https://gadgetnmusic.com/wp-content/uploads/2025/02/Acefast-H6-ANC-Wireless-Headset.png",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      image:
        "https://gadgetnmusic.com/wp-content/uploads/2025/02/Acefast-H6-ANC-Wireless-Headset.png",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 59.99,
      image:
        "https://gadgetnmusic.com/wp-content/uploads/2025/02/Acefast-H6-ANC-Wireless-Headset.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 pt-[125px] md:pt-[200px] w-full">
      <section className="py-16 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
           Best Seller Products
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            These top-rated products are flying off the shelves. Get yours now!
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105 duration-300"
              >
                <img
  src={product.image}
  alt={product.name}
  className="w-full h-40 object-contain bg-gray-50"
/>

                <div className="p-4 text-left">
                  <h3 className="text-base font-bold text-gray-800 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    ${product.price.toFixed(2)}
                  </p>
                  <button className="w-full py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
