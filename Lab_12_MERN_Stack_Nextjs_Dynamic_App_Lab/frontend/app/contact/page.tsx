export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
      <div className="w-16 h-1 bg-orange-500 mx-auto mb-10"></div>
      <div className="bg-gray-50 rounded-xl p-8">
        <input placeholder="Your Name"
          className="block w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" />
        <input placeholder="Your Email"
          className="block w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" />
        <textarea placeholder="Your Message"
          className="block w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 h-32 resize-none" />
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold transition-colors">
          Send Message
        </button>
      </div>
    </div>
  );
}