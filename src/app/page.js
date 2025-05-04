import React from "react";

export default function Page() {
  return (
    <div className="bg-black text-white px-4 py-10 space-y-10 font-sans">
      <section className="text-center">
        <h2 className="text-lg font-bold">Nutrientes-chave que apoiam o alívio da menopausa</h2>
        <div className="flex justify-center gap-6 mt-4">
          {[
            { label: "Gordura saudável", value: "90" },
            { label: "Alimentos ricos em cálcio", value: "95" },
            { label: "Vitamina antioxidante", value: "95" }
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-yellow-400 text-3xl font-bold">{item.value}</div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-xl font-bold text-yellow-300">Descubra nosso E-book Completo!!!</h2>
        <p className="mt-4">✓ 20+ receitas deliciosas e fáceis de preparar</p>
        <p>✓ 3 planos adaptáveis às suas necessidades</p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-lg font-bold">MÓDULO 1 - Receitas e Dicas 🍳</h3>
          <img src="/ebook1.jpg" alt="E-book 1" className="my-4 w-40 mx-auto" />
          <ul className="list-disc list-inside text-sm">
            <li>20 receitas saudáveis</li>
            <li>Dicas para reduzir sintomas</li>
            <li>Plano alimentar semanal</li>
            <li>Como equilibrar os nutrientes</li>
          </ul>
          <p className="mt-2 text-yellow-400">Quero esse EBOOK</p>
        </div>

        <div>
          <h3 className="text-lg font-bold">MÓDULO 2 - Dicas Práticas para o Dia a Dia 🧘‍♀️</h3>
          <img src="/ebook2.jpg" alt="E-book 2" className="my-4 w-40 mx-auto" />
          <ul className="list-disc list-inside text-sm">
            <li>Como identificar sintomas</li>
            <li>Dicas práticas para rotina</li>
            <li>Plano semanal de atividades</li>
          </ul>
          <p className="mt-2 text-yellow-400">Quero esse EBOOK</p>
        </div>
      </section>

      <section className="bg-yellow-100 text-black p-6 rounded">
        <blockquote className="italic">
          Estudos realizados com 84 mulheres na pós-menopausa mostraram que a adoção de uma dieta à base de vegetais resultou em uma redução de 92% nas ondas de calor.
        </blockquote>
        <p className="mt-2 font-bold text-sm">Fonte: Folha BV / Galeria do Livro</p>
      </section>

      <section className="text-center">
        <h3 className="text-lg font-bold">Aproveite um desconto exclusivo comprando o COMBO PREMIUM!</h3>
        <p className="mt-2">De 79,90 por apenas 49,90 parcelado em 6x sem juros!</p>
        <div className="flex justify-center items-center gap-4 mt-4">
          <img src="/ebook1.jpg" alt="E-book 1" className="w-24" />
          <img src="/ebook2.jpg" alt="E-book 2" className="w-24" />
        </div>
        <button className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded-xl font-bold hover:bg-yellow-500">
          COMPRAR COMBO PREMIUM
        </button>
      </section>

      <footer className="text-center text-sm mt-10">
        <p className="italic">"Você está a um passo de transformar sua qualidade de vida na menopausa."</p>
        <p className="mt-2">© 2025 Menopausa Leve</p>
      </footer>
    </div>
  );
}
