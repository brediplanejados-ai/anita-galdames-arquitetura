
import React from 'react';

const Process: React.FC = () => {
    const steps = [
        {
            number: "01",
            title: "Briefing e entendimento",
            description: "Conversa inicial para compreender necessidades, desejos, rotina e orçamento."
        },
        {
            number: "02",
            title: "Conceito e layout",
            description: "Definição do estilo, layout funcional e proposta estética do ambiente."
        },
        {
            number: "03",
            title: "Projeto executivo",
            description: "Detalhamento técnico completo para execução segura e sem imprevistos."
        },
        {
            number: "04",
            title: "Acompanhamento",
            description: "Suporte durante a execução para garantir que tudo saia como planejado."
        }
    ];

    return (
        <section id="processo" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
                        Metodologia
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary">
                        Como funciona o seu <span className="text-primary italic">projeto</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group p-10 bg-softBackground rounded-[2.5rem] border border-zinc-100 hover:border-primary/20 transition-all duration-500 hover:shadow-premium">
                            <span className="text-7xl font-serif font-black text-primary/5 absolute top-6 right-8 group-hover:text-primary/10 transition-colors">
                                {step.number}
                            </span>
                            <div className="relative z-10 space-y-4">
                                <div className="w-12 h-1 bg-primary rounded-full transition-all group-hover:w-20"></div>
                                <h3 className="text-xl font-bold text-secondary leading-tight min-h-[3rem] flex items-center">
                                    {step.title}
                                </h3>
                                <p className="text-zinc-500 font-light text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
