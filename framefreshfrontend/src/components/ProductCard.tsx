import React, { useState, useRef, useEffect } from "react";
import type { Product } from "../data/bestSellerProducts";
import { BadgePercent, ShoppingCart } from "lucide-react";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsZoomed(false);
    setOffset({ x: 0, y: 0 });
  }, [product]);

  const toggleZoom = () => {
    if (isZoomed) setOffset({ x: 0, y: 0 });
    setIsZoomed(!isZoomed);
  };

  const getPoint = (e: React.MouseEvent | React.TouchEvent) => {
    if ("touches" in e && e.touches.length > 0) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    } else if ("clientX" in e) {
      return { x: e.clientX, y: e.clientY };
    }
    return { x: 0, y: 0 };
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isZoomed) return;
    e.preventDefault();
    setOrigin(getPoint(e));
    setDragging(true);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging) return;
    e.preventDefault();
    const point = getPoint(e);
    const dx = point.x - origin.x;
    const dy = point.y - origin.y;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const maxPanX = (rect.width * (2 - 1)) / 2;
    const maxPanY = (rect.height * (2 - 1)) / 2;
    let newX = offset.x + dx;
    let newY = offset.y + dy;
    newX = Math.min(maxPanX, Math.max(-maxPanX, newX));
    newY = Math.min(maxPanY, Math.max(-maxPanY, newY));
    setOffset({ x: newX, y: newY });
    setOrigin(point);
  };

  const handleDragEnd = () => setDragging(false);

  return (
    <article
      className="relative group rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 overflow-hidden cursor-pointer max-w-[350px] mx-auto"
      aria-label={`Best seller product: ${product.name}`}
    >
      {/* Badge */}
      <span className="absolute top-2 left-2 z-20 bg-yellow-400 text-black text-[10px] sm:text-xs font-bold uppercase px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
        <BadgePercent className="w-3 h-3 sm:w-4 sm:h-4" />
        Best Seller
      </span>

      {/* Image */}
      <div
        ref={containerRef}
        className="overflow-hidden bg-gray-50 rounded-t-2xl relative touch-pan-y"
        style={{ cursor: isZoomed ? "grab" : "zoom-in" }}
        onClick={toggleZoom}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-40 sm:h-52 object-contain transition-transform duration-500 ease-in-out ${
            isZoomed ? "scale-[2]" : "group-hover:scale-105"
          }`}
          style={{
            transform: `scale(${isZoomed ? 2 : 1}) translate(${offset.x}px, ${offset.y}px)`,
            transition: dragging ? "none" : undefined,
          }}
          loading="lazy"
          draggable={false}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/300x200?text=Image+Unavailable";
          }}
        />
      </div>

      {/* Info */}
      <div className="p-3 sm:p-5 flex flex-col gap-2 sm:gap-4">
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
          Elevate your daily tech experience with this top-rated item.
        </p>
        <div className="flex justify-between items-center">
          <span className="bg-yellow-100 text-yellow-800 text-sm sm:text-base font-bold px-2 py-1 rounded-full shadow-inner">
            ${product.price.toFixed(2)}
          </span>
          <button
            className="flex items-center gap-1 px-3 py-1 sm:px-4 sm:py-2 bg-black text-white text-xs sm:text-sm rounded-full hover:bg-yellow-500 hover:text-black transition"
            aria-label={`Add ${product.name} to cart`}
            type="button"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
