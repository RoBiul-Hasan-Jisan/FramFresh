//import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pt-[125px] lg1100:pt-[100px] lg1180:pt-[200px] w-full">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-cyan-400 text-white flex flex-col justify-center items-center text-center py-24 sm:py-28 md:py-32 px-4 sm:px-8 md:px-12 overflow-hidden w-full">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg1100:text-6xl font-extrabold mb-6 animate-fadeInUp max-w-4xl sm:max-w-5xl md:max-w-7xl"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Fresh & Natural Products <br /> Delivered To Your Doorstep
        </h1>
        <p
          className="max-w-3xl sm:max-w-4xl md:max-w-5xl text-base sm:text-lg md:text-xl mb-10 opacity-80 animate-fadeInUp"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          Discover the best organic goods and pure ingredients directly from trusted sources.
        </p>
        <button
          className="bg-white text-blue-600 font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition-transform transform hover:scale-105 animate-fadeInUp"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          Shop Now
        </button>

        {/* Decorative circles */}
        <div
          className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white opacity-20 blur-3xl animate-float"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white opacity-10 blur-2xl animate-float"
          aria-hidden="true"
        ></div>
      </section>

      {/* Section 1 - About */}
      <section className="relative w-full px-6 py-24 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 drop-shadow-md mb-4">
              About <span className="text-emerald-600">FrameFresh</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Rooted in sustainability, powered by nature — we deliver organic goodness directly from trusted farms to your table.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                At FrameFresh, we believe that food should nourish both your body and the planet.
                That’s why we collaborate with ethical farmers and eco-conscious suppliers.
              </p>
              <p>
                Every product you receive is harvested with care, packed with purpose, and shipped with love.
                We’re more than a brand — we’re a movement toward cleaner, greener living.
              </p>
              <p className="font-semibold text-green-700">
                Join the FrameFresh family and taste the difference of pure, sustainable freshness.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
              <img
                src="https://srisriuniversity.edu.in/wp-content/uploads/2023/12/M.Sc_.-Agricultural-Extension-e1702106480189-768x409.jpg"
                alt="Fresh produce"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Featured Products */}
      <section className="w-full px-6 py-16 bg-white rounded-lg shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              {
                name: "Organic Honey",
                desc: "Pure, raw honey harvested from sustainable apiaries.",
                img: "/image/honey.jpg",
              },
              {
                name: "Cold-Pressed Mustard Oil",
                desc: "Rich in flavor and nutrients, perfect for cooking and dressing.",
                img: "/image/mustard-oil.jpg",
              },
              {
                name: "Natural Dates",
                desc: "Sweet and chewy dates packed with natural energy.",
                img: "/image/dates.jpg",
              },
            ].map(({ name, desc, img }) => (
              <div
                key={name}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
              >
                <img src={img} alt={name} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">{name}</h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
