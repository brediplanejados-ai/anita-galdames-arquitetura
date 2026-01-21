
import React from 'react';

const Footer: React.FC = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=R.+Teófilo+David+Müzel,+185,+Vila+Ophelia,+Itapeva+-+SP,+18400-816";

  return (
    <footer className="bg-secondary text-white pt-12 pb-24 md:pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="max-w-md space-y-8">
          {/* Logotipo fiel à imagem no rodapé (Versão branca/laranja) */}
          <div className="flex items-center gap-4 group">
            <div className="relative w-14 h-14 flex-shrink-0">
              <div className="absolute top-[15%] left-0 w-full h-[2.5px] bg-white rotate-[-20deg] origin-left"></div>
              <div className="absolute top-[15%] left-[35%] w-[2.5px] h-[70%] bg-white"></div>
              <div className="absolute bottom-[15%] left-0 w-[80%] h-[50%] border-t-[2.5px] border-r-[2.5px] border-white rounded-tr-[40px]"></div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-sans font-light text-3xl tracking-[0.15em] text-white uppercase -mb-1.5 text-shadow-premium">
                ANITA
              </span>
              <span className="font-sans font-bold text-3xl tracking-tight text-white uppercase text-shadow-premium">
                GALDAMES
              </span>
              <span className="font-sans text-xs tracking-[0.7em] text-primary uppercase mt-2 border-t border-white/10 pt-2">
                ARQUITETURA
              </span>
            </div>
          </div>

          <p className="text-zinc-500 text-sm leading-relaxed">
            Arquitetura e Design de Interiores focados em ambientes funcionais, elegantes e personalizados em Itapeva e região.
          </p>
          <div className="flex gap-6">
            <a href="https://wa.me/5515997101903" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest">WhatsApp</a>
            <a href="https://www.instagram.com/anitagaldames_arq/" target="_blank" rel="noopener" className="text-zinc-400 hover:text-primary transition-colors uppercase text-[10px] font-bold tracking-widest">@anitagaldames_arq</a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-widest text-primary">Atendimento</h4>
            <div className="flex flex-col gap-3 text-zinc-400 text-sm leading-relaxed">
              <p>Itapeva – SP<br />Projetos Presenciais e Online</p>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-widest text-primary">Contato</h4>
            <div className="flex flex-col gap-4 text-zinc-400 text-sm">
              <a href="https://wa.me/5515997101903" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-primary font-light">chat</span>
                <span>(15) 99710-1903</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-zinc-700 uppercase tracking-[0.4em]">© 2026 – ANITA GALDAMES ARQUITETURA | ITAPEVA – SP</p>
      </div>
    </footer>
  );
};

export default Footer;