'use client';

import React from 'react';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">     
      {/* Images */}      
      <div>
          <img src="/images/img1.png" className="w-full h-full object-cover" />
          <div className= "bg-[#262935] h-20 flex items-center justify-center">
              <Link href="collect">
                  <button className="bg-gradient-to-r from-indigo-400 via-fuchsia-300 to-[#EC8C78] text-gray-800 font-bold text-lg px-6 py-3 rounded-lg shadow-md 
                    hover:brightness-110 transition inline-block text-center">
                    Quero meu E-BOOK GRÁTIS
                  </button>
              </Link> 
            </div>
          <img src="/images/img2.png" className="w-full h-full object-cover" />          
          <img src="/images/img3.png" className="w-full h-full object-cover" />
          <img src="/images/img4.png" className="w-full h-full object-cover" /> 
            
          <img src="/images/img5.png" className="w-full h-full object-cover" />          
          <img src="/images/img6.png" className="w-full h-full object-cover" />          
          <img src="/images/img7.png" className="w-full h-full object-cover" />
          <img src="/images/img8.png" className="w-full h-full object-cover" />
            <div className="w-full h-20 flex items-center justify-center bg-[#262935]">
          <button
            className="bg-gradient-to-r from-indigo-400 via-fuchsia-300 to-[#EC8C78] text-gray-800 font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:brightness-110 transition"
            onClick={() => {
              window.location.href = 'https://pay.kiwify.com.br/oIxIhMX';
            }}
          >
            Quero meu E-book MÓDULO I
          </button>
            </div>                    
      </div>             
          <img src="/images/img9.png" className="w-full h-full object-cover" />
            <div className="w-full h-20 flex items-center justify-center bg-[#262935]">
          <button
            className="bg-gradient-to-r from-indigo-400 via-fuchsia-300 to-[#EC8C78] text-gray-800 font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:brightness-110 transition"
            onClick={() => {
              window.location.href = 'https://pay.kiwify.com.br/oIxIhMX';
            }}
          >
            Quero meu E-book MÓDULO II
          </button>
          </div> 
          <img src="/images/img10.png" className="w-full h-full object-cover" />
            <div className="w-full h-20 flex items-center justify-center bg-[#262935]">
          <button
            className="bg-gradient-to-r from-indigo-400 via-fuchsia-300 to-[#EC8C78] text-gray-800 font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:brightness-110 transition"
            onClick={() => {
              window.location.href = 'https://pay.kiwify.com.br/pAXiNvV';
            }}
          >
            Quero meu combo premium
          </button>
          </div> 
      <div className="w-full h-60  bg-[#262935]">
      </div>
        <img src="/images/img11.png" className="w-full h-full object-cover" />
      </div>
  );
}
