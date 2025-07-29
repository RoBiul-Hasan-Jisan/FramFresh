import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function Dates() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image:
        "https://assets.gadgetandgear.com/upload/media/oraimo-watch-5-osw-805-pink.jpeg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      image:
        "https://assets.gadgetandgear.com/upload/media/oraimo-watch-5-osw-805-pink.jpeg",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 59.99,
      image:
        "https://assets.gadgetandgear.com/upload/media/oraimo-watch-5-osw-805-pink.jpeg",
    },
    {
      id: 4,
      name: "Wireless Headphones",
      price: 99.99,
      image:
        "https://assets.gadgetandgear.com/upload/media/oraimo-watch-5-osw-805-pink.jpeg",
    },
    {
      id: 5,
      name: "Smart Watch",
      price: 149.99,
      image:
        "https://assets.gadgetandgear.com/upload/media/oraimo-watch-5-osw-805-pink.jpeg",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 59.99,
      image:
        "https://assets.gadgetandgear.com/upload/media/oraimo-watch-5-osw-805-pink.jpeg",
    },
  ];

  return (
    <>
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
                  onClick={() => setSelectedProduct(product)}
                  className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105 duration-300"
                >
                  <div className="w-full h-40 md:h-56 lg:h-64 overflow-hidden rounded-t-xl bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transform transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                  </div>

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

      {/* Modal */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
            className="bg-white rounded-lg max-w-lg w-full p-6 relative"
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-700 hover:text-black text-xl font-bold"
            >
              &times;
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-80 object-contain mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
            <p className="text-gray-700 mb-4">${selectedProduct.price.toFixed(2)}</p>
            <p className="text-gray-600">
              {/* Add more detailed description here if you want */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              commodo, nulla vitae dapibus aliquam, arcu risus cursus odio, sed
              dapibus libero augue in lectus.
            </p>
            <button className="mt-6 w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
