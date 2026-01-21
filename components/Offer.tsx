
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-shadow-premium">Consultoria de Diagnóstico <span className="text-primary">Gratuita</span></h2>
            <p className="text-white/60 font-light text-lg">Descubra o potencial do seu ambiente com uma análise técnica completa feita por mim Anita Galdames.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-zinc-300">
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-sm md:text-base">
                <span className="material-symbols-outlined text-secondary bg-primary rounded-full p-1 text-base font-bold">check</span>
                Análise de layout e circulação
              </li>
              <li className="flex items-center gap-4 text-sm md:text-base">
                <span className="material-symbols-outlined text-secondary bg-primary rounded-full p-1 text-base font-bold">check</span>
                Estudo de iluminação
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-sm md:text-base">
                <span className="material-symbols-outlined text-secondary bg-primary rounded-full p-1 text-base font-bold">check</span>
                Consultoria de cores
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <a href="https://wa.me/5515997101903" target="_blank" rel="noopener noreferrer" className="inline-block w-full md:w-auto bg-primary text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:bg-white hover:text-primary transition-all text-center">
              Agendar Consultoria
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
