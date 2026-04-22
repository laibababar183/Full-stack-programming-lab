import Link from "next/link";

const products = [
  { id: "1", name: "Gaming Laptop", price: "1200", desc: "High-end performance for gamers." },
  { id: "2", name: "Wireless Headphones", price: "150", desc: "Noise cancelling studio quality sound." },
  { id: "3", name: "Smart Watch", price: "250", desc: "Track your health and notifications." },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
      {products.map((product) => (
        <div key={product.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
          <div className="h-40 bg-gray-100 flex items-center justify-center">
            <span className="text-4xl text-gray-400 font-bold italic">{product.name[0]}</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mt-2 text-sm line-clamp-2">{product.desc}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-blue-600 font-bold text-lg">${product.price}</span>
              <Link 
                href={`/products/${product.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}