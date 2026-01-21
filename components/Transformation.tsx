
import React from 'react';

const Transformation: React.FC = () => {
  return (
    <section className="py-8 md:py-12 px-4 bg-softBackground relative bg-grid-pattern overflow-hidden" id="projetos">
      <div className="arch-marker top-5 left-5"></div>
      <div className="arch-line top-1/2 left-0 w-full h-[1px] bg-zinc-200/30"></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-2 block italic text-shadow-sm">A Magia do Detalhe</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-secondary text-shadow-premium">Antes & <span className="text-primary font-normal italic">Depois</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start">
          {/* Antes - Estado Anterior */}
          <div className="relative group">
            <div className="premium-border p-[1px] shadow-premium">
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden grayscale contrast-125 bg-softBackground">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800"
                  alt="Estado anterior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-8 left-8 bg-secondary/90 backdrop-blur-md px-5 py-2 rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/20">
                  Estado Anterior
                </div>
                {/* Marcadores técnicos */}
                <div className="arch-marker bottom-10 right-10 border-white/40"></div>
              </div>
            </div>
          </div>

          {/* Depois - Espaço Renovado */}
          <div className="relative group">
            <div className="premium-border p-[1px] shadow-premium">
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden relative bg-softBackground">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
                  alt="Espaço renovado"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-8 left-8 bg-primary px-5 py-2 rounded-full text-white text-[10px] font-bold uppercase tracking-widest shadow-xl border border-white/30">
                  Projeto Studio Interior
                </div>
                {/* Marcadores técnicos */}
                <div className="arch-marker bottom-10 right-10 border-white/40"></div>
                {/* Overlay de brilho sutil */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
