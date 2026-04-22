export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          <h2 className="text-white text-xl font-bold">Lab 08 - Next.js App</h2>
          <p className="text-sm mt-2">Built with Next.js and Tailwind CSS for Full Stack Lab</p>
        </div>
        <hr className="border-gray-700 my-6" />
        <p className="text-sm">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}