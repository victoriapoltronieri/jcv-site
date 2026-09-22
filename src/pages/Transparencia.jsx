import { Link } from "react-router-dom";

import mainLogo from "../assets/logo/logo-principal-horizontal.svg";

import "../styles/Transparencia.css";

const diretoria = [
    {
        cargo: "Presidente",
        nome: "Eliane Cordeiro Pereira Borges",
    },
    {
        cargo: "Vice-Presidente",
        nome: "Ângela da Penha Trancoso Patrocínio Maia",
    },
    {
        cargo: "Secretária",
        nome: "Glaucia Duarte Lima Albert Lima",
    },
    {
        cargo: "Tesoureira",
        nome: "Eliana Gonçalves Ferreira dos Reis",
    },
];

const conselhoFiscal = {
    titulares: [
        "Robertson Wesley Monteiro Pires",
        "Luis Alejandro Sales Álvarez",
    ],
    suplentes: [
        "Edleia Berger Leitão",
        "Moisés Gonsalves Freitas",
    ],
};

const documentosInstitucionais = [
    {
        titulo: "Estatuto Social",
        descricao:
            "Documento que estabelece a organização, os objetivos e as regras de funcionamento da JCV.",
        arquivo: "/documentos/estatuto-social-jcv.pdf",
    },
    {
        titulo: "Ata de Eleição e Posse da Diretoria",
        descricao:
            "Documento referente à eleição e posse da atual Diretoria da JCV.",
        arquivo: "/documentos/ata-eleicao-diretoria-2024.pdf",
    },
    {
        titulo: "Inscrição no COMASV",
        descricao:
            "Comprovante de inscrição da JCV no Conselho Municipal de Assistência Social de Vitória.",
        arquivo: "/documentos/inscricao-comasv.pdf",
    },
];

const relatorios = [
    {
        titulo: "Relatório Anual 2025",
        descricao:
            "Relatório das atividades e ações desenvolvidas pela JCV durante o ano de 2025.",
        arquivo: "/documentos/relatorio-anual-2025.pdf",
    },
];

const demonstracoes = [
    {
        titulo: "Balanço Patrimonial 2025",
        descricao:
            "Documentos contábeis e financeiros referentes ao exercício de 2025.",
        arquivo: "/documentos/ecd-2025-balanco.pdf",
    },
    {
        titulo: "Demonstração das Mutações do Patrimônio Líquido 2025",
        descricao:
            "Documentos contábeis e financeiros referentes ao exercício de 2025.",
        arquivo: "/documentos/ecd-2025-dmpl.pdf",
    },
    {
        titulo: "Demonstração de Resultado do Exercício 2025",
        descricao:
            "Documentos contábeis e financeiros referentes ao exercício de 2025.",
        arquivo: "/documentos/ecd-2025-dre.pdf",
    },
    {
        titulo: "Recibo de Entrega de Escrituração Contábil Digital 2025",
        descricao:
            "Documentos contábeis e financeiros referentes ao exercício de 2025.",
        arquivo: "/documentos/ecd-2025-recibo.pdf",
    },
];

export default function Transparencia() {
    return (
        <div className="transparency-page">
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

                        <Link to="/transparencia" className="nav__active">
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

                <section className="transparency-hero">
                    <div className="transparency-hero__content">
                        <span className="transparency-eyebrow">
                            Transparência
                        </span>

                        <h1>
                            Confiança também se
                            <br />
                            <span>cultiva com transparência.</span>
                        </h1>

                        <p>
                            Aqui você encontra informações institucionais, documentos,
                            dados de governança, relatórios e demonstrações da Jardins
                            Cultivando Vidas.
                        </p>

                        <a
                            href="#documentos"
                            className="button transparency-hero__button"
                        >
                            Acessar documentos
                            <span>↓</span>
                        </a>
                    </div>
                </section>

                {/* INFORMAÇÕES INSTITUCIONAIS */}

                <section className="institutional-section">
                    <div className="transparency-container">
                        <div className="section-heading">
                            <span className="section-label">
                                Informações institucionais
                            </span>

                            <h2>Conheça os dados da JCV</h2>

                            <p>
                                A Jardins Cultivando Vidas é uma organização da sociedade
                                civil sem fins econômicos que desenvolve ações de assistência
                                social, convivência e fortalecimento de vínculos.
                            </p>
                        </div>

                        <div className="institutional-grid">
                            <div className="institutional-card">
                                <span>CNPJ</span>
                                <strong>16.831.427/0001-71</strong>
                            </div>

                            <div className="institutional-card">
                                <span>Fundação</span>
                                <strong>14 de dezembro de 2011</strong>
                            </div>

                            <div className="institutional-card">
                                <span>Registro COMASV</span>
                                <strong>Inscrição nº 063</strong>
                            </div>

                            <div className="institutional-card">
                                <span>Área de atuação</span>
                                <strong>Proteção Social Básica</strong>
                            </div>

                            <div className="institutional-card institutional-card--wide">
                                <span>Serviço socioassistencial</span>
                                <strong>
                                    Serviço de Convivência e Fortalecimento de Vínculos para
                                    Adultos e Idosos
                                </strong>
                            </div>

                            <div className="institutional-card institutional-card--wide">
                                <span>Sede</span>

                                <strong>
                                    Rua Carlos Delgado Pinto, 761
                                    <br />
                                    Jardim Camburi, Vitória - ES
                                </strong>

                                <a
                                    href="https://maps.app.goo.gl/Y7rQB4Bhwchx7tnz7"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="institutional-card__map-link"
                                >
                                    Ver localização ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GOVERNANÇA */}

                <section className="governance-section">
                    <div className="transparency-container">
                        <div className="governance-heading">
                            <span className="section-label">Governança</span>

                            <h2>Diretoria da JCV</h2>

                            <p>
                                Mandato de 1º de julho de 2024 a 30 de junho de 2027.
                            </p>
                        </div>

                        <div className="board-grid">
                            {diretoria.map((membro) => (
                                <article
                                    className="board-card"
                                    key={membro.cargo}
                                >
                                    <span>{membro.cargo}</span>

                                    <h3>{membro.nome}</h3>
                                </article>
                            ))}
                        </div>

                        <div className="fiscal-board">
                            <div>
                                <span className="section-label">
                                    Conselho Fiscal
                                </span>

                                <h3>Conselho Fiscal da JCV</h3>

                                <p>
                                    O Conselho Fiscal acompanha e fiscaliza os atos de gestão
                                    administrativa e financeira da organização.
                                </p>
                            </div>

                            <div className="fiscal-board__members">
                                <div className="fiscal-group">
                                    <span className="fiscal-group__title">
                                        Membros titulares
                                    </span>

                                    {conselhoFiscal.titulares.map((nome) => (
                                        <div
                                            className="fiscal-member"
                                            key={nome}
                                        >
                                            {nome}
                                        </div>
                                    ))}
                                </div>

                                <div className="fiscal-group">
                                    <span className="fiscal-group__title">
                                        Membros suplentes
                                    </span>

                                    {conselhoFiscal.suplentes.map((nome) => (
                                        <div
                                            className="fiscal-member"
                                            key={nome}
                                        >
                                            {nome}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DOCUMENTOS */}

                <section
                    id="documentos"
                    className="documents-section"
                >
                    <div className="transparency-container">
                        <div className="section-heading">
                            <span className="section-label">
                                Documentos institucionais
                            </span>

                            <h2>Documentos públicos da JCV</h2>

                            <p>
                                Consulte os principais documentos que registram a
                                constituição, governança e regularidade institucional da
                                organização.
                            </p>
                        </div>

                        <div className="documents-grid">
                            {documentosInstitucionais.map((documento) => (
                                <article
                                    className="document-card"
                                    key={documento.titulo}
                                >
                                    <div className="document-card__icon">
                                        PDF
                                    </div>

                                    <div className="document-card__content">
                                        <h3>{documento.titulo}</h3>

                                        <p>{documento.descricao}</p>

                                        <a
                                            href={documento.arquivo}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Visualizar documento
                                            <span>↗</span>
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATÓRIOS ANUAIS */}

                <section className="reports-section">
                    <div className="transparency-container">
                        <div className="section-heading">
                            <span className="section-label">
                                Relatórios anuais
                            </span>

                            <h2>Atividades e resultados</h2>

                            <p>
                                Os relatórios anuais apresentam as principais ações,
                                atividades e resultados desenvolvidos pela JCV em cada
                                exercício.
                            </p>
                        </div>

                        <div className="report-list">
                            {relatorios.map((relatorio) => (
                                <article
                                    className="report-row"
                                    key={relatorio.titulo}
                                >
                                    <div>
                                        <h3>{relatorio.titulo}</h3>
                                        <p>{relatorio.descricao}</p>
                                    </div>

                                    {relatorio.arquivo === "#" ? (
                                        <span className="document-status">
                                            {relatorio.status}
                                        </span>
                                    ) : (
                                        <a
                                            href={relatorio.arquivo}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Abrir PDF ↗
                                        </a>
                                    )}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINANCEIRO */}

                <section className="financial-section">
                    <div className="transparency-container">
                        <div className="section-heading">
                            <span className="section-label">
                                Prestação de contas
                            </span>

                            <h2>Demonstrações contábeis e financeiras</h2>

                            <p>
                                Consulte os documentos relacionados à situação contábil e
                                financeira da organização.
                            </p>
                        </div>

                        <div className="report-list">
                            {demonstracoes.map((documento) => (
                                <article
                                    className="report-row"
                                    key={documento.titulo}
                                >
                                    <div>
                                        <h3>{documento.titulo}</h3>
                                        <p>{documento.descricao}</p>
                                    </div>

                                    {documento.arquivo === "#" ? (
                                        <span className="document-status">
                                            {documento.status}
                                        </span>
                                    ) : (
                                        <a
                                            href={documento.arquivo}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Abrir PDF ↗
                                        </a>
                                    )}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* COMPROMISSO */}

                <section className="transparency-message">
                    <div className="transparency-container">
                        <div className="transparency-message__box">
                            <span className="section-label">
                                Nosso compromisso
                            </span>

                            <h2>
                                Transparência fortalece relações de confiança.
                            </h2>

                            <p>
                                A JCV acredita que compartilhar informações sobre sua
                                estrutura, atuação e utilização de recursos é parte
                                fundamental do compromisso com a comunidade, voluntários,
                                parceiros e doadores.
                            </p>

                            <Link
                                to="/contato"
                                className="button button--solid"
                            >
                                Fale com a JCV
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="transparency-footer">
                <div className="transparency-container transparency-footer__inner">
                    <img
                        src={mainLogo}
                        alt="JCV - Jardins Cultivando Vidas"
                        className="transparency-footer__logo"
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