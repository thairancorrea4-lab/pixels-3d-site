import { useState } from 'react';

const WHATSAPP_NUMBER = '5547992805184';

const WHATSAPP_TEXT =
  "Olá! Vim pelo site da Pixel's 3D e quero fazer um orçamento de impressão 3D.";

const produtos = [
  'Suporte para celular',
  'Porta canetas',
  'Organizadores',
  'Peças sob encomenda',
  'Peças personalizadas',
  'Brindes e protótipos',
];

const produtosCriados = [
  {
    nome: 'Porta Canetas',
    descricao:
      'Suporte para canetas feito em impressão 3D, ideal para canetas, lápis.',
    imagens: [
      '/produtos/Porta-canetas1.png.jpeg',
      '/produtos/Porta-canetas2.png.jpeg',
      '/produtos/Porta-canetas3.png.jpeg',
      '/produtos/Porta-canetas4.png.jpeg',
      '/produtos/Porta-canetas5.png.jpeg',
    ],
  },
  {
    nome: 'Suporte para Celular',
    descricao: 'Suporte prático para mesa, estudo, trabalho ou uso diário.',
    imagens: [
    '/produtos/Suporte-celular1.png.jpeg',
    '/produtos/Suporte-celular2.png.jpeg',
    '/produtos/Suporte-celular3.png.jpeg',
  ],
  },
  {
    nome: 'Suporte para Headset',
    descricao: 'Suporte funcional para organizar headset, fones e acessórios.',
    imagens: [
      '/produtos/Suporte-headset1.png.png',
      '/produtos/Suporte-headset2.png.png',
    ],
  },
  {
    nome: 'Peças Personalizadas',
    descricao: 'Produtos feitos sob encomenda conforme a ideia ou necessidade do cliente.',
    imagens: [
      '/produtos/Produtos-personalizados1.png.png',
      
    ],
  },
];

const beneficios = [
  {
    icon: '✨',
    title: 'Design personalizado',
    text: 'Transformamos sua ideia em uma peça real, funcional e bem acabada.',
  },
  {
    icon: '⚡',
    title: 'Produção ágil',
    text: 'Atendimento direto para tirar sua ideia do papel com rapidez.',
  },
  {
    icon: '🛡️',
    title: 'Peças resistentes',
    text: 'Impressão em PLA com foco em qualidade, utilidade e apresentação.',
  },
  {
    icon: '🚚',
    title: 'Envio para o Brasil',
    text: 'Produzimos peças para clientes de diferentes regiões.',
  },
];

const etapas = [
  'Você chama no WhatsApp',
  'Envia sua ideia ou referência',
  'Recebe o orçamento',
  'Produzimos sua peça',
];

function ProdutoCard({ produto, produtoWhatsappUrl }) {
  const [imagemAtual, setImagemAtual] = useState(0);

  const imagens = produto.imagens || [];
  const temImagem = imagens.length > 0;
  const temMaisDeUmaImagem = imagens.length > 1;

  const imagemAnterior = () => {
    setImagemAtual((atual) => (atual === 0 ? imagens.length - 1 : atual - 1));
  };

  const proximaImagem = () => {
    setImagemAtual((atual) => (atual === imagens.length - 1 ? 0 : atual + 1));
  };

  return (
    <article className="catalog-card">
      {temImagem ? (
        <div className="product-carousel">
          <img className="product-image" src={imagens[imagemAtual]} alt={produto.nome} />

          {temMaisDeUmaImagem && (
            <>
              <button
                className="carousel-arrow left"
                type="button"
                onClick={imagemAnterior}
                aria-label="Imagem anterior"
              >
                ‹
              </button>

              <button
                className="carousel-arrow right"
                type="button"
                onClick={proximaImagem}
                aria-label="Próxima imagem"
              >
                ›
              </button>

              <div className="carousel-indicators">
                {imagens.map((imagem, index) => (
                  <button
                    key={imagem}
                    type="button"
                    className={index === imagemAtual ? 'indicator active' : 'indicator'}
                    onClick={() => setImagemAtual(index)}
                    aria-label={`Ver imagem ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="product-placeholder">3D</div>
      )}

      <div className="catalog-info">
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>

        <a
          className="button button-light full"
          href={produtoWhatsappUrl(produto.nome)}
          target="_blank"
          rel="noreferrer"
        >
          Pedir produto
        </a>
      </div>
    </article>
  );
}

function App() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_TEXT
  )}`;

  const produtoWhatsappUrl = (produto) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Olá! Vim pelo site da Pixel's 3D e quero fazer um orçamento do produto: ${produto}.`
    )}`;

  return (
    <main className="page">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="tag">Pixel&apos;s 3D • Impressão 3D</span>

            <h1>Transformamos sua ideia em.</h1>

            <p>
              Criamos peças impressas em 3D para organização, decoração, suporte,
              protótipos e soluções personalizadas para o dia a dia.
            </p>

            <div className="hero-actions">
              <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
                Fazer orçamento
              </a>

              <a className="button button-dark" href="#modelos">
                Ver modelos
              </a>
            </div>
          </div>

          <div className="hero-preview">
            <div className="preview-card">
              <span>Pedido em produção</span>
              <strong>Peça personalizada</strong>

              <div className="preview-object">
                <div>3D</div>
              </div>

              <small>Orçamento direto pelo WhatsApp</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span>Por que pedir com a gente?</span>
            <h2>Peças úteis, personalizadas e feitas para resolver problemas reais.</h2>
          </div>

          <div className="grid four">
            {beneficios.map((item) => (
              <article className="minimal-card" key={item.title}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light" id="produtos">
        <div className="container split">
          <div>
            <span className="label">O que podemos fazer</span>
            <h2>De modelos disponíveis a peças sob medida.</h2>
            <p>
              Atendemos pedidos personalizados para quem precisa de uma peça específica,
              um suporte diferente, um organizador funcional, qualquer ideia que seja modelável.
            </p>

            <a className="button button-black" href={whatsappUrl} target="_blank" rel="noreferrer">
              Enviar minha ideia
            </a>
          </div>

          <div className="service-grid">
            {produtos.map((produto) => (
              <div className="service-card" key={produto}>
                <span>✓</span>
                <strong>{produto}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="modelos">
        <div className="container">
          <div className="section-title">
            <span>Modelos disponíveis</span>
            <h2>Produtos que já foram criados pela Pixel&apos;s 3D.</h2>
          </div>

          <div className="catalog-grid">
            {produtosCriados.map((produto) => (
              <ProdutoCard
                key={produto.nome}
                produto={produto}
                produtoWhatsappUrl={produtoWhatsappUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title center">
            <span>Como funciona</span>
            <h2>Seu pedido do WhatsApp até a peça pronta.</h2>
          </div>

          <div className="grid four">
            {etapas.map((etapa, index) => (
              <article className="step-card" key={etapa}>
                <span>0{index + 1}</span>
                <h3>{etapa}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container">
          <div className="cta-box">
            <h2>Tem uma ideia? A gente imprime.</h2>
            <p>
              Chame no WhatsApp, envie uma foto, desenho ou referência e receba um
              orçamento para transformar sua ideia em produto.
            </p>

            <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
              Pedir orçamento
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <p>© 2024 Pixel&apos;s 3D. Todos os direitos reservados.</p>
          <p>Peças personalizadas • PLA • Orçamento pelo WhatsApp</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
