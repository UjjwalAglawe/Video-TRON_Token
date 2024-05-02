import React from 'react';
import { Link } from "react-router-dom";

function Nav({account}) {

  return (

<nav className="border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 transition ease-in-out hover:bg-gray-950">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between p-4">
      <div className="flex cursor-pointer items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NFT MarketPlace</span>
      </div>

      <div className="flex justify-around w-full max-w-md">
        <Link to="/" className="no-underline text-gray-200 text-lg font-semibold transition-colors duration-300 hover:text-white hover:font-bold">Home</Link>
        <Link to="/create" className="no-underline text-gray-200 text-lg font-semibold transition-colors duration-300 hover:text-white hover:font-bold">Create</Link>
        {/* <Link to="/my-listed-nfts" className="no-underline text-gray-200 text-lg font-semibold transition-colors duration-300 hover:text-white">My Listed Items</Link>
        <Link to="/my-purchases" className="no-underline text-gray-200 text-lg font-semibold transition-colors duration-300 hover:text-white">My Purchases</Link> */}
      </div>
    </div>
  </div>
</nav>



  )
}

export default Nav