import React from 'react'

export default function Header() {
  return (
    <nav className="bg-gray-800">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      {/* <!-- Logo with text --> */}
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-8 w-auto"/>
        <span className="text-white text-lg font-semibold ml-2">Your Brand</span>
      </div>
      
      {/* <!-- Burger menu for mobile and tablet --> */}
      <div className="flex md:hidden">
        <button type="button" className="text-gray-500 hover:text-white focus:outline-none focus:text-white">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      
      {/* <!-- Links --> */}
      <div className="hidden md:flex md:items-center md:space-x-4">
        {/* <!-- Mega menu 1 --> */}
        <div className="relative group">
          <button type="button" className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
            <span className="text-lg">Link 1</span>
            <svg className="h-5 w-5 ml-1 mt-0.5 fill-current text-gray-400 group-hover:text-white transition duration-150 ease-in-out" viewBox="0 0 20 20">
              <path d="M6 6L14 10L6 14V6Z"></path>
            </svg>
          </button>
          {/* <!-- Mega menu content --> */}
          <div className="hidden group-hover:block absolute z-10 bg-gray-800 py-2 mt-2 rounded-md shadow-lg">
            {/* <!-- Mega menu items --> */}
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Sublink 1</a>
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Sublink 2</a>
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Sublink 3</a>
          </div>
        </div>
        
        {/* <!-- Mega menu 2 --> */}
        <div className="relative group">
          <button type="button" className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
            <span className="text-lg">Link 2</span>
            <svg className="h-5 w-5 ml-1 mt-0.5 fill-current text-gray-400 group-hover:text-white transition duration-150 ease-in-out" viewBox="0 0 20 20">
              <path d="M6 6L14 10L6 14V6Z"></path>
            </svg>
          </button>
          {/* <!-- Mega menu content --> */}
          <div className="hidden group-hover:block absolute z-10 bg-gray-800 py-2 mt-2 rounded-md shadow-lg">
            {/* <!-- Mega menu items --> */}
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Sublink3</a>
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Sublink 4</a>
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Sublink 5</a>
          </div>
        </div>
        
        {/* <!-- Regular link --> */}
        <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-lg">Link 3</a>
        <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-lg">Link 4</a>
        <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-lg">Link 5</a>
        
        {/* <!-- Button --> */}
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </div>
  </div>
  
  {/* <!-- Mobile and tablet burger menu --> */}
  <div className="md:hidden hidden">
    {/* <!-- Burger menu content --> */}
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Link 1</a>
      <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Link 2</a>
      <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Link 3</a>
      <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Link 4</a>
      <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Link 5</a>
    </div>
  </div>
</nav>

  )
}
