import { Link } from "react-router-dom";

import mainLogo from "../assets/logo/logo-principal-horizontal.svg";

import "../styles/Projetos.css";

const oficinas = [
    {
        icon: "🇬🇧",
        title: "Inglês",
        text: "Momentos de aprendizagem, interação e troca de conhecimentos por meio do contato com a língua inglesa, respeitando o ritmo e as potencialidades de cada participante.",
    },
    {
        icon: "🎵",
        title: "Musicoterapia",
        text: "Experiências musicais que favorecem expressão, criatividade, interação, memória e fortalecimento dos vínculos entre os participantes.",
    },
    {
        icon: "🧶",
        title: "Artesanato",
        text: "Atividades manuais que valorizam talentos e conhecimentos, estimulando criação, cooperação, aprendizagem e troca de saberes.",
    },
    {
        icon: "🧠",
        title: "Memória",
        text: "Atividades lúdicas e participativas que estimulam atenção, linguagem, raciocínio, criatividade, recordação e convivência.",
    },
];

export default function Projetos() {
    return (
        <div className="projects-page">
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

                        <Link to="/missao">
                            Missão
                        </Link>

                        <Link to="/projetos" className="nav__active">
                            Projetos e Ações
                        </Link>

                        <Link to="/colabore">
                            Colabore
                        </Link>

                        <Link to="/transparencia">
                            Transparência
                        </Link>

                        <Link to="/contato">
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

                    <Link to="/colabore" className="button button--solid">
                        Doar agora
                    </Link>
                </div>
            </header>

            <main>
                {/* HERO */}

                <section className="projects-hero">
                    <div className="projects-hero__content">
                        <span className="projects-eyebrow">
                            Projetos e ações
                        </span>

                        <h1>
                            Onde vínculos se fortalecem
                            <br />
                            <span>e possibilidades florescem.</span>
                        </h1>

                        <p>
                            A JCV transforma sua missão em ações concretas por meio de
                            projetos que promovem convivência, participação, aprendizagem,
                            cuidado e desenvolvimento para diferentes gerações.
                        </p>

                        <a
                            href="/projetos"
                            className="button projects-hero__button"
                        >
                            Conheça nossos projetos
                            <span>↓</span>
                        </a>
                    </div>
                </section>

                {/* INTRO */}

                <section
                    id="nossos-projetos"
                    className="projects-intro"
                >
                    <div className="projects-container">
                        <span className="section-label">
                            Nossa atuação
                        </span>

                        <h2>
                            Cada projeto nasce de uma necessidade real da comunidade.
                        </h2>

                        <p>
                            Criamos espaços onde pessoas podem conviver, aprender,
                            compartilhar experiências, desenvolver potencialidades e
                            construir novos vínculos.
                        </p>
                    </div>
                </section>

                {/* CONVIVÊNCIA EM AÇÃO */}

                <section className="convivencia-section">
                    <div className="projects-container">
                        <div className="convivencia-card">
                            <div className="convivencia-card__intro">
                                <span className="project-number">
                                    01
                                </span>

                                <span className="section-label">
                                    Serviços de Convivência e Fortalecimento de Vínculos
                                </span>

                                <h2>
                                    Encontros que Transformam
                                </h2>

                                <p>
                                    Serviço de Convivência e Fortalecimento de Vínculos promove
                                    espaços de participação, escuta, troca de experiências e
                                    valorização das histórias de vida.
                                </p>

                                <p>
                                    Por meio de encontros coletivos e atividades
                                    socioeducativas, buscamos fortalecer vínculos familiares e
                                    comunitários, estimular autonomia, participação social,
                                    conhecimento sobre direitos e valorização das
                                    potencialidades de cada participante.
                                </p>
                            </div>

                            <div className="workshops">
                                <div className="workshops__heading">
                                    <span className="section-label">
                                        Nossas oficinas
                                    </span>

                                    <h3>
                                        Conviver também é aprender, compartilhar e criar.
                                    </h3>
                                </div>

                                <div className="workshops-grid">
                                    {oficinas.map((oficina) => (
                                        <article
                                            className="workshop-card"
                                            key={oficina.title}
                                        >
                                            <div className="workshop-card__icon">
                                                {oficina.icon}
                                            </div>

                                            <h4>
                                                {oficina.title}
                                            </h4>

                                            <p>
                                                {oficina.text}
                                            </p>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PÃO DA VIDA */}

                <section className="project-feature project-feature--bread">
                    <div className="projects-container project-feature__grid">
                        <div className="project-feature__heading">
                            <span className="project-number">
                                02
                            </span>

                            <span className="section-label">
                                Cuidado que alimenta
                            </span>

                            <h2>
                                Pão da Vida
                            </h2>
                        </div>

                        <div className="project-feature__content">
                            <p className="project-feature__lead">
                                O Pão da Vida é uma ação de apoio alimentar voltada a
                                pessoas que permanecem por longos períodos em hospitais da Grande Vitória.
                            </p>

                            <p>
                                A iniciativa teve início em 2000, a partir de uma necessidade
                                identificada durante o trabalho de capelania hospitalar no
                                Hospital São Lucas, em Vitória. Ao longo do tempo, a ação foi
                                ampliada para outras instituições de saúde da região.
                            </p>

                            <p>
                                O objetivo é oferecer alimentação a usuários e acompanhantes
                                em situação de vulnerabilidade, especialmente aqueles que
                                passam longos períodos aguardando atendimento ou que não têm
                                acesso às refeições oferecidas pelas instituições.
                            </p>

                            <div className="project-process">
                                <span>Compra</span>
                                <span>Preparo</span>
                                <span>Transporte</span>
                                <span>Distribuição</span>
                                <span>Registro</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TAEKWONDO */}

                <section className="project-feature project-feature--taekwondo">
                    <div className="projects-container project-feature__grid">
                        <div className="project-feature__heading">
                            <span className="project-number">
                                03
                            </span>

                            <span className="section-label">
                                Esporte e desenvolvimento
                            </span>

                            <h2>
                                Taekwondo
                            </h2>
                        </div>

                        <div className="project-feature__content">
                            <p className="project-feature__lead">
                                A JCV também promove atividades voltadas a crianças e
                                adolescentes por meio do esporte.
                            </p>

                            <p>
                                As aulas de Taekwondo proporcionam um espaço de convivência,
                                disciplina e desenvolvimento, estimulando autocontrole,
                                responsabilidade, condicionamento físico e interação social.
                            </p>

                            <p className="project-feature__note">
                                Novas informações sobre turmas, horários e participação
                                serão divulgadas em breve.
                            </p>
                        </div>
                    </div>
                </section>

                {/* BAZAR */}

                <section className="project-feature project-feature--bazaar">
                    <div className="projects-container project-feature__grid">
                        <div className="project-feature__heading">
                            <span className="project-number">
                                04
                            </span>

                            <span className="section-label">
                                Sustentabilidade que gera impacto
                            </span>

                            <h2>
                                Bazar Beneficente
                            </h2>
                        </div>

                        <div className="project-feature__content">
                            <p className="project-feature__lead">
                                O Bazar Beneficente ajuda a transformar doações em recursos
                                para a continuidade das ações da JCV.
                            </p>

                            <p>
                                Os itens recebidos são organizados e disponibilizados a
                                preços acessíveis, beneficiando a comunidade e contribuindo
                                para a sustentabilidade dos projetos sociais da organização.
                            </p>

                            <p>
                                Cada peça que ganha uma nova história também ajuda a manter
                                outras histórias acontecendo.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FECHAMENTO */}

                <section className="projects-message">
                    <div className="projects-container">
                        <div className="projects-message__box">
                            <span className="section-label">
                                Nosso propósito em movimento
                            </span>

                            <h2>
                                Cada ação cultiva alguma coisa.
                            </h2>

                            <p>
                                Um vínculo. Uma oportunidade. Um novo aprendizado.
                                Um espaço de pertencimento.
                            </p>

                            <p>
                                É assim, encontro após encontro, que continuamos cultivando
                                vidas.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}

                <section className="projects-cta">
                    <div className="projects-container projects-cta__inner">
                        <div>
                            <span className="section-label">
                                Venha cultivar com a gente
                            </span>

                            <h2>
                                Existem muitas formas de fazer parte.
                            </h2>

                            <p>
                                Participe das nossas ações, seja voluntário, colabore com
                                projetos ou ajude a JCV a continuar transformando cuidado em
                                ação.
                            </p>
                        </div>

                        <div className="projects-cta__buttons">
                            <Link
                                to="/contato"
                                className="button button--outline"
                            >
                                Quero participar
                            </Link>

                            <Link
                                to="/colabore"
                                className="button button--solid"
                            >
                                Quero apoiar a JCV
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="projects-footer">
                <div className="projects-container projects-footer__inner">
                    <img
                        src={mainLogo}
                        alt="JCV - Jardins Cultivando Vidas"
                        className="projects-footer__logo"
                    />

                    <p>
                        Cultivando convivência, fortalecendo vínculos e valorizando vidas.
                    </p>

                    <p>
                        © 2026 JCV - Jardins Cultivando Vidas.
                    </p>
                </div>
            </footer>
        </div>
    );
}