import React, { useState } from 'react'

const NAV = [
    { id: "inicio", label: "Início" },
    { id: "servicos", label: "Serviços" },
    { id: "galeria", label: "Galeria" },
    { id: "depoimentos", label: "Depoimentos" },
    { id: "contato", label: "Contato" },
    { id: "agendar", label: "Agendar" }
]

const SECTIONS = [
    { id: "servicos", title: "Nossos Serviços", body: "Tradição e modernidade para todos os estilos. Conheça nossos principais serviços:", items: [{ title: "Corte Masculino", detail: "Corte na tesoura ou máquina, do clássico ao moderno.", meta: "R$ 40" },
        { title: "Barba Completa", detail: "Aparar, desenhar e hidratar sua barba.", meta: "R$ 25" },
        { title: "Corte Infantil", detail: "Ambiente dedicado para crianças.", meta: "R$ 30" },
        { title: "Sobrancelha Navalhada", detail: "Acabamento impecável com navalha.", meta: "R$ 10" }] },
    { id: "galeria", title: "Nossa Galeria", body: "Veja alguns dos nossos melhores cortes, clientes e momentos na Barbearia do Davi.", items: [] },
    { id: "depoimentos", title: "Depoimentos", body: "Veja o que falam nossos clientes:", items: [{ title: "João Santos", detail: "Melhor barbearia do bairro! Atendimento excelente e ambiente top.", meta: "" },
        { title: "Lucas Ferreira", detail: "Sempre saio satisfeito. Pontualidade e profissionalismo.", meta: "" }] },
    { id: "agendar", title: "Agende Seu Horário", body: "Evite espera! Atendimento com hora marcada pelo WhatsApp.", items: [] }
]

const CONTACT = {
  phone: "(99) 99999-9999",
  email: "contato@barbeariadodavi.com",
  address: "Av. Central, 1234 - Bairro Centro, Cidade/UF",
  whatsappHref: "https://wa.me/5599999999999",
}

export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="sticky top-0 z-20 border-b border-stone-800 bg-stone-900/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <a href="#inicio" className="font-semibold tracking-tight">Barbearia do Davi</a>
          <button type="button" className="rounded-md px-3 py-1 text-sm md:hidden bg-amber-500 hover:bg-amber-400 text-stone-950" onClick={() => setOpen(!open)} aria-expanded={open}>Menu</button>
          <nav className={(open ? 'flex' : 'hidden') + ' absolute left-0 right-0 top-full flex-col gap-2 border-b border-stone-800 bg-stone-900 px-4 py-3 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0'}>
            {NAV.map((item) => (
              <a key={item.id} href={"#" + item.id} className="text-sm text-stone-400 hover:text-amber-400" onClick={() => setOpen(false)}>{item.label}</a>
            ))}
          </nav>
        </div>
      </header>
      <main>
        <section id="inicio" className="mx-auto grid max-w-5xl gap-8 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-400">Seu estilo começa aqui</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Barbearia do Davi</h1>
            <p className="max-w-xl text-lg text-stone-400">Corte moderno, barba bem feita e atendimento de verdade. Agende já seu horário!</p>
            <a href="https://wa.me/5599999999999" className="inline-flex rounded-full px-5 py-3 text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950">Agendar via WhatsApp</a>
          </div>
          <div className="rounded-3xl border border-stone-800 bg-stone-900 p-8 shadow-xl ring-1 ring-amber-500/40">
            <p className="text-sm text-stone-400">Destaque</p>
            <p className="mt-3 text-2xl font-semibold">Barbearia do Davi</p>
            <p className="mt-2 text-stone-400">Seu estilo começa aqui</p>
          </div>
        </section>
        {SECTIONS.map((section) => (
          <section key={section.id} id={section.id} className="mx-auto max-w-5xl px-4 py-12">
            <h2 className="text-3xl font-semibold">{section.title}</h2>
            {section.body ? <p className="mt-3 max-w-3xl text-stone-400">{section.body}</p> : null}
            {section.items.length ? (
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {section.items.map((item, index) => (
                  <li key={index} className="rounded-2xl border border-stone-800 bg-stone-900 p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      {item.meta ? <span className="text-sm text-amber-400">{item.meta}</span> : null}
                    </div>
                    {item.detail ? <p className="mt-2 text-sm text-stone-400">{item.detail}</p> : null}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
        <section id="contato" className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-3xl font-semibold">Contato</h2>
          <div className="mt-6 grid gap-4 rounded-3xl border border-stone-800 bg-stone-900 p-6 md:grid-cols-3">
            <div><p className="text-sm text-stone-400">Telefone</p><p className="mt-1 font-medium">{CONTACT.phone || "A definir"}</p></div>
            <div><p className="text-sm text-stone-400">E-mail</p>{CONTACT.email ? <a className="text-amber-400" href={"mailto:" + CONTACT.email}>{CONTACT.email}</a> : <p className="mt-1">A definir</p>}</div>
            <div><p className="text-sm text-stone-400">Endereço</p><p className="mt-1 font-medium">{CONTACT.address || "A definir"}</p></div>
          </div>
          {CONTACT.whatsappHref ? <a href={CONTACT.whatsappHref} className="mt-6 inline-flex rounded-full px-5 py-3 text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950">WhatsApp</a> : null}
        </section>
      </main>
      <footer className="border-t border-stone-800 px-4 py-8 text-center text-sm text-stone-400">
        <p>Barbearia do Davi · © 2024 Barbearia do Davi · Site por Nexo Software. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
