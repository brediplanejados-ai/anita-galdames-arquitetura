
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="px-4 py-2 bg-softBackground">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 border-y border-zinc-100 py-4">
        <div className="flex flex-col items-center text-center">
          <span className="text-primary text-4xl font-bold font-serif mb-1 text-shadow-premium">+150</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-zinc-400 text-shadow-sm">Projetos Entregues</span>
        </div>

        <div className="flex gap-12 opacity-30 grayscale items-center">
          <span className="material-symbols-outlined text-5xl">pentagon</span>
          <span className="material-symbols-outlined text-5xl">diamond</span>
          <span className="material-symbols-outlined text-5xl">hexagon</span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
