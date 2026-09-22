import { Link } from "react-router-dom";
import {
    Building2,
    Copy,
    Heart,
    Handshake,
    Hammer,
    Package,
    Wrench,
    Check,
} from "lucide-react";

import { useState } from "react";

import mainLogo from "../assets/logo/logo-principal-horizontal.svg";

import "../styles/Colabore.css";

export default function Colabore() {
    const [copiado, setCopiado] = useState(false);

    const pix = "16831427000171";

    async function copiarPix() {
        await navigator.clipboard.writeText(pix);

        setCopiado(true);

        setTimeout(() => {
            setCopiado(false);
        }, 2000);
    }

    return (
        <div className="donation-page">
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

                        <Link to="/colabore" className="nav__active">
                            Colabore
                        </Link>

                        <Link to="/transparencia">
  Transparência
</Link>
                        <Link to="/contato">Contato</Link>

                        <a
                            href="https://www.instagram.com/ongjcv/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagram
                        </a>
                    </nav>

                    <Link to="/colabore" className="button button--solid">
                        Doar agora
                    </Link>
                </div>
            </header>

            <main>
                {/* HERO */}

                <section className="donation-hero">
                    <div className="donation-hero__content">
                        <span className="donation-eyebrow">
                            Venha cultivar com a gente
                        </span>

                        <h1>
                            Aceitamos amor
                            <br />
                            <span>em qualquer valor.</span>
                        </h1>

                        <p>
                            Cada contribuição ajuda a JCV a manter projetos, ampliar ações
                            e continuar cuidando de pessoas e comunidades.
                        </p>

                        <a href="#formas-de-ajudar" className="button donation-hero__button">
                            Quero ajudar
                            <Heart size={18} />
                        </a>
                    </div>
                </section>

                {/* INTRO */}

                <section id="formas-de-ajudar" className="donation-intro">
                    <div className="donation-container">
                        <span className="section-label">Como ajudar</span>

                        <h2>Existem diferentes formas de cultivar com a gente.</h2>

                        <p>
                            Você pode contribuir financeiramente com qualquer valor ou,
                            se representa uma empresa, colaborar oferecendo produtos,
                            serviços, conhecimento ou estrutura que ajudem a fortalecer
                            nossos projetos.
                        </p>
                    </div>
                </section>

                {/* PIX */}

                <section className="pix-section">
                    <div className="donation-container pix-grid">
                        <div className="pix-content">
                            <span className="section-label">Doação financeira</span>

                            <h2>Doe via PIX</h2>

                            <p>
                                Não existe valor mínimo. Toda contribuição faz diferença e
                                ajuda a manter as ações da JCV acontecendo.
                            </p>

                            <div className="pix-card">
                                <div className="pix-card__header">
                                    <div className="pix-symbol">
                                        <span />
                                        <span />
                                    </div>

                                    <div>
                                        <span className="pix-card__label">Chave PIX</span>
                                        <strong>CNPJ</strong>
                                    </div>
                                </div>

                                <div className="pix-key">
                                    <span>{pix}</span>

                                    <button type="button" onClick={copiarPix}>
                                        {copiado ? <Check size={18} /> : <Copy size={18} />}

                                        {copiado ? "Copiado!" : "Copiar"}
                                    </button>
                                </div>

                                <p className="pix-card__tip">
                                    Antes de concluir a transferência, confira os dados do
                                    favorecido apresentados pelo seu banco.
                                </p>
                            </div>
                        </div>

                        <div className="pix-message">
                            <Heart size={42} />

                            <h3>Todo valor importa.</h3>

                            <p>
                                Uma pequena contribuição, somada a muitas outras, ajuda a
                                transformar cuidado em ação.
                            </p>
                        </div>
                    </div>
                </section>

                {/* COLABORAÇÃO EMPRESARIAL */}

                <section className="company-section">
                    <div className="donation-container">
                        <div className="company-heading">
                            <span className="section-label">
                                Colaboração com empresas
                            </span>

                            <h2>
                                Sua empresa também pode colocar conhecimento e estrutura a
                                serviço da comunidade.
                            </h2>

                            <p>
                                Colaborar com a JCV não significa apenas fazer uma doação em
                                dinheiro. Empresas podem contribuir oferecendo serviços,
                                materiais, mão de obra especializada, equipamentos,
                                infraestrutura ou outras soluções que atendam necessidades
                                reais da organização e de seus projetos.
                            </p>
                        </div>

                        <div className="collaboration-grid">
                            <article className="collaboration-card">
                                <Wrench size={30} />

                                <h3>Serviços profissionais</h3>

                                <p>
                                    Empresas e profissionais podem oferecer serviços técnicos,
                                    manutenção, consultoria ou outras especialidades.
                                </p>
                            </article>

                            <article className="collaboration-card">
                                <Hammer size={30} />

                                <h3>Reformas e infraestrutura</h3>

                                <p>
                                    Apoio na melhoria e manutenção dos espaços utilizados pela
                                    JCV e por seus projetos.
                                </p>
                            </article>

                            <article className="collaboration-card">
                                <Package size={30} />

                                <h3>Materiais e equipamentos</h3>

                                <p>
                                    Doação de produtos, materiais, mobiliário, equipamentos ou
                                    insumos necessários às atividades.
                                </p>
                            </article>

                            <article className="collaboration-card">
                                <Building2 size={30} />

                                <h3>Parcerias institucionais</h3>

                                <p>
                                    Projetos conjuntos, campanhas, cessão de estrutura,
                                    conhecimento técnico ou outras formas de cooperação.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* EXEMPLO */}

                <section className="collaboration-example">
                    <div className="donation-container">
                        <div className="collaboration-example__box">
                            <Handshake size={38} />

                            <div>
                                <span className="section-label">Mãos que cultivam</span>

                                <h2>Uma parceria pode assumir muitas formas.</h2>

                                <p>
                                    Uma empresa pode, por exemplo, contribuir reformando um
                                    espaço da sede, oferecendo um serviço especializado,
                                    fornecendo materiais ou disponibilizando sua equipe para
                                    uma necessidade específica. O importante é construir uma
                                    colaboração que gere impacto real.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}

                <section className="donation-cta">
                    <div className="donation-container donation-cta__inner">
                        <div>
                            <span className="section-label">Quer colaborar?</span>

                            <h2>Vamos conversar sobre como sua empresa pode ajudar.</h2>

                            <p>
                                Entre em contato com a JCV e conte o que sua empresa pode
                                oferecer. Juntos podemos encontrar a melhor forma de
                                transformar essa colaboração em impacto.
                            </p>
                        </div>

                        <a
                            href="mailto:jardinscultivandovidas@gmail.com"
                            className="button button--solid"
                        >
                            Quero ser parceiro
                            <Handshake size={18} />
                        </a>
                    </div>
                </section>
            </main>

            <footer className="donation-footer">
                <div className="donation-container donation-footer__inner">
                    <img
                        src={mainLogo}
                        alt="JCV - Jardins Cultivando Vidas"
                        className="donation-footer__logo"
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