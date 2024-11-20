import React from "react";
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} My Wines. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Connect with me on{" "}
          <Link
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Lebo Sekaleli
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
