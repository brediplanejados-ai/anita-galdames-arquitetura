
import React from 'react';

const TestimonialCard = ({ name, city, text, img }: { name: string, city: string, text: string, img: string }) => (
  <div className="min-w-[300px] md:min-w-[400px] bg-greige p-8 rounded-3xl flex flex-col gap-6 shadow-sm">
    <div className="flex text-primary">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="material-symbols-outlined fill-1">star</span>
      ))}
    </div>
    <p className="text-zinc-700 italic leading-relaxed">"{text}"</p>
    <div className="flex items-center gap-4 border-t border-zinc-200/50 pt-4">
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="font-bold text-zinc-900">{name}</p>
        <p className="text-[10px] text-zinc-400 uppercase tracking-widest">{city}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-8 md:py-12 overflow-hidden bg-grid-pattern relative">
      <div className="arch-line top-0 left-0 w-full h-[1px] bg-zinc-200/50"></div>
      <div className="px-4 max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-serif font-bold text-shadow-premium">O que os clientes dizem</h2>
      </div>

      <div className="flex gap-6 overflow-x-auto px-4 pb-8 no-scrollbar scroll-smooth">
        <TestimonialCard
          name="Cliente residencial"
          city="Sorocaba/SP"
          text="A Simone conseguiu traduzir exatamente o que imaginávamos. O resultado superou nossas expectativas."
          img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
        />
        <TestimonialCard
          name="Cliente comercial"
          city="Sorocaba/SP"
          text="Projeto funcional, elegante e pensado em cada detalhe. Atendimento impecável."
          img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
        />
        <TestimonialCard
          name="Cliente residencial"
          city="Sorocaba/SP"
          text="Nos sentimos seguros em todo o processo. Profissional extremamente atenciosa."
          img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
        />
      </div>
    </section>
  );
};

export default Testimonials;
