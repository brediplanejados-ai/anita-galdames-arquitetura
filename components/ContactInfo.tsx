
import React from 'react';

const ContactInfo: React.FC = () => {
    return (
        <section id="contato" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-secondary p-12 md:p-20 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
                    {/* Background Detail */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

                    <div className="space-y-6 max-w-xl text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                            Atendimento em <br className="hidden md:block" />
                            <span className="text-primary italic">Sorocaba e região</span>
                        </h2>
                        <p className="text-white/60 font-light text-lg leading-relaxed">
                            Projetos presenciais e online, com acompanhamento profissional em todas as etapas.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 w-full md:w-auto">
                        <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                            <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-zinc-400">Onde estamos</p>
                                <p className="font-bold">Sorocaba - SP e Região</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                            <span className="material-symbols-outlined text-primary text-3xl">laptop_mac</span>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-zinc-400">Atendimento</p>
                                <p className="font-bold">Presencial e Digital</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
