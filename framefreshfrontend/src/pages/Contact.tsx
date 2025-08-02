//import React from "react";


// src/pages/BestSeller.tsx
import { bestSellerProducts } from "../data/bestSellerProducts";
import ProductCard from "../components/ProductCard";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 pt-[125px] md:pt-[200px] w-full">
      <section className="py-10 px-3 sm:px-6 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Best Seller Products
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-10">
          These top-rated products are flying off the shelves. Get yours now!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestSellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
