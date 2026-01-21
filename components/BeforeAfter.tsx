
import React from 'react';

const BeforeAfter: React.FC = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
                        Transformação
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary">
                        Resultados que <span className="text-primary italic">impactam</span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Veja como transformamos espaços comuns em ambientes extraordinários, unindo funcionalidade e estética de alto padrão.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Before */}
                    <div className="relative group rounded-[2.5rem] overflow-hidden shadow-xl aspect-square lg:aspect-video">
                        <img
                            src="/assets/before-project.png"
                            alt="Antes da transformação"
                            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        />
                        <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                            <span className="text-white text-xs font-bold uppercase tracking-widest">Antes</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    </div>

                    {/* After */}
                    <div className="relative group rounded-[2.5rem] overflow-hidden shadow-premium aspect-square lg:aspect-video border-2 border-primary/20">
                        <img
                            src="/assets/after-project.png"
                            alt="Depois da transformação"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-8 left-8 bg-primary/90 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 shadow-lg shadow-primary/30">
                            <span className="text-white text-xs font-bold uppercase tracking-widest">Depois</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                </div>

                {/* Info Box */}
                <div className="mt-12 p-8 md:p-12 bg-softBackground rounded-[3rem] border border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-2 text-center md:text-left">
                        <h3 className="text-2xl font-serif font-bold text-secondary">Quer um resultado como este?</h3>
                        <p className="text-zinc-500 font-light max-w-md">Inicie seu projeto hoje e transforme cada detalhe do seu ambiente com nossa expertise em design de interiores.</p>
                    </div>
                    <a href="https://wa.me/5515997101903" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all whitespace-nowrap">
                        Conversar no WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
