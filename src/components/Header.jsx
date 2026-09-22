import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/components/Header.css";
import mainLogo from "../assets/logo/logo-principal-horizontal.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <img
            src={mainLogo}
            alt="JCV - Jardins Cultivando Vidas"
            className="brand__logo"
          />
        </Link>

        <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
          <Link
            to="/"
            className={isActive("/") ? "nav__active" : ""}
            onClick={closeMenu}
          >
            Início
          </Link>

          <Link
            to="/missao"
            className={isActive("/missao") ? "nav__active" : ""}
            onClick={closeMenu}
          >
            Missão
          </Link>

          <Link
            to="/projetos"
            className={isActive("/projetos") ? "nav__active" : ""}
            onClick={closeMenu}
          >
            Projetos e Ações
          </Link>

          <Link
            to="/colabore"
            className={isActive("/colabore") ? "nav__active" : ""}
            onClick={closeMenu}
          >
            Colabore
          </Link>

          <Link
            to="/transparencia"
            className={isActive("/transparencia") ? "nav__active" : ""}
            onClick={closeMenu}
          >
            Transparência
          </Link>

          <Link
            to="/contato"
            className={isActive("/contato") ? "nav__active" : ""}
            onClick={closeMenu}
          >
            Contato
          </Link>

          <a
            href="https://www.instagram.com/ongjcv/"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Instagram
          </a>

          <Link
            to="/colabore"
            className="mobile-donate"
            onClick={closeMenu}
          >
            Doar agora
          </Link>
        </nav>

        <Link
          to="/colabore"
          className="button button--solid header__donate"
        >
          Doar agora
        </Link>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "menu-toggle--open" : ""}`}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}