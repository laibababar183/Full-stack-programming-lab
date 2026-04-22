export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 italic">Welcome to My Next.js Store</h1>
      <p className="text-xl text-gray-600 max-w-2xl">
        This is the official Lab 08 assignment. Explore our multi-page application with dynamic routing and professional Tailwind styling.
      </p>
      <div className="mt-10 flex gap-4">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">Get Started</button>
        <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all">Learn More</button>
      </div>
    </div>
  );
}