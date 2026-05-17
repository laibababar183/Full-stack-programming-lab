'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isFeatured: boolean;
  isSpecial: boolean;
  isPopular: boolean;
}

const categoryImages: { [key: string]: string } = {
  CHAIRS: 'https://picsum.photos/seed/chair/400/300',
  BEDS: 'https://picsum.photos/seed/bed/400/300',
  TABLES: 'https://picsum.photos/seed/table/400/300',
  BOOKCASES: 'https://picsum.photos/seed/book/400/300',
  CABINETS: 'https://picsum.photos/seed/cabinet/400/300',
  BOXES: 'https://picsum.photos/seed/box/400/300',
};

const productImages: { [key: string]: string } = {
  CHAIRS: 'https://picsum.photos/seed/chair/80/64',
  BEDS: 'https://picsum.photos/seed/bed/80/64',
  TABLES: 'https://picsum.photos/seed/table/80/64',
  BOOKCASES: 'https://picsum.photos/seed/book/80/64',
  CABINETS: 'https://picsum.photos/seed/cabinet/80/64',
  BOXES: 'https://picsum.photos/seed/box/80/64',
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(r => r.json())
      .then(setProducts);
  }, []);

  const featured = products.filter(p => p.isFeatured);
  const special = products.filter(p => p.isSpecial);
  const popular = products.filter(p => p.isPopular);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HERO BANNER */}
      <div className="bg-amber-50 py-16 text-center border-b-4 border-orange-500">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Rustik Plank</h1>
        <p className="text-xl text-gray-600 mb-8">Reclaimed and hand crafted furniture</p>
        <div className="flex gap-6 justify-center flex-wrap px-4">
          <div className="rounded-lg p-8 w-72 text-left shadow-lg relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #8B4513, #D2691E)' }}>
            <img src="https://picsum.photos/seed/wood1/300/200" alt="sale"
              className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="relative">
              <p className="text-yellow-300 font-bold text-2xl">Sale Off</p>
              <p className="text-white text-5xl font-black">50%</p>
              <p className="text-orange-100 text-sm mt-2">Reclaimed and hand crafted</p>
            </div>
          </div>
          <div className="rounded-lg p-8 w-72 text-left shadow-lg relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #5C3317, #A0522D)' }}>
            <img src="https://picsum.photos/seed/wood2/300/200" alt="elite"
              className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="relative">
              <p className="text-yellow-300 text-sm font-bold tracking-widest">ELITE COLLECTION</p>
              <p className="text-white font-black text-2xl mt-1">Design Furniture</p>
              <p className="text-orange-200 text-sm mt-2">Sale Off <span className="font-bold text-yellow-300">35%</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* BUY ONLINE BANNER */}
      <div className="bg-yellow-50 py-6 text-center border-b">
        <p className="text-gray-500 text-sm tracking-widest">NOW AVAILABLE IN OUR STORE SYSTEM</p>
        <p className="text-orange-500 font-black text-3xl">BUY ONLINE</p>
        <p className="text-green-600 font-bold tracking-widest">PICK UP IN STORE</p>
      </div>

      {/* CATEGORIES */}
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 tracking-widest">OUR COLLECTIONS</h2>
        <div className="grid grid-cols-3 gap-6 mb-10">
          {Object.entries(categoryImages).map(([cat, img]) => (
            <Link key={cat} href={`/category/${cat.toLowerCase()}`}
              className="relative rounded-xl overflow-hidden h-44 group shadow-lg hover:shadow-xl transition-shadow">
              <img src={img} alt={cat}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-45 group-hover:bg-opacity-30 transition-all" />
              <div className="absolute inset-0 flex flex-col items-end justify-end p-4">
                <p className="text-white font-bold text-lg tracking-widest drop-shadow">{cat} COLLECTION</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-3 gap-8">

          {/* FEATURED */}
          <div>
            <div className="flex justify-between items-center mb-4 border-b-2 border-orange-500 pb-2">
              <h2 className="text-gray-800 font-bold text-lg tracking-widest">FEATURED</h2>
              <Link href="/products" className="text-orange-500 text-sm hover:underline">See All</Link>
            </div>
            {featured.map(p => (
              <div key={p._id} className="flex items-center gap-3 mb-4 border-b pb-4">
                <img src={productImages[p.category] || 'https://picsum.photos/seed/wood/80/64'}
                  alt={p.name} className="w-20 h-16 object-cover rounded shadow flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-700 text-sm truncate">{p.name}</p>
                  <p className="text-gray-400 text-xs truncate">{p.description}</p>
                  <p className="text-orange-500 font-bold">£{p.price}</p>
                </div>
                <Link href={`/products/${p._id}`}
                  className="bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-700 text-xs px-3 py-1 rounded transition-all flex-shrink-0">
                  Detail
                </Link>
              </div>
            ))}
          </div>

          {/* SPECIAL */}
          <div>
            <div className="flex justify-between items-center mb-4 border-b-2 border-orange-500 pb-2">
              <h2 className="text-gray-800 font-bold text-lg tracking-widest">SPECIAL</h2>
              <Link href="/products" className="text-orange-500 text-sm hover:underline">See All</Link>
            </div>
            {special.map(p => (
              <div key={p._id} className="flex items-center gap-3 mb-4 border-b pb-4">
                <img src={productImages[p.category] || 'https://picsum.photos/seed/wood/80/64'}
                  alt={p.name} className="w-20 h-16 object-cover rounded shadow flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-700 text-sm truncate">{p.name}</p>
                  <p className="text-gray-400 text-xs truncate">{p.description}</p>
                  <p className="text-orange-500 font-bold">£{p.price}</p>
                </div>
                <Link href={`/products/${p._id}`}
                  className="bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-700 text-xs px-3 py-1 rounded transition-all flex-shrink-0">
                  Detail
                </Link>
              </div>
            ))}
          </div>

          {/* POPULAR */}
          <div>
            <div className="flex justify-between items-center mb-4 border-b-2 border-orange-500 pb-2">
              <h2 className="text-gray-800 font-bold text-lg tracking-widest">POPULAR</h2>
              <Link href="/products" className="text-orange-500 text-sm hover:underline">See All</Link>
            </div>
            {popular.map(p => (
              <div key={p._id} className="flex items-center gap-3 mb-4 border-b pb-4">
                <img src={productImages[p.category] || 'https://picsum.photos/seed/wood/80/64'}
                  alt={p.name} className="w-20 h-16 object-cover rounded shadow flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-700 text-sm truncate">{p.name}</p>
                  <p className="text-gray-400 text-xs truncate">{p.description}</p>
                  <p className="text-orange-500 font-bold">£{p.price}</p>
                </div>
                <Link href={`/products/${p._id}`}
                  className="bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-700 text-xs px-3 py-1 rounded transition-all flex-shrink-0">
                  Detail
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}