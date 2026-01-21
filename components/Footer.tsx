
import React from 'react';

const Footer: React.FC = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Campolim,+Sorocaba+-+SP";

  return (
    <footer className="bg-secondary text-white pt-12 pb-24 md:pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="max-w-md space-y-8">
          {/* Logotipo fiel à imagem no rodapé (Versão branca/laranja) */}
          <div className="flex items-center gap-4 group">

            <div className="flex flex-col leading-none">
              <span className="font-sans font-light text-3xl tracking-[0.15em] text-white uppercase -mb-1.5 text-shadow-premium">
                SIMONE
              </span>
              <span className="font-sans font-bold text-3xl tracking-tight text-white uppercase text-shadow-premium">
                MARQUES
              </span>
              <span className="font-sans text-xs tracking-[0.7em] text-primary uppercase mt-2 border-t border-white/10 pt-2">
                ARQTIME
              </span>
            </div>
          </div>

          <p className="text-zinc-500 text-sm leading-relaxed">
            Arquitetura e Design de Interiores (Biofilia, Paisagismo e Iluminação) focados em ambientes funcionais, elegantes e bem-estar em Sorocaba e região.
          </p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/_arqtime/" target="_blank" rel="noopener" className="text-zinc-400 hover:text-primary transition-colors uppercase text-[10px] font-bold tracking-widest">@_arqtime</a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-widest text-primary">Atendimento</h4>
            <div className="flex flex-col gap-3 text-zinc-400 text-sm leading-relaxed">
              <p>Sorocaba – SP<br />Projetos Presenciais e Online</p>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-widest text-primary">Contato</h4>
            <div className="flex flex-col gap-4 text-zinc-400 text-sm">
              <div className="flex items-center gap-3 text-zinc-400">
                <span className="material-symbols-outlined text-primary font-light">mail</span>
                <span>Atendimento Online e Presencial</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-zinc-700 uppercase tracking-[0.4em]">© 2026 – SIMONE MARQUES | ARQTIME | SOROCABA – SP</p>
      </div>
    </footer>
  );
};

export default Footer;