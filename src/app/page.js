'use client';

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';


export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">     
      {/* Images */}      
        <div>
          <img src="/images/imageWoman1.jpg" className="w-full h-full object-cover" />
          <img src="/images/e6.jpg" className="w-full h-full object-cover" />          
          <img src="/images/e3.jpg" className="w-full h-full object-cover" />
          <img src="/images/imageNewPhase3.jpg" className="w-full h-full object-cover" /> 
          <div className= "h-40 flex items-center justify-center">
            <Link href="https://drive.google.com/file/d/14WxGsejZ5voyvTh6jUvWVnHVQKvL64Dx/view?usp=sharing">
                <button className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-gray-800 font-bold text-lg px-6 py-3 rounded-lg shadow-md 
                  hover:brightness-110 transition inline-block text-center">
                  Quero meu E-BOOK GRÁTIS
                </button>
            </Link> 
         </div>
            <img src="/images/e4.jpg" className="w-full h-full object-cover" />          
            <img src="/images/e5.jpg" className="w-full h-full object-cover" />          
            <img src="/images/imageAlimentação2.jpg" className="w-full h-full object-cover" />     
            <img src="/images/imageSet1.jpg" className="w-full h-full object-cover" />          
            <img src="/images/imageSet3.jpg" className="w-full h-full object-cover" />
         <div className="w-full h-30 flex items-center justify-center bg-black">
        <button
          className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-gray-800 font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:brightness-110 transition"
          onClick={() => {
            // Replace this with your own navigation logic
            window.location.href = 'https://pay.kiwify.com.br/oIxIhMX';
          }}
        >
          Quero meu E-book MÓDULO 1
        </button>
          </div>
            <img src="/images/imageSet4.png" className="w-full h-full object-cover" />
            <div className="w-full h-30 flex items-center justify-center bg-black">
        <button
          className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-gray-800 font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:brightness-110 transition"
          onClick={() => {
            // Replace this with your own navigation logic
            window.location.href = 'https://pay.kiwify.com.br/oIxIhMX';
          }}
        >
          Quero meu E-book MÓDULO 2
        </button>
          </div>
            {/* Replace background or insert <img /> inside as needed */}          
          </div>
            {/* Rose pink link section */}            
            {/* Images */}
          <div>
          <img src="/images/imageSet5.jpg" className="w-full h-full object-cover" />
          <img src="/images/e2.jpg" className="w-full h-full object-cover" />
          </div>      
            {/* Image */}
    <div>
      <img src="/images/combo.jpg" className="w-full h-full object-cover" />
       <div className="w-full h-30 flex items-center justify-center bg-fuchsia-300">
        <button
          className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-gray-800 font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:brightness-110 transition"
          onClick={() => {
            // Replace this with your own navigation logic
            window.location.href = 'https://pay.kiwify.com.br/pAXiNvV';
          }}
        >
          Quero meu combo premium
        </button>
      </div> 
        <img src="/images/imageSet7.jpg" className="w-full h-full object-cover" />
          <div className= "h-20 flex items-center justify-center">
            <button
                className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-gray-800 font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:brightness-110 transition"
                onClick={() => {
                  // Replace this with your own navigation logic
                  window.location.href = 'https://pay.kiwify.com.br/pAXiNvV';
                }}
              >
                Comprar AGORA MEUS E-BOOKS
              </button>
          </div>
      </div>
        <div className="w-full h-60 flex items-center justify-center bg-gray-950 font-bold text-lg px-6 py-3 rounded-lg shadow-md 
              hover:brightness-110 transition text-center">
        </div>
        <div className="w-full h-60 flex items-center justify-center bg-gray-950 font-bold text-lg px-6 py-3 rounded-lg shadow-md 
              hover:brightness-110 transition text-center"> © 2025 MkSOU. Todos os direitos reservados.
          Este e-book é um material informativo, com foco em autocuidado e bem-estar durante a menopausa. Ele não substitui orientação médica ou tratamento profissional.         
          Venda e entrega realizadas com segurança pela plataforma Kiwify  - Seu pagamento é 100% seguro.
        </div>
      <div className = "h-20">
          <h1>Dúvidas, sugestões ou suporte: ecommercmkssouza@gmail.com
          Endereço: QI 15, CEP 72135-150
          </h1>
      </div>
    </div>
  );
}
