import Link from 'next/link';

export default function Header() {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-gray-100 text-xs text-gray-500 py-1 px-4 flex justify-between border-b">
        <span>📧 info@rustikplank.com</span>
        <span>📞 07584 031409</span>
      </div>

      {/* Logo + Nav */}
      <div className="bg-white py-4 px-8 flex justify-between items-center border-b shadow-sm">
        <Link href="/" className="text-3xl font-black text-gray-800 tracking-wider">
          Rustik <span className="text-orange-500">Plank</span>
        </Link>
        <nav className="flex gap-6">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About Us' },
            { href: '/contact', label: 'Contact Us' },
            { href: '/products', label: 'Blog' },
          ].map(link => (
            <Link key={link.href} href={link.href}
              className="text-gray-600 hover:text-orange-500 font-medium transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <span className="text-gray-500 text-sm">Mr. Account Name/Register</span>
          <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm">0 Item</div>
        </div>
      </div>

      {/* Category nav */}
      <div className="bg-orange-500 py-2 px-8">
        <nav className="flex gap-8 text-white text-sm font-medium">
          {['BEDS', 'CABINETS', 'BOOKCASES', 'BOXES', 'CHAIRS', 'TABLES'].map(cat => (
            <Link key={cat} href={`/category/${cat.toLowerCase()}`}
              className="hover:text-yellow-200 transition-colors tracking-wide">
              {cat}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}