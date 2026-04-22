"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

/**
 * Detail Page: 
 * Jab user kisi product par click karega toh yahan bhi image dikhegi.
 */
export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id;

  const productData = {
    "1": { name: "Premium Laptop", price: "$1200", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800" },
    "2": { name: "Wireless Buds", price: "$150", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800" },
    "3": { name: "Smart Watch", price: "$250", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800" }
  };

  const product = productData[id as keyof typeof productData];

  return (
    <div className="p-8 max-w-4xl mx-auto text-center">
      <Link href="/products" className="text-blue-600 hover:underline mb-8 inline-block font-bold">
        ← Back to All Products
      </Link>
      
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-10">
        {/*  */}
        {product && <img src={product.img} className="w-full max-w-md mx-auto rounded-xl shadow-lg mb-6" alt={product.name} />}
        <h1 className="text-4xl font-black text-gray-900 mb-4">{product ? product.name : "Product Detail"}</h1>
        <p className="text-3xl font-black text-blue-600 mb-6">{product ? product.price : ""}</p>
        <p className="text-gray-500 mb-8 italic text-sm underline">Displaying Details for Product ID: {id}</p>
        <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-black transition-all">
          Buy Now
        </button>
      </div>
    </div>
  );
}