import './globals.css';

export const metadata = {
  title: 'CRM System',
  description: 'Customer Relationship Management',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}