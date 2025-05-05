'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Images 1 to 4 */}      
        <div>
          <img src="/images/imageSet1.jpg" className="w-full h-full object-cover" />
          <img src="/images/imageSet2.jpg" className="w-full h-full object-cover" />
          <img src="/images/imageSet3.jpg" className="w-full h-full object-cover" />
          <img src="/images/imageSet4.png" className="w-full h-full object-cover" />
          {/* Replace background or insert <img /> inside as needed */}          
        </div>
      

      {/* Rose pink link section */}
      <div className="w-full h-32 flex items-center justify-center bg-gray-950">
        <Link href="/your-link" className="text-[#f7879A] text-3xl font-semibold underline">
          Quero meu ebook
        </Link>
      </div>

      {/* Images 5 and 6 */}
        <div>
        <img src="/images/imageSet5.jpg" className="w-full h-full object-cover" />
        <img src="/images/imageSet6.jpg" className="w-full h-full object-cover" />
        </div>
      

      {/* Gold effect button section */}
      <div className="w-full h-30 flex items-center justify-center bg-black">
        <button
          className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-gray-800 font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:brightness-110 transition"
          onClick={() => {
            // Replace this with your own navigation logic
            window.location.href = '/your-destination';
          }}
        >
          Quero meu combo premium
        </button>
      </div>

      {/* Image 7 */}
      <div>
      <img src="/images/imageSet7.jpg" className="w-full h-full object-cover" />
      <div className= "h-40 flex items-center justify-center">
      <button
          className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-gray-800 font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:brightness-110 transition"
          onClick={() => {
            // Replace this with your own navigation logic
            window.location.href = '/your';
          }}
        >
          comprar AGORA MEUS E-BOOKS
        </button>
        </div>
      </div>
    </div>
  );
}
