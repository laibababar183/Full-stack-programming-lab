export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-4 gap-8">
        <div>
          <h3 className="text-orange-500 font-bold mb-3 tracking-widest text-sm">INFORMATIONS</h3>
          <ul className="space-y-2 text-xs">
            {['Terms and Conditions', 'About us', 'Information', 'Sitemap', 'Contact'].map(item => (
              <li key={item} className="hover:text-white cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-orange-500 font-bold mb-3 tracking-widest text-sm">MY ACCOUNT</h3>
          <ul className="space-y-2 text-xs">
            {['Your Account', 'Orders History', 'Addresses', 'Return Policy'].map(item => (
              <li key={item} className="hover:text-white cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-orange-500 font-bold mb-3 tracking-widest text-sm">HELP AND MORE</h3>
          <ul className="space-y-2 text-xs">
            {['Top Sellers', 'New Products', 'Manufacturers', 'Suppliers', 'Specials'].map(item => (
              <li key={item} className="hover:text-white cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-orange-500 font-bold mb-3 tracking-widest text-sm">LINKS</h3>
          <ul className="space-y-2 text-xs">
            {['Delivery', 'Service', 'Gift Cards', 'Media', 'Manufacturers'].map(item => (
              <li key={item} className="hover:text-white cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center py-4 text-xs border-t border-gray-700 text-gray-500">
        © 2024 Rustik Plank Furniture. All Rights Reserved.
      </div>
    </footer>
  );
}