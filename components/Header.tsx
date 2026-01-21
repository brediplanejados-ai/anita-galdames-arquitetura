
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100/50 px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logotipo fiel à imagem enviada */}
        <div className="flex items-center gap-3 cursor-pointer group">
          {/* Elemento Gráfico */}
          <div className="relative w-12 h-12 flex-shrink-0">
            <div className="absolute top-[15%] left-0 w-full h-[2.2px] bg-primary rotate-[-20deg] origin-left"></div>
            <div className="absolute top-[15%] left-[35%] w-[2.2px] h-[70%] bg-primary"></div>
            <div className="absolute bottom-[15%] left-0 w-[80%] h-[50%] border-t-[2.2px] border-r-[2.2px] border-primary rounded-tr-[40px]"></div>
          </div>

          {/* Texto do Logotipo */}
          <div className="flex flex-col leading-none">
            <span className="font-sans font-light text-[22px] md:text-[26px] tracking-[0.15em] text-primary uppercase -mb-1 text-shadow-premium">
              ANITA
            </span>
            <span className="font-sans font-bold text-[22px] md:text-[26px] tracking-tight text-primary uppercase text-shadow-premium">
              GALDAMES
            </span>
            <div className="flex items-center mt-1">
              <span className="font-sans text-[9px] md:text-[11px] tracking-[0.6em] text-zinc-400 uppercase w-full">
                ARQUITETURA
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
          <a href="#projetos" className="hover:text-primary transition-colors">Projetos</a>
          <a href="#processo" className="hover:text-primary transition-colors">Processo</a>
          <a href="https://wa.me/5515997101903" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-7 py-3 rounded-full hover:bg-secondary transition-all shadow-lg shadow-primary/20">
            WHATSAPP
          </a>
        </div>

        <button className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-secondary text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
