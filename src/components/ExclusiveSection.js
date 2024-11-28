import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
      <div className="page-inner-content">
        <div className="content">
          <div className="left-side">
            <h2>Fio Dental Plus Roxo Neon</h2>
            <p>
            Arrase na praia com o nosso Biquíni Plus Size Exclusivo Roxo Neon, uma peça vibrante que combina estilo, conforto e confiança. Com um tom incrível de roxo neon, este biquíni foi desenhado especialmente para valorizar todas as curvas, proporcionando um caimento perfeito e destacando sua beleza natural.

O top possui alças ajustáveis para maior conforto, e o soutien com bojo estruturado garante suporte e segurança durante todo o uso. A calcinha de cintura média é super confortável, com acabamento liso e sem costura, proporcionando um visual elegante e sem marcação.


            </p>
            <Link to="/products" className="see-more-btn">
              <span>Ver Agora</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
          <div className="right-side">
            <img src="/images/exclusive.png" alt="Smart Band 4" />
          </div>
        </div>
      </div>
    </div>
  );
}
