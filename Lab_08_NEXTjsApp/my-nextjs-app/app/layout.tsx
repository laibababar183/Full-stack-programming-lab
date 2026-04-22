import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto px-6 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}