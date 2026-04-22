import Link from "next/link";

/**
 * ProductList Component: 
 * Is file mein images add karne se main products page par pictures dikhengi.
 */
export default function ProductList() {
  const products = [
    { 
      id: "1", 
      title: "Premium Laptop", 
      price: "$1200", 
      desc: "Powerful laptop for all your needs.",
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500" 
    },
    { 
      id: "2", 
      title: "Wireless Buds", 
      price: "$150", 
      desc: "High-quality sound with deep bass.",
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" 
    },
    { 
      id: "3", 
      title: "Smart Watch", 
      price: "$250", 
      desc: "Stay fit and stay connected always.",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" 
    },
  ];

  return (
    <div className="grid gap-8 md:grid-cols-3 py-6">
      {products.map((p) => (
        <div key={p.id} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl transition-all group flex flex-col">
          {/*  */}
          <div className="h-48 overflow-hidden bg-gray-200">
            <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{p.title}</h3>
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">{p.desc}</p>
            <div className="flex justify-between items-center border-t pt-4 mt-auto">
              <span className="text-blue-600 font-black text-lg">{p.price}</span>
              <Link href={`/products/${p.id}`} className="bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-blue-600 transition-colors">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}