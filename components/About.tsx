
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="sobre" className="py-24 bg-softBackground">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://i.ibb.co/yFb4CzBk/image.png"
                                alt="Anita Galdames"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full -z-10 blur-2xl opacity-20"></div>
                    </div>

                    <div className="space-y-8">
                        <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
                            A Arquiteta
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary leading-tight">
                            Quem está por trás <br /> dos <span className="text-primary italic">projetos</span>
                        </h2>

                        <p className="text-zinc-600 font-light text-lg leading-relaxed">
                            Anita Galdames é arquiteta especializada em projetos de interiores, com foco em criar ambientes funcionais, elegantes e personalizados. Seu trabalho une técnica, sensibilidade e atenção aos detalhes, sempre buscando soluções que facilitem a rotina e valorizem cada espaço.
                        </p>

                        <div className="pt-4">
                            <a href="https://wa.me/5515997101903" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-primary font-bold group">
                                <span className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined">mail</span>
                                </span>
                                Conhecer mais no Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
