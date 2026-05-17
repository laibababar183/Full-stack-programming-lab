const blogs = [
  { id: 1, title: 'The Art of Reclaimed Wood', date: 'May 1, 2026', desc: 'Discover how we source and transform reclaimed wood into beautiful furniture pieces.' },
  { id: 2, title: 'Handcrafted vs Mass Produced', date: 'April 15, 2026', desc: 'Why handcrafted furniture is worth the investment and how it differs from mass production.' },
  { id: 3, title: 'Caring for Your Wood Furniture', date: 'April 1, 2026', desc: 'Tips and tricks to maintain and care for your wooden furniture to last a lifetime.' },
];

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Blog</h1>
      <div className="w-16 h-1 bg-orange-500 mx-auto mb-10"></div>
      <div className="grid gap-6">
        {blogs.map(blog => (
          <div key={blog.id} className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <p className="text-orange-500 text-sm mb-2">{blog.date}</p>
            <h2 className="text-xl font-bold text-gray-800 mb-3">{blog.title}</h2>
            <p className="text-gray-600 leading-relaxed">{blog.desc}</p>
            <button className="mt-4 text-orange-500 font-semibold hover:underline">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}