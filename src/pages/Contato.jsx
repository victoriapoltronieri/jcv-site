import { Link } from "react-router-dom";
import {
    Mail,
    Phone,
    MapPin,
    MessageCircle,
    ArrowUpRight,
} from "lucide-react";

import mainLogo from "../assets/logo/logo-principal-horizontal.svg";

import "../styles/Contato.css";

export default function Contato() {
    return (
        <div className="contact-page">
            <header className="header">
                <div className="container header__inner">
                    <Link to="/" className="brand">
                        <img
                            src={mainLogo}
                            alt="JCV - Jardins Cultivando Vidas"
                            className="brand__logo"
                        />
                    </Link>

                    <nav className="nav">
                        <Link to="/">Início</Link>
                        <Link to="/missao">Missão</Link>
                        <Link to="/projetos">Projetos e Ações</Link>
                        <Link to="/colabore">Colabore</Link>
                        <Link to="/transparencia">
  Transparência
</Link>

                        <Link to="/contato" className="nav__active">
                            Contato
                        </Link>

                        <a
                            href="https://www.instagram.com/ongjcv/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagram
                        </a>
                    </nav>

                    <Link to="/col" className="button button--solid">
                        Doar agora
                    </Link>
                </div>
            </header>

            <main>
                {/* HERO */}

                <section className="contact-hero">
                    <div className="contact-hero__content">
                        <span className="contact-eyebrow">
                            Fale com a JCV
                        </span>

                        <h1>
                            Vamos cultivar
                            <br />
                            <span>essa conversa.</span>
                        </h1>

                        <p>
                            Quer conhecer melhor nossos projetos, colaborar, ser voluntário
                            ou tirar alguma dúvida? Entre em contato com a nossa equipe.
                        </p>
                    </div>
                </section>

                {/* CONTATOS */}

                <section className="contact-section">
                    <div className="contact-container">
                        <div className="contact-section__heading">
                            <span className="section-label">Canais de contato</span>

                            <h2>Escolha a melhor forma de falar com a gente.</h2>

                            <p>
                                Estamos disponíveis para conversar sobre projetos,
                                voluntariado, doações, parcerias e outras formas de
                                colaboração com a JCV.
                            </p>
                        </div>

                        <div className="contact-grid">
                            {/* EMAIL */}

                            <a
                                href="mailto:jardinscultivandovidas@gmail.com"
                                className="contact-card"
                            >
                                <div className="contact-card__icon">
                                    <Mail size={28} />
                                </div>

                                <div>
                                    <span className="contact-card__label">E-mail</span>

                                    <h3>Envie uma mensagem</h3>

                                    <p>
                                        jardinscultivandovidas@gmail.com
                                    </p>
                                </div>

                                <ArrowUpRight
                                    size={20}
                                    className="contact-card__arrow"
                                />
                            </a>

                            {/* TELEFONE 1 */}

                            <a
                                href="https://wa.me/5527992352099"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-card"
                            >
                                <div className="contact-card__icon">
                                    <Phone size={28} />
                                </div>

                                <div>
                                    <span className="contact-card__label">
                                        Celular | WhatsApp
                                    </span>

                                    <h3>Fale diretamente conosco</h3>

                                    <p>(27) 99235-2099</p>
                                </div>

                                <ArrowUpRight
                                    size={20}
                                    className="contact-card__arrow"
                                />
                            </a>

                            {/* TELEFONE 2 */}

                            <a
                                href="https://wa.me/552733760145"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-card"
                            >
                                <div className="contact-card__icon">
                                    <Phone size={28} />
                                </div>

                                <div>
                                    <span className="contact-card__label">
                                        Telefone | WhatsApp
                                    </span>

                                    <h3>Contato institucional</h3>

                                    <p>(27) 3376-0145</p>
                                </div>

                                <ArrowUpRight
                                    size={20}
                                    className="contact-card__arrow"
                                />
                            </a>

                            {/* LOCALIZAÇÃO */}
                            <a href="https://maps.app.goo.gl/C1r8oDTsEqTFe8wZ6" target="_blank" rel="noreferrer">
                                <div className="contact-card contact-card--static">
                                    <div className="contact-card__icon">
                                        <MapPin size={28} />
                                    </div>

                                    <div>
                                        <span className="contact-card__label">
                                            Localização
                                        </span>

                                        <h3>Estamos no Espírito Santo</h3>

                                        <p>Vitória, ES</p>
                                    </div>
                                    <ArrowUpRight
                                        size={20}
                                        className="contact-card__arrow"
                                    />
                                </div>

                            </a>
                        </div>
                    </div>
                </section>

                {/* REDES SOCIAIS */}

                <section className="social-section">
                    <div className="contact-container">
                        <div className="social-section__content">
                            <div>
                                <span className="section-label">
                                    Redes sociais
                                </span>

                                <h2>
                                    Acompanhe a JCV também pelas redes.
                                </h2>

                                <p>
                                    Veja nossos projetos, atividades, campanhas e ações mais
                                    recentes.
                                </p>
                            </div>

                            <div className="social-buttons">
                                <a
                                    href="https://www.instagram.com/ongjcv/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-button"
                                >
                                    <span className="social-button__text-icon">in</span>

                                    <div>
                                        <span>Instagram</span>
                                        <strong>@ongjcv</strong>
                                    </div>

                                    <ArrowUpRight size={18} />
                                </a>

                                <a
                                    href="https://www.facebook.com/oscip.jcv/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-button"
                                >
                                    <span className="social-button__text-icon">f</span>

                                    <div>
                                        <span>Facebook</span>
                                        <strong>Jardins Cultivando Vidas</strong>
                                    </div>

                                    <ArrowUpRight size={18} />
                                </a>

                                <a
                                    href="https://www.youtube.com/@ongjcv"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-button"
                                >
                                    <span className="social-button__text-icon">▶</span>

                                    <div>
                                        <span>YouTube</span>
                                        <strong>ONG JCV</strong>
                                    </div>

                                    <ArrowUpRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHATSAPP CTA */}

                <section className="contact-cta">
                    <div className="contact-container contact-cta__inner">
                        <div className="contact-cta__icon">
                            <MessageCircle size={34} />
                        </div>

                        <div>
                            <span className="section-label">
                                Prefere WhatsApp?
                            </span>

                            <h2>Converse diretamente com a JCV.</h2>

                            <p>
                                Clique no botão e envie uma mensagem para nossa equipe.
                            </p>
                        </div>

                        <a
                            href="https://wa.me/5527992352099"
                            target="_blank"
                            rel="noreferrer"
                            className="button button--solid"
                        >
                            Abrir WhatsApp
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                </section>
            </main>

            <footer className="contact-footer">
                <div className="contact-container contact-footer__inner">
                    <img
                        src={mainLogo}
                        alt="JCV - Jardins Cultivando Vidas"
                        className="contact-footer__logo"
                    />

                    <p>
                        Cultivando convivência, fortalecendo vínculos e valorizando vidas.
                    </p>

                    <p>© 2026 JCV - Jardins Cultivando Vidas.</p>
                </div>
            </footer>
        </div>
    );
}
