import { Link } from "react-router-dom";

import mainLogo from "../assets/logo/logo-principal-horizontal.svg";

import "../styles/Missao.css";

import Header from "../components/Header";

const objetivos = [
    "Promover qualidade de vida e dignidade humana",
    "Estimular participação social, comunitária e voluntariado",
    "Fortalecer vínculos familiares e comunitários",
    "Valorizar histórias, saberes e potencialidades",
    "Prevenir situações de isolamento e vulnerabilidade social",
    "Fortalecer o conhecimento sobre direitos e a autonomia",
];

export default function Missao() {
    return (
        <div className="mission-page">
            <Header />

            <main>
                <section className="mission-hero">
                    <div className="mission-hero__content">
                        <span className="mission-eyebrow">
                            Jardins Cultivando Vidas
                        </span>

                        <h1>
                            Nossa missão é
                            <span> cultivar vidas.</span>
                        </h1>

                        <p>
                            A Jardins Cultivando Vidas é uma Organização da Sociedade
                            Civil sem fins econômicos, fundada em 2011, dedicada à
                            assistência social, à promoção da cidadania e à defesa de
                            direitos.
                        </p>
                    </div>
                </section>

                <section className="mission-intro">
                    <div className="mission-container mission-intro__grid">
                        <div>
                            <span className="section-label">Quem somos</span>

                            <h2>
                                Cuidado, acolhimento e oportunidades para a comunidade.
                            </h2>
                        </div>

                        <div className="mission-intro__text">
                            <p>
                                A Jardins Cultivando Vidas é uma Organização da Sociedade
                                Civil de Interesse Público, de direito privado e sem fins
                                econômicos, fundada em 14 de dezembro de 2011.
                            </p>

                            <p>
                                Nossa entidade atua nas áreas de Assistência Social e Defesa
                                da Garantia de Direitos, buscando promover qualidade de vida,
                                fortalecer vínculos e criar oportunidades para pessoas de
                                diferentes gerações.
                            </p>

                            <p>
                                Nossa atuação é pautada pelo respeito às pessoas e pela não
                                discriminação, independentemente de crença religiosa,
                                convicção filosófica ou político-partidária, raça, cor,
                                condição social, idade, profissão, nacionalidade, sexo ou
                                orientação sexual.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mission-statement">
                    <div className="mission-container">
                        <div className="mission-statement__box">
                            <span className="section-label">Nossa missão</span>

                            <h2>
                                Fortalecer pessoas, vínculos e comunidades por meio do
                                cuidado e da ação coletiva.
                            </h2>

                            <p>
                                Nossa missão é contribuir para a melhoria da qualidade de
                                vida por meio de ações de acolhimento, convivência,
                                voluntariado, educação, cultura, esporte, cuidado com o meio
                                ambiente e proteção de crianças e adolescentes.
                            </p>

                            <p>
                                Buscamos criar espaços de apoio, participação e
                                desenvolvimento que fortaleçam a comunidade e ampliem
                                oportunidades para aqueles que fazem parte dela.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="objectives-section">
                    <div className="mission-container">
                        <div className="objectives-section__heading">
                            <span className="section-label">Nossos objetivos</span>

                            <h2>
                                O que queremos cultivar junto com a comunidade.
                            </h2>
                        </div>

                        <div className="objectives-grid">
                            {objetivos.map((objetivo, index) => (
                                <article className="objective-card" key={objetivo}>
                                    <span className="objective-card__number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <p>{objetivo}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mission-cta">
                    <div className="mission-container mission-cta__inner">
                        <div>
                            <span className="section-label">Faça parte</span>

                            <h2>Venha cultivar com a gente.</h2>

                            <p>
                                Voluntários, parceiros e doadores ajudam a transformar nossos
                                objetivos em ações concretas.
                            </p>
                        </div>

                        <div className="mission-cta__buttons">
                            <Link to="/contato" className="button button--solid">
                                Entre em contato
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="mission-footer">
                <div className="mission-container mission-footer__inner">
                    <img
                        src={mainLogo}
                        alt="JCV - Jardins Cultivando Vidas"
                        className="mission-footer__logo"
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