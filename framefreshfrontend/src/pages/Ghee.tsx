// src/pages/Ghee.tsx
import { useState } from "react";
import { products as productData, type Product } from "../data/Gheeproducts";

export default function Ghee() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"asc" | "desc" | "default">("default");
  const [quantities, setQuantities] = useState<number[]>(productData.map(() => 1));
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [toast, setToast] = useState<string>("");

  // Filter products based on search
  const filteredProducts = productData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort products based on price
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "asc") return a.price - b.price;
    if (sort === "desc") return b.price - a.price;
    return 0;
  });

  const handleQuantityChange = (index: number, delta: number) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index ? Math.max(1, q + delta) : q))
    );
  };

  const handleAddToCart = (product: Product, quantity: number) => {
    setToast(`${quantity} x ${product.name} added to cart!`);
    setTimeout(() => setToast(""), 3000);
  };

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 pt-[125px] md:pt-[200px] w-full">
      <section className="py-16 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Best Seller Ghee Products
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            High-quality ghee products for your kitchen!
          </p>

          {/* Search & Sort */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as "asc" | "desc" | "default")}
              className="px-4 py-2 border rounded-lg shadow-sm"
            >
              <option value="default">Sort by Price</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product: Product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105 duration-300 relative"
              >
                {/* Discount Badge */}
                {product.price < 500 && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    SALE
                  </div>
                )}

                {/* Wishlist Heart */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-2 right-2 text-gray-400 hover:text-red-500 transition text-xl`}
                >
                  {wishlist.includes(product.id) ? "♥" : "♡"}
                </button>

                {/* Quick View Overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition bg-black bg-opacity-20 cursor-pointer"
                  onClick={() => setQuickViewProduct(product)}
                >
                  <button className="px-3 py-1 bg-white rounded mx-1">Quick View</button>
                </div>

                {/* Product Image */}
                <div className="relative w-full pt-[100%] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute top-0 left-0 w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 text-left">
                  <h3 className="text-base font-bold text-gray-800 mb-1">
                    {product.name}
                  </h3>

                  {/* Ratings */}
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400">★★★★☆</span>
                    <span className="text-gray-500 ml-2 text-xs">(120 reviews)</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-2">${product.price.toFixed(2)}</p>

                  {/* Quantity Selector */}
                  <div className="flex items-center gap-2 mb-2">
                    <button
                      onClick={() => handleQuantityChange(index, -1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{quantities[index]}</span>
                    <button
                      onClick={() => handleQuantityChange(index, 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={() => handleAddToCart(product, quantities[index])}
                    className="w-full py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick View Modal */}
        {quickViewProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
              >
                ✕
              </button>
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full h-64 object-contain mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{quickViewProduct.name}</h2>
              <p className="text-gray-600 mb-2">${quickViewProduct.price.toFixed(2)}</p>
              <p className="text-gray-500 text-sm mb-4">{quickViewProduct.description || "High-quality ghee product for your kitchen."}</p>
              <button
                onClick={() => {
                  handleAddToCart(quickViewProduct, 1);
                  setQuickViewProduct(null);
                }}
                className="w-full py-2 bg-black text-white rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}

        {/* Toast Notification */}
        {toast && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition">
            {toast}
          </div>
        )}
      </section>
    </main>
  );
}
