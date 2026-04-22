import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-indigo-900 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">TechStore</h1>
        <div className="space-x-8 font-medium">
          <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-blue-200 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
          <Link href="/products" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all">Products</Link>
        </div>
      </nav>
    </header>
  );
}