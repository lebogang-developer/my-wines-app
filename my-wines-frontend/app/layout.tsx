import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../app/globals.css'; // Import Tailwind CSS

export const metadata = {
  title: 'My Wines',
  description: 'Manage your favorite wines | Discover the best wines',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
