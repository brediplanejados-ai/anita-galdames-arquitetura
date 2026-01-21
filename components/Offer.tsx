
import React from 'react';

const Offer: React.FC = () => {
  return (
    <section className="px-4 py-8 max-w-5xl mx-auto">
      <div className="bg-secondary rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl border-2 border-primary/20">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col gap-8">
          <div className="inline-block px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] w-fit">
            Oferta Exclusiva
          </div>

          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-shadow-premium">Pronta para transformar <span className="text-primary">seu espaço?</span></h2>
            <p className="text-white/60 font-light text-lg">Dê o primeiro passo para ter um ambiente pensado exclusivamente para você.</p>
          </div>

          <div className="pt-6">
            <a href="#contato" className="inline-block w-full md:w-auto bg-primary text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:bg-white hover:text-primary transition-all text-center">
              Quero meu projeto personalizado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
