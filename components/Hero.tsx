
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative px-4 py-4 max-w-7xl mx-auto">
      <div
        className="relative min-h-[550px] md:min-h-[650px] flex flex-col items-center justify-center text-center p-8 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-primary/5"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)), url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Camada de borda degradê interna simulada */}
        <div className="absolute inset-0 border-[1px] border-white/20 rounded-[2.5rem] pointer-events-none"></div>

        {/* Marcadores Arquitetônicos */}
        <div className="arch-marker top-10 left-10 border-white/40"></div>
        <div className="arch-marker bottom-10 right-10 border-white/40"></div>
        <div className="arch-line top-0 left-[20%] w-[1px] h-full bg-white/5"></div>
        <div className="arch-line top-[30%] left-0 w-full h-[1px] bg-white/5"></div>

        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-block px-4 py-1.5 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            Sorocaba
          </div>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-shadow-premium">
            Arquitetura pra ser <span className="text-primary italic">vivida</span>!
          </h1>
          <p className="text-white/90 text-sm md:text-lg font-light max-w-2xl mx-auto leading-relaxed text-shadow-sm">
            Projetos de arquitetura e design de interiores personalizados para transformar cada metro quadrado em conforto, elegância e funcionalidade.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row gap-5 justify-center">
            <a href="https://wa.me/5515997101903" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/30 transition-all hover:bg-white hover:text-primary hover:scale-105 active:scale-95 text-center">
              Solicitar orçamento personalizado
            </a>
            <a href="#portfolio" className="bg-white/5 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all shadow-lg text-center">
              Ver portfólio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
