import React from 'react';
import '../../index.css';

const Sobre = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Sobre a Garota Moda Praia</h1>
      </header>

      <section className="about-content">
        <h2>Quem Somos</h2>
        <p>
          A Garota Moda Praia é uma loja online especializada em moda praia para mulheres de todos os estilos e tamanhos. Nosso objetivo é proporcionar roupas de banho que combinem conforto, estilo e sofisticação, para que você se sinta confiante e linda à beira-mar ou na piscina.
        </p>
        <p>
          Trabalhamos com biquínis, maiôs, saídas de praia e acessórios, todos cuidadosamente escolhidos para valorizar a beleza única de cada mulher. Acreditamos que a moda deve ser inclusiva e que todas as mulheres merecem se sentir incríveis, independentemente de seu tipo de corpo.
        </p>
        <p>
          Com peças exclusivas, modernas e de alta qualidade, buscamos oferecer produtos que atendem às últimas tendências, garantindo que você esteja sempre na moda. A Garota Moda Praia é mais do que uma loja, é um estilo de vida.
        </p>
      </section>

      <footer className="about-footer">
        <p>Aqui voce sempre Linda!</p>
      </footer>
    </div>
  );
};

export default Sobre;