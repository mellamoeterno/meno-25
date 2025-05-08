'use client';

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';


export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <>
      <Script
        id="mcjs"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(c,h,i,m,p){
              m=c.createElement(h),
              p=c.getElementsByTagName(h)[0],
              m.async=1,
              m.src=i,
              p.parentNode.insertBefore(m,p)
            }(document,"script","https://chimpstatic.com/mcjs-connected/js/users/7f8eb8ea8bee7abfd177c6822/ac318314b371f9cc8b575433e.js");
          `
        }}
      />
      <div className="w-full flex flex-col items-center justify-center">
        {/* your images and content here */}
      </div>
    </>

      {/* Images */}      
        <div>
          <img src="/images/e1.jpg" className="w-full h-full object-cover" />
          <img src="/images/e2.jpg" className="w-full h-full object-cover" />
          <img src="/images/e3.jpg" className="w-full h-full object-cover" />
          <img src="/images/e4.jpg" className="w-full h-full object-cover" />
          <img src="/images/e5.jpg" className="w-full h-full object-cover" />
          <img src="/images/e6.jpg" className="w-full h-full object-cover" />
          <img src="/images/imageWoman1.jpg" className="w-full h-full object-cover" />
          <img src="/images/imageAlimentação2.jpg" className="w-full h-full object-cover" />
          <img src="/images/imageNewPhase3.jpg" className="w-full h-full object-cover" />
          <div className= "h-40 flex items-center justify-center">                  
         <Link href="/email">
          <button className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-gray-800 font-bold text-lg px-6 py-3 rounded-lg shadow-md 
            hover:brightness-110 transition inline-block text-center">
            Quero meu E-BOOK GRÁTIS
          </button>
        </Link>

        </div>
          <img src="/images/imageSet1.jpg" className="w-full h-full object-cover" />
          <img src="/images/imageSet2.jpg" className="w-full h-full object-cover" />
          <img src="/images/imageSet3.jpg" className="w-full h-full object-cover" />
          <img src="/images/imageSet4.png" className="w-full h-full object-cover" />
          {/* Replace background or insert <img /> inside as needed */}          
        </div>
      

      {/* Rose pink link section */}
      <div className="w-full h-32 flex items-center justify-center bg-gray-950">
        <Link href="https://pay.kiwify.com.br/oIxIhMX" className="text-[#ffcf40] text-3xl font-semibold underline">
          Quero meu ebook 
        </Link>
      </div>

      {/* Images */}
        <div>
        <img src="/images/imageSet5.jpg" className="w-full h-full object-cover" />
        <img src="/images/imageSet6.jpg" className="w-full h-full object-cover" />
        </div>
      

      <div className="w-full h-30 flex items-center justify-center bg-black">
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

      {/* Image */}
      <div>
      <img src="/images/imageSet7.jpg" className="w-full h-full object-cover" />
      <div className= "h-40 flex items-center justify-center">
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
      <div className="w-full h-32 flex items-center justify-center bg-gray-950">© 2025 MkSOU. Todos os direitos reservados.
        Este e-book é um material informativo, com foco em autocuidado e bem-estar durante a menopausa. Ele não substitui orientação médica ou tratamento profissional.
        Venda e entrega realizadas com segurança pela plataforma Kiwify  - Seu pagamento é 100% seguro.
        Dúvidas, sugestões ou suporte: ecommercmkssouza@gmail.com
        Endereço: QI 15, CEP 72135-150
     </div>
    </div>
  );
}
