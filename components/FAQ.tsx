
import React, { useState } from 'react';

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors"
      >
        <span className="font-bold text-zinc-800 text-lg">{question}</span>
        <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>add</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-6' : 'max-h-0'}`}>
        <p className="text-zinc-500 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-8 md:py-12 px-4 bg-softBackground">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center text-shadow-premium">Dúvidas Frequentes</h2>
        <div className="flex flex-col">
          <AccordionItem
            question="Quanto tempo dura um projeto?"
            answer="Depende da complexidade, mas em média um projeto executivo completo leva de 4 a 8 semanas, desde o briefing até a entrega técnica."
          />
          <AccordionItem
            question="Vocês atendem fora da capital?"
            answer="Sim! Realizamos consultorias online para todo o Brasil e projetos presenciais sob consulta logística para outras cidades."
          />
          <AccordionItem
            question="Como funciona o acompanhamento?"
            answer="Oferecemos gestão completa: desde a escolha de fornecedores até visitas técnicas semanais para garantir que a execução seja fiel ao projeto."
          />
          <AccordionItem
            question="É possível reformar sem trocar tudo?"
            answer="Com certeza. Trabalhamos com reuso inteligente e 'home staging' para valorizar o que você já tem, focando em mudanças de alto impacto visual."
          />
          <AccordionItem
            question="Qual o valor médio por m²?"
            answer="O investimento varia conforme o padrão de acabamento desejado. Na primeira consultoria, apresentamos estimativas baseadas em projetos similares."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
