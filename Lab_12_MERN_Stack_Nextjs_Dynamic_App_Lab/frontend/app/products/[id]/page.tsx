'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product { _id: string; name: string; description: string; price: number; category: string; }

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${params.id}`).then(r => r.json()).then(setProduct);
  }, [params.id]);

  if (!product) return <div className="text-center py-20 text-gray-500">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/products" className="text-orange-500 hover:underline mb-6 inline-block">← Back to Products</Link>
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="bg-amber-50 h-80 rounded-2xl flex items-center justify-center text-8xl shadow">🪑</div>
        <div>
          <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">{product.category}</span>
          <h1 className="text-3xl font-black text-gray-800 mt-3 mb-4">{product.name}</h1>
          <p className="text-gray-500 leading-relaxed mb-6">{product.description}</p>
          <p className="text-4xl font-black text-orange-500 mb-6">£{product.price}</p>
          <p className="text-sm text-gray-400 mb-6">OUR PRICE</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition-colors">
            🛒 ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}