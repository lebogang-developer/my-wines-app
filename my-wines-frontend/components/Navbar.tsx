import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-lg font-bold">My Wines</h1>
        <div className="space-x-4">
          <Link href="/">
            <a className="text-white">Home</a>
          </Link>
          <Link href="/add-wine">
            <a className="text-white">Add Wine</a>
          </Link>
          <Link href="/login">
            <a className="text-white">Login</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
