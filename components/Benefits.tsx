
import React from 'react';

const BenefitCard = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <div className="premium-border p-6 md:p-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 shadow-xl shadow-zinc-200/50 relative overflow-hidden">
    {/* Micro-detalhe arquitetônico */}
    <div className="arch-marker top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all"></div>

    <div className="w-20 h-20 bg-softBackground rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6 shadow-inner border border-zinc-100 relative z-10">
      <span className="material-symbols-outlined text-4xl font-light">{icon}</span>
    </div>
    <h3 className="text-2xl font-serif font-bold mb-4 text-secondary text-shadow-premium relative z-10">{title}</h3>
    <p className="text-zinc-500 text-sm leading-relaxed font-light relative z-10">{desc}</p>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section className="py-8 md:py-12 px-4 max-w-7xl mx-auto relative bg-grid-pattern overflow-hidden" id="processo">
      {/* Decorative architectural markers */}
      <div className="arch-marker top-0 left-0"></div>
      <div className="arch-marker bottom-0 right-0"></div>
      <div className="arch-line top-0 left-[50%] w-[1px] h-full bg-zinc-200/50"></div>
      <div className="text-center mb-8 md:mb-16">
        <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-2 block text-shadow-sm">Excelência e Rigor</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary text-shadow-premium">Nosso Compromisso</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        <BenefitCard
          icon="diamond"
          title="Luxo Acessível"
          desc="Trazemos tendências internacionais de design adaptadas ao contexto local de Itapeva, com inteligência orçamentária."
        />
        <BenefitCard
          icon="draw"
          title="Curadoria Técnica"
          desc="Seleção rigorosa de cada material para garantir que a estética seja acompanhada de máxima durabilidade."
        />
        <BenefitCard
          icon="verified"
          title="Fidelidade Total"
          desc="O projeto 3D é o nosso contrato visual. Entregamos exatamente o que foi sonhado, com precisão milimétrica."
        />
      </div>
    </section>
  );
};

export default Benefits;
