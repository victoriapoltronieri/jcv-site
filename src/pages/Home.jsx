import { Link } from "react-router-dom";
import mainLogo from "../assets/logo/logo-principal-horizontal.svg";
import venhaCultivarImg from "../assets/images/venha-cultivar.jpeg";

import Header from "../components/Header";

const quickLinks = [
    {
        icon: "🌿",
        title: "Missão",
        text: "Conheça nosso propósito",
        color: "green",
        type: "route",
        destination: "/missao",
    },
    {
        icon: "👥",
        title: "Projetos e Ações",
        text: "Nossas iniciativas na comunidade",
        color: "purple",
        type: "route",
        destination: "/projetos",
    },
    {
        icon: "📄",
        title: "Transparência",
        text: "Acesso a documentos e relatórios",
        color: "blue",
        type: "route",
        destination: "/transparencia",
    },
    {
        icon: "📄",
        title: "Transparência",
        text: "Acesso a documentos e relatórios",
        color: "blue",
        type: "anchor",
        destination: "#",
    },
    {
        icon: "✉",
        title: "Contato",
        text: "Fale com a nossa equipe",
        color: "navy",
        type: "route",
        destination: "/contato",
    },
    {
        icon: "◎",
        title: "Instagram",
        text: "Acompanhe nossas ações",
        color: "instagram",
        type: "external",
        destination: "https://www.instagram.com/ongjcv/",
    },
];

export default function Home() {
    return (
        <div className="site">
            <Header />

            <main>
                <section id="inicio" className="hero">
                    <div className="container hero__grid">
                        <div className="hero__content">
                            <h1>
                                Um jardim se cultiva com tempo, cuidado e as mãos certas.
                                <br />
                                <span>Uma comunidade também.</span>
                            </h1>

                            <p>
                                Acreditamos em pessoas que florescem junto com sua comunidades.

                            </p>

                            <div className="hero__actions">
                                <Link to="/missao" className="button button--solid">
                                    Conheça nossa missão
                                    <span>→</span>
                                </Link>

                                <Link to="/colabore" className="button button--outline">
                                    Faça uma doação
                                    <span>♡</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="projetos" className="quick-section">
                    <div className="container">
                        <h2>Acesse rapidamente</h2>

                        <div className="quick-grid">
                            {quickLinks.map((item) => {
                                const content = (
                                    <>
                                        <div
                                            className={`quick-card__icon quick-card__icon--${item.color}`}
                                        >
                                            {item.icon}
                                        </div>

                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </>
                                );

                                if (item.type === "route") {
                                    return (
                                        <Link
                                            key={item.title}
                                            to={item.destination}
                                            className="quick-card"
                                        >
                                            {content}
                                        </Link>
                                    );
                                }

                                if (item.type === "external") {
                                    return (
                                        <a
                                            key={item.title}
                                            href={item.destination}
                                            className="quick-card"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {content}
                                        </a>
                                    );
                                }

                                return (
                                    <a
                                        key={item.title}
                                        href={item.destination}
                                        className="quick-card"
                                    >
                                        {content}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="documentary-section">
                    <div className="container documentary-section__inner">
                        <div className="documentary-section__content">
                            <span className="section-label">
                                Conheça nossa história
                            </span>

                            <h2>
                                Uma história feita de encontros, cuidado e transformação.
                            </h2>

                            <p>
                                Conheça um pouco mais sobre a trajetória da Jardins Cultivando
                                Vidas, as pessoas que fazem parte dessa história e o impacto das
                                ações desenvolvidas pela JCV.
                            </p>

                            <a
                                href="https://www.youtube.com/watch?v=LOt1l717DtE"
                                target="_blank"
                                rel="noreferrer"
                                className="button button--outline"
                            >
                                Assistir no YouTube
                                <span>↗</span>
                            </a>
                        </div>

                        <div className="documentary-section__video">
                            <iframe
                                src="https://www.youtube.com/embed/LOt1l717DtE"
                                title="Documentário Jardins Cultivando Vidas"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </section>

                <section id="colabore" className="partner-section">
                    <div className="container">
                        <div className="partner-banner">
                            <div className="partner-banner__image">
                                <img
                                    src={venhaCultivarImg}
                                    alt="Participantes da JCV em atividade de convivência"
                                />
                            </div>

                            <div className="partner-banner__content">
                                <span className="partner-banner__label">
                                    Faça parte
                                </span>

                                <h2>
                                    Venha cultivar
                                    <br />
                                    <em>com a gente.</em>
                                </h2>

                                <p>
                                    Voluntários, parceiros e doadores ajudam a transformar cuidado,
                                    convivência e boas ideias em ações que fazem a diferença.
                                </p>

                                <Link to="/contato" className="button button--solid">
                                    Seja um parceiro
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer id="contato" className="footer">
                <div className="container">
                    <div className="footer__top">
                        <div className="footer__brand">
                            <img
                                src={mainLogo}
                                alt="JCV - Jardins Cultivando Vidas"
                                className="footer__logo"
                            />

                            <p>Cultivando convivência, fortalecendo vínculos e valorizando vidas.</p>
                        </div>

                        <div className="footer__links">
                            <div>
                                <a href="#inicio">Início</a>
                                <Link to="/colabore">Colabore</Link>
                                <Link to="/contato">Contato</Link>
                            </div>

                            <div>
                                <Link to="/missao">Missão</Link>
                                <Link to="/transparencia">
                                    Transparência
                                </Link>
                                <a
                                    href="https://www.instagram.com/ongjcv/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Instagram
                                </a>
                            </div>

                            <div>
                                <Link to="/projetos">Projetos e Ações</Link>
                            </div>
                        </div>

                        <div className="footer__contact">
                            <p>✉ jardinscultivandovidas@gmail.com</p>
                            <p>☎ (27) 99235-2099 | (27) 3376-0145</p>
                            <p>📍 Vitória, ES</p>

                            <div id="instagram" className="social-links">
                                <a h href="https://wa.me/5527992352099"
                                    target="_blank"
                                    rel="noreferrer">
                                    ◎
                                </a>
                                <a href="https://www.facebook.com/oscip.jcv" target="_blank" rel="noreferrer">
                                    f
                                </a>
                                <a href="https://www.youtube.com/@ongjcv" target="_blank" rel="noreferrer">
                                    ▶
                                </a>
                                <a href="https://www.instagram.com/ongjcv/" target="_blank" rel="noreferrer">
                                    in
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <p>
                            © 2026 JCV - Jardins Cultivando Vidas. Todos os direitos
                            reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}