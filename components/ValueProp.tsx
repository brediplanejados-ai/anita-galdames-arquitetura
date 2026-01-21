
import React from 'react';

const ValueProp: React.FC = () => {
    const differentiators = [
        "Projetos 100% personalizados",
        "Soluções funcionais e estéticas",
        "Atendimento próximo e humanizado",
        "Foco em conforto, praticidade e identidade",
        "Acompanhamento em todas as etapas"
    ];

    return (
        <section id="sobre" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-softBackground -skew-x-12 translate-x-1/2 md:translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
                            Proposta de Valor
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary leading-tight">
                            Arquitetura pensada para <br className="hidden md:block" />
                            quem valoriza <span className="text-primary italic">exclusividade</span>.
                        </h2>

                        <p className="text-zinc-600 font-light text-lg leading-relaxed max-w-xl">
                            Cada projeto é desenvolvido de forma única, respeitando o estilo, as necessidades e o orçamento de cada cliente. Aqui, estética e funcionalidade caminham juntas para criar ambientes que fazem sentido no dia a dia.
                        </p>

                        <div className="pt-4">
                            <a href="https://wa.me/5515997101903" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/30 transition-all hover:bg-secondary hover:scale-105 active:scale-95 text-center">
                                Quero meu projeto exclusivo
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-premium hover:shadow-primary/5 transition-all border border-zinc-100">
                        <ul className="space-y-6">
                            {differentiators.map((item, index) => (
                                <li key={index} className="flex items-start gap-4 group">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1 transition-colors group-hover:bg-primary">
                                        <span className="material-symbols-outlined text-primary text-sm font-bold group-hover:text-white">check</span>
                                    </div>
                                    <span className="text-secondary font-medium text-lg leading-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProp;
