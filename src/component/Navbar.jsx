import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="flex items-center justify-between">
        <a href="/" className="text-black text-2xl font-bold">
          <img src="/images/brand_logo.png" alt="Brand Logo" className="h-10 w-10" />
        </a>
        <ul className="flex space-x-6">
          <li><a href="/" className="text-black hover:text-gray-500">MENU</a></li>
          <li><a href="/about" className="text-black hover:text-gray-500">LOCATION</a></li>
          <li><a href="/services" className="text-black hover:text-gray-500">ABOUT</a></li>
          <li><a href="/contact" className="text-black hover:text-gray-500">CONTACT</a></li>
        </ul>
        <button className="bg-red-600 hover:bg-red-800 text-white font-medium py-2 px-4 rounded">
          Login
        </button>
      </div>
    </nav>
  )
}

export default Navbar
