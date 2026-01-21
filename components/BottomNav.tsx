
import React from 'react';

const NavItem = ({ icon, label, active = false, href = "#" }: { icon: string, label: string, active?: boolean, href?: string }) => (
  <a
    href={href}
    target={href.startsWith('http') ? "_blank" : "_self"}
    rel={href.startsWith('http') ? "noopener noreferrer" : ""}
    className={`flex flex-col items-center gap-1.5 transition-colors ${active ? 'text-primary' : 'text-zinc-500'}`}
  >
    <span className={`material-symbols-outlined text-2xl ${active ? 'fill-1 font-bold' : ''}`}>{icon}</span>
    <span className="text-[9px] font-bold uppercase tracking-tighter leading-none text-shadow-sm">{label}</span>
  </a>
);

const BottomNav: React.FC = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=R.+Teófilo+David+Müzel,+185,+Vila+Ophelia,+Itapeva+-+SP,+18400-816";

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-softBackground/95 backdrop-blur-xl border-t border-zinc-100 flex items-center justify-around px-6 pb-4 z-50 shadow-premium">
      <NavItem icon="home" label="Início" active />
      <NavItem icon="imagesmode" label="Projetos" href="#portfolio" />
      <NavItem icon="brand_awareness" label="WhatsApp" href="https://wa.me/5515997101903" />
      <NavItem icon="location_on" label="Onde estamos" href={googleMapsUrl} />
    </nav>
  );
};

export default BottomNav;
