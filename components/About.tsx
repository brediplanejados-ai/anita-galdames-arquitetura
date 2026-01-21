
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
                            <a href="https://www.instagram.com/anitagaldames_arq/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-primary font-bold group">
                                <span className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </span>
                                @anitagaldames_arq
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
