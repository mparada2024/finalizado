import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="inner-content">
        <div className="left-side">
          <h2>Aqui você sempre Linda!</h2>
          <p>
          A missão do Garota Moda Praia é proporcionar uma experiência de compra única, com produtos de alta qualidade, que atendem a todos os tipos de corpo. Cada coleção é pensada para oferecer conforto e versatilidade, sem abrir mão da sofisticação e das últimas tendências. O site conta com uma navegação fácil e segura, além de um atendimento ao cliente ágil e personalizado.
          </p>
          <Link to="/products" className="see-more-btn">
            <span>Ver Agora</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className="right-side">
          <img src="/images/header-image.png" alt="Products" />
        </div>
      </div>
    </header>
  );
}
