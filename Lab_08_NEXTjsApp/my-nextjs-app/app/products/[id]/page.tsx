"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

/**
 * ProductDetailPage component dynamic routing ko handle karta hai.
 * Yeh URL se 'id' nikal kar uske mutabiq product details dikhata hai.
 */
export default function ProductDetailPage() {
  const params = useParams();
  
  // URL se product id extract karna
  const id = params?.id;

  // Mock data: Real app mein yeh database se aata hai
  const productData = {
    "1": { 
      name: "Laptop", 
      price: "$1000", 
      desc: "High performance laptop for work and gaming.",
      details: "16GB RAM, 512GB SSD, Core i7"
    },
    "2": { 
      name: "Phone", 
      price: "$500", 
      desc: "Latest smartphone with amazing camera.",
      details: "6.1 inch Display, 128GB Storage"
    },
    "3": { 
      name: "Headphones", 
      price: "$100", 
      desc: "Noise cancelling wireless headphones.",
      details: "40h Battery, Bluetooth 5.0"
    }
  };

  // User ki di hui ID ke mutabiq data find karna
  const product = productData[id as keyof typeof productData];

  return (
    <div className="p-8 max-w-2xl mx-auto">
      {/* Back navigation link */}
      <Link href="/products" className="text-blue-500 hover:underline mb-4 inline-block font-semibold">
        ← Back to Products List
      </Link>
      
      {/* Product Detail Card UI */}
      <div className="bg-white border rounded-xl shadow-2xl overflow-hidden transition-all hover:shadow-blue-100">
        <div className="bg-slate-800 p-6 text-white text-center">
          <h1 className="text-3xl font-bold italic tracking-wide">
            {product ? product.name : "Product Specifications"}
          </h1>
        </div>
        
        <div className="p-8">
          <div className="mb-6 text-center border-b pb-4">
            <span className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]">Unique Identifier</span>
            <p className="text-2xl font-mono text-blue-600 font-bold">#{id}</p>
          </div>

          {product ? (
            <div className="space-y-6">
              <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg">
                <span className="text-gray-600 font-medium">Market Price:</span>
                <p className="text-2xl font-black text-green-700">{product.price}</p>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-gray-800 mb-1">About Product:</h3>
                <p className="text-gray-600 leading-relaxed italic">{product.desc}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-dashed border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2 text-sm">Technical Specs:</h3>
                <p className="text-gray-600 text-sm font-medium">{product.details}</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-red-500 text-lg font-bold">Oops! Product not found.</p>
              <p className="text-gray-400 text-sm">Is ID ka koi product database mein nahi hai.</p>
            </div>
          )}

          <div className="mt-8">
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 font-bold shadow-lg transform active:scale-95 transition-all">
              Proceed to Checkout
            </button>
          </div>
          
          <div className="mt-8 pt-4 border-t text-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest italic">
              Lab 08: Next.js Dynamic Component Implementation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}