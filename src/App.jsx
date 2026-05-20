const WHATSAPP_NUMBER = '5547992805184';
const WHATSAPP_TEXT = "Olá! Vim pelo site da Pixel's 3D e quero fazer um orçamento de impressão 3D.";

const produtos = [
  'Suporte para celular',
  'Porta canetas',
  'Organizadores',
  'Peças sob encomenda',
  'Suportes personalizados',
  'Brindes e protótipos',
];

const produtosCriados = [
  {
    nome: 'Porta Canetas',
    descricao: 'Organizador de mesa feito em impressão 3D, ideal para canetas, lápis e pequenos acessórios.',
  },
  {
    nome: 'Suporte para Celular',
    descricao: 'Suporte prático para mesa, estudo, trabalho ou uso diário.',
  },
  {
    nome: 'Suporte para Headset',
    descricao: 'Suporte funcional para organizar headset, fones e acessórios.',
  },
  {
    nome: 'Peças Personalizadas',
    descricao: 'Produtos feitos sob encomenda conforme a ideia ou necessidade do cliente.',
  },
];

const beneficios = [
  {
    icon: '✨',
    title: 'Design personalizado',
    text: 'Transformamos sua ideia em uma peça real, funcional e com acabamento profissional.',
  },
  {
    icon: '⚡',
    title: 'Produção ágil',
    text: 'Atendimento direto para tirar sua ideia do papel e iniciar o orçamento com rapidez.',
  },
  {
    icon: '🛡️',
    title: 'Peças resistentes',
    text: 'Impressão em PLA com foco em qualidade, utilidade e boa apresentação.',
  },
  {
    icon: '🚚',
    title: 'Envio para o Brasil',
    text: 'Produzimos peças para clientes de diferentes regiões, com atendimento pelo WhatsApp.',
  },
];

const etapas = [
  'Você chama no WhatsApp',
  'Envia sua ideia ou referência',
  'Fazemos o orçamento',
  'Produzimos sua peça em 3D',
];

function App() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

  const produtoWhatsappUrl = (produto) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Olá! Vim pelo site da Pixel's 3D e quero fazer um orçamento do produto: ${produto}.`
    )}`;

  return (
    <main className="page">
      <section className="hero">
        <div className="grid-bg" />
        <div className="hero-blur hero-blur-one" />
        <div className="hero-blur hero-blur-two" />

        <div className="container hero-content">
          <div className="hero-text fade-up">
            <div className="badge">🖨️ Pixel&apos;s 3D • Impressão 3D sob encomenda</div>

            <h1>Pixel&apos;s 3D transforma sua ideia em peça real.</h1>

            <p className="subtitle">
              Criamos peças impressas em 3D para organização, decoração, suporte, protótipos e soluções personalizadas para o seu dia a dia.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Fazer orçamento agora <span>→</span>
              </a>

              <a className="btn secondary" href="#produtos-prontos">
                Ver Modelos disponíveis
              </a>
            </div>

            <div className="stats">
              <div>
                <strong>3D</strong>
                <span>Produção personalizada</span>
              </div>
              <div>
                <strong>PLA</strong>
                <span>Material versátil</span>
              </div>
              <div>
                <strong>BR</strong>
                <span>Atendimento nacional</span>
              </div>
            </div>
          </div>

          <div className="hero-card fade-up delay">
            <div className="order-card">
              <div className="order-top">
                <div>
                  <span>Pedido em produção</span>
                  <h2>Peça personalizada</h2>
                </div>
                <div className="cube-icon">▣</div>
              </div>

              <div className="piece-preview">
                <div className="floating-cube">
                  <div className="cube-inner">3D</div>
                </div>
              </div>

              <div className="mini-grid">
                <div>
                  <span>Status</span>
                  <strong>Orçamento aberto</strong>
                </div>
                <div>
                  <span>Canal</span>
                  <strong>WhatsApp</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="section dark-section">
        <div className="container">
          <div className="section-heading">
            <span>Por que pedir com a gente?</span>
            <h2>Peças úteis, personalizadas e feitas para resolver problemas reais.</h2>
          </div>

          <div className="cards four">
            {beneficios.map((item) => (
              <article className="benefit-card" key={item.title}>
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE FAZEMOS */}
      <section id="produtos" className="section light-section">
        <div className="container split">
          <div>
            <span className="label-dark">O que podemos fazer</span>
            <h2>De Modelos disponíveis a peças sob medida.</h2>
            <p>
              Atendemos pedidos personalizados para quem precisa de uma peça específica, um suporte diferente, um organizador funcional ou um protótipo para testar uma ideia.
            </p>
            <a className="btn black" href={whatsappUrl} target="_blank" rel="noreferrer">
              Enviar minha ideia 💬
            </a>
          </div>

          <div className="product-grid">
            {produtos.map((produto) => (
              <div className="product-card" key={produto}>
                <span>✓</span>
                <strong>{produto}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelos disponíveis */}
      <section id="produtos-prontos" className="section dark-section">
        <div className="container">
          <div className="section-heading">
            <span>Modelos disponíveis</span>
            <h2>Produtos que já temos criados na Pixel&apos;s 3D.</h2>
          </div>

          <div className="cards four">
            {produtosCriados.map((produto) => (
              <article className="benefit-card" key={produto.nome}>
                <div className="icon">🧩</div>
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>

                <a
                  className="btn primary"
                  href={produtoWhatsappUrl(produto.nome)}
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginTop: '20px', width: '100%', textAlign: 'center' }}
                >
                  Pedir produto <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section dark-section">
        <div className="container">
          <div className="section-heading center">
            <span>Como funciona</span>
            <h2>Seu pedido do WhatsApp até a peça pronta.</h2>
          </div>

          <div className="cards four">
            {etapas.map((etapa, index) => (
              <article className="step-card" key={etapa}>
                <span>0{index + 1}</span>
                <h3>{etapa}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Tem uma ideia? A gente imprime.</h2>
            <p>
              Chame no WhatsApp, envie uma foto, desenho ou referência e receba um orçamento para transformar sua ideia em produto.
            </p>
            <a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Pedir orçamento <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <p>© 2026 Pixel&apos;s 3D. Todos os direitos reservados.</p>
          <p>Peças personalizadas • PLA • Orçamento pelo WhatsApp</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
