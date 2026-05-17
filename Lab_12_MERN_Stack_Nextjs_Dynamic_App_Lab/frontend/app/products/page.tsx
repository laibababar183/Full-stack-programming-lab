'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product { _id: string; name: string; description: string; price: number; category: string; }

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products').then(r => r.json()).then(setProducts);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 tracking-widest">ALL PRODUCTS</h1>
      <div className="grid grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p._id} className="border rounded-lg p-5 hover:shadow-lg transition-shadow">
            <div className="bg-amber-50 h-40 rounded-lg flex items-center justify-center text-5xl mb-4">🪑</div>
            <h3 className="font-bold text-gray-800 mb-1">{p.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{p.description}</p>
            <p className="text-orange-500 font-bold text-lg mb-3">£{p.price}</p>
            <Link href={`/products/${p._id}`}
              className="block text-center bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors">
              View Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}