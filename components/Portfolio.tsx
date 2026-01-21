
import React from 'react';

const Portfolio: React.FC = () => {
    const portfolioImages = [
        {
            url: "https://i.ibb.co/hFvrRKGB/1.png",
            title: "Dormitório Infantil Premium"
        },
        {
            url: "https://i.ibb.co/mVp1JFfG/2.png",
            title: "Dormitório Sophistiquée"
        }
    ];

    return (
        <section id="portfolio" className="py-24 bg-softBackground relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-grid-pattern opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
                        Nosso Portfolio
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary">
                        Projetos que refletem <span className="text-primary italic">estilo</span> e personalidade.
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed text-lg">
                        Ambientes residenciais e comerciais planejados para unir beleza, conforto e eficiência, sempre respeitando o perfil de cada cliente.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {portfolioImages.map((item, index) => (
                        <div
                            key={index}
                            className="group relative rounded-[2rem] overflow-hidden shadow-premium transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="aspect-[4/3] relative">
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                                    <h3 className="text-white text-2xl font-serif font-bold mb-2 transform translateY(20px) group-hover:translateY(0) transition-transform duration-500">
                                        {item.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA at Bottom */}
                <div className="mt-20 text-center">
                    <a
                        href="https://wa.me/5515997101903"
                        className="inline-flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors group text-lg"
                    >
                        Ver projetos completos
                        <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">
                            arrow_right_alt
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
