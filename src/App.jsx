import React, { useState, useRef } from "react";

const MENU_ITEMS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#horario", label: "Horário" },
  { href: "#contato", label: "Contato" },
];

const SERVICOS = [
  {
    titulo: "[SERVIÇO 1]",
    preco: "[PREÇO_SERVIÇO_1]",
    descricao: "[DESCRIÇÃO_SERVIÇO_1]",
    duracao: "[DURAÇÃO_1]",
  },
  {
    titulo: "[SERVIÇO 2]",
    preco: "[PREÇO_SERVIÇO_2]",
    descricao: "[DESCRIÇÃO_SERVIÇO_2]",
    duracao: "[DURAÇÃO_2]",
  },
  {
    titulo: "[SERVIÇO 3]",
    preco: "[PREÇO_SERVIÇO_3]",
    descricao: "[DESCRIÇÃO_SERVIÇO_3]",
    duracao: "[DURAÇÃO_3]",
  },
  {
    titulo: "[SERVIÇO 4]",
    preco: "[PREÇO_SERVIÇO_4]",
    descricao: "[DESCRIÇÃO_SERVIÇO_4]",
    duracao: "[DURAÇÃO_4]",
  },
  {
    titulo: "[SERVIÇO 5]",
    preco: "[PREÇO_SERVIÇO_5]",
    descricao: "[DESCRIÇÃO_SERVIÇO_5]",
    duracao: "[DURAÇÃO_5]",
  },
];

const EQUIPE = [
  {
    nome: "[BARBEIRO 1]",
    especialidade: "[ESPECIALIDADE_1]",
  },
  {
    nome: "[BARBEIRO 2]",
    especialidade: "[ESPECIALIDADE_2]",
  },
  {
    nome: "[BARBEIRO 3]",
    especialidade: "[ESPECIALIDADE_3]",
  },
];

const GALERIA = [
  {
    alt: "Ilustração provisória 1: poste de barbearia",
    legenda: "[LEGENDA_FOTO_1]",
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full"><rect width="200" height="200" fill="#1A1A1A" /><circle cx="100" cy="100" r="84" fill="none" stroke="#C8A15A" /><circle cx="100" cy="30" r="7" fill="#C8A15A" /><rect x="80" y="38" width="40" height="10" rx="3" fill="#C8A15A" /><rect x="88" y="48" width="24" height="104" fill="#F5EFE6" /><rect x="80" y="152" width="40" height="10" rx="3" fill="#C8A15A" /></svg>
    ),
  },
  {
    alt: "Ilustração provisória 2: tesoura",
    legenda: "[LEGENDA_FOTO_2]",
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full"><rect width="200" height="200" fill="#1A1A1A" /><circle cx="100" cy="100" r="84" fill="none" stroke="#C8A15A" /><path d="M82 126L140 46M118 126L60 46" stroke="#C8A15A" strokeWidth="6" strokeLinecap="round" /><circle cx="72" cy="140" r="16" fill="none" stroke="#F5EFE6" strokeWidth="5" /><circle cx="128" cy="140" r="16" fill="none" stroke="#F5EFE6" strokeWidth="5" /><circle cx="100" cy="101" r="4" fill="#F5EFE6"/></svg>
    ),
  },
  {
    alt: "Ilustração provisória 3: navalha",
    legenda: "[LEGENDA_FOTO_3]",
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full"><rect width="200" height="200" fill="#1A1A1A" /><circle cx="100" cy="100" r="84" fill="none" stroke="#C8A15A" /><rect x="40" y="116" width="120" height="14" rx="7" fill="#C8A15A" /></svg>
    ),
  },
];

const DEPOIMENTOS = [
  { texto: "[DEPOIMENTO_1]", autor: "[AUTOR_1]" },
  { texto: "[DEPOIMENTO_2]", autor: "[AUTOR_2]" },
  { texto: "[DEPOIMENTO_3]", autor: "[AUTOR_3]" },
];

const HORARIO = [
  ["Segunda-feira", "[HORARIO_SEG]"],
  ["Terça-feira", "[HORARIO_TER]"],
  ["Quarta-feira", "[HORARIO_QUA]"],
  ["Quinta-feira", "[HORARIO_QUI]"],
  ["Sexta-feira", "[HORARIO_SEX]"],
  ["Sábado", "[HORARIO_SAB]"],
  ["Domingo", "[HORARIO_DOM]"],
];

function ph(text) {
  return <span className="bg-yellow-50/10 px-1 rounded font-mono text-xs border border-yellow-400/60">{text}</span>;
}

function Logo({ className = "w-9 h-9" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true"><circle cx="20" cy="20" r="18.5" fill="none" stroke="#C8A15A" strokeWidth="1.2" /><circle cx="20" cy="20" r="15" fill="none" stroke="#C8A15A" strokeWidth=".6" opacity=".6"/><text x="20" y="26.5" textAnchor="middle" fontFamily="Georgia,serif" fontSize="18" fill="#C8A15A">D</text></svg>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [lb, setLb] = useState({ open: false, index: 0 });
  const lbRef = useRef();
  // Dia da semana js: 0=Dom, 1=Seg, ..., 6=Sab
  const today = new Date().getDay();

  // Fechar lightbox esc
  React.useEffect(() => {
    if (!lb.open) return;
    const esc = (e) => { if (e.key === "Escape") setLb(l => ({ ...l, open: false })); };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [lb.open]);

  return (
    <div className="bg-neutral-900 text-[#F5EFE6] font-sans relative">
      {/* Header fixo */}
      <header className="sticky top-0 z-50 bg-neutral-950/95 border-b border-[#3A342C] shadow-sm">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-6 h-16 px-4 md:px-8">
          <a href="#inicio" className="inline-flex items-center gap-3 focus:outline-latao-500">
            <Logo />
            <span className="font-display font-bold text-2xl tracking-tight"><span className="block text-xs uppercase text-[#C8A15A]">Barbearia</span>do Davi</span>
          </a>
          <nav className="hidden lg:flex gap-2" aria-label="principal">
            {MENU_ITEMS.map(({ href, label }) => (
              <a key={href} href={href} className="px-2 py-2 text-base font-semibold text-[#F5EFE6] uppercase rounded focus:outline-latao-500 hover:text-[#C8A15A] transition" >{label}</a>))}
            <a href="#contato" className="ml-5 btn btn-primario rounded-sm font-bold uppercase px-6 py-2 bg-[#C8A15A] text-[#111111] hover:bg-[#D9B872] transition">Agendar</a>
          </nav>
          <button className="lg:hidden p-2 rounded border border-[#3A342C] text-[#F5EFE6]" aria-label="Abrir menu" onClick={() => setMenu(!menu)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={menu ? "hidden" : "block w-6 h-6"}><path d="M4 7h16M4 12h16M4 17h16"/></svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={menu ? "block w-6 h-6" : "hidden"}><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>
        {menu && (
          <nav className="lg:hidden absolute left-0 right-0 bg-neutral-950 border-b border-[#3A342C] shadow pb-6" aria-label="mobile menu">
            <ul className="flex flex-col">
              {MENU_ITEMS.map(({ href, label }) => (
                <li key={href}><a href={href} className="block px-7 py-4 text-lg font-semibold uppercase focus:outline-latao-500 hover:text-[#C8A15A] transition" onClick={() => setMenu(false)}>{label}</a></li>
              ))}
              <li><a href="#contato" className="mt-2 mx-6 btn btn-primario bg-[#C8A15A] text-[#111111] rounded-sm font-bold uppercase px-6 py-2 w-full block text-center" onClick={() => setMenu(false)}>Agendar</a></li>
            </ul>
          </nav>
        )}
      </header>
      {/* Início / Hero */}
      <main id="conteudo">
        <section id="inicio" className="hero flex flex-col md:flex-row py-14 md:py-24 items-center min-h-[80vh]">
          <div className="max-w-[1200px] mx-auto w-full grid md:grid-cols-2 gap-10 px-4 md:px-8 items-center">
            <div>
              <span className="uppercase tracking-wider text-[#C8A15A] font-semibold">Barbearia · {ph('[CIDADE_UF]')}</span>
              <h1 className="font-display font-bold text-4xl md:text-5xl mt-2 tracking-tight">Barbearia <em className="italic text-[#C8A15A] font-light">do Davi</em></h1>
              <p className="text-lg md:text-xl mt-4 mb-3">{ph('[SLOGAN]')}</p>
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <a href="#contato" className="btn btn-primario rounded-sm font-bold uppercase px-6 py-3 bg-[#C8A15A] text-[#111111] hover:bg-[#D9B872] transition w-full sm:w-auto">Agendar horário</a>
                <a href="#servicos" className="btn btn-contorno rounded-sm font-bold uppercase px-6 py-3 border border-[#C8A15A] text-[#F5EFE6] hover:bg-[#C8A15A] hover:text-[#111111] transition w-full sm:w-auto">Ver serviços</a>
              </div>
              <p className="flex items-center gap-2 mt-8 text-[#A89F91]">
                <svg viewBox="0 0 24 24" fill="none" stroke="#C8A15A" strokeWidth="1.5" className="w-5 h-5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                <span>Horário de hoje: {ph('[HORÁRIO_HOJE]')}</span>
              </p>
            </div>
            <div className="hidden md:block justify-self-center">
              <svg viewBox="0 0 400 480" className="w-full max-w-xs">
                <path d="M40 470V200a160 160 0 0 1 320 0v270" fill="none" stroke="#C8A15A" strokeWidth="1" opacity=".55" />
                <rect x="180" y="150" width="40" height="240" fill="#F5EFE6"/>
                <rect x="170" y="390" width="60" height="16" rx="4" fill="#C8A15A"/>
                <rect x="186" y="406" width="28" height="64" fill="#3A342C"/>
                <circle cx="200" cy="124" r="12" fill="#C8A15A"/>
                <rect x="170" y="134" width="60" height="16" rx="4" fill="#C8A15A"/>
                <g fill="#C8A15A" opacity=".8"><circle cx="110" cy="250" r="2"/><circle cx="290" cy="250" r="2"/><circle cx="200" cy="70" r="2"/></g>
                <path d="M100 470h200" stroke="#C8A15A" strokeWidth="1"/>
              </svg>
            </div>
          </div>
        </section>
        {/* Sobre */}
        <section id="sobre" className="bg-[#F5EFE6] text-[#111111] py-16">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-14 px-4 md:px-8 items-center">
            <div>
              <div className="h-1 w-14 bg-[#C8A15A] mb-5"></div>
              <span className="uppercase tracking-wider text-[#C8A15A] font-semibold text-sm">Desde {ph('[ANO_FUNDACAO]')}</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">Tradição e cuidado em cada detalhe</h2>
              <p className="text-lg mb-2">{ph('[TEXTO_SOBRE]')}</p>
              <p className="text-[#5C554B]">Espaço para 2 a 4 parágrafos sobre a história, o estilo e o atendimento da barbearia, fornecidos pelo cliente.</p>
            </div>
            <div className="mx-auto">
              <div className="relative rounded-md overflow-hidden border border-[#3A342C]">
                <span className="absolute left-2 top-2 z-10 bg-neutral-900 text-[#F5EFE6] px-3 py-[0.3em] text-xs rounded-sm uppercase tracking-widest">Ilustração provisória</span>
                <svg viewBox="0 0 400 300" className="w-full h-[260px] md:h-[320px]"><rect width="400" height="300" fill="#242424"/><rect x="40" y="90" width="320" height="180" fill="#1A1A1A" stroke="#3A342C"/><rect x="70" y="110" width="260" height="40" fill="#111111" stroke="#C8A15A"/><text x="200" y="143" textAnchor="middle" fontFamily="Georgia,serif" fontSize="22" fill="#C8A15A">BARBEARIA</text></svg>
              </div>
              <p className="text-[#5C554B] mt-4">Substituir por {ph('[FOTO_FACHADA_OU_AMBIENTE]')}</p>
            </div>
          </div>
        </section>
        {/* Serviços */}
        <section id="servicos" className="bg-neutral-900 py-16">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <div className="h-1 w-14 bg-[#C8A15A] mx-auto mb-5"></div>
              <span className="uppercase tracking-wider text-[#C8A15A] font-semibold text-sm">Nossos serviços</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-1">Serviços e preços</h2>
              <p className="text-[#A89F91]">Escolha o seu serviço e agende o seu horário.</p>
            </div>
            <ul className="grid md:grid-cols-2 gap-x-16 divide-y divide-[#3A342C] bg-neutral-800 rounded-md shadow-lg">
              {SERVICOS.map((s, i) => (
                <li key={i} className="flex flex-col gap-2 py-7 px-8 first:rounded-t last:rounded-b">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-lg font-semibold
