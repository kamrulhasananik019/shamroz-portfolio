"use client";

import { useEffect, useState } from "react";
import { Footer, NavBar } from "../page";

type Language = "en" | "fr" | "de";

const flagEmojis: Record<Language, string> = {
    en: "🇬🇧",
    fr: "🇫🇷",
    de: "🇩🇪"
};

export default function PrivacyPage() {
    const [lang, setLang] = useState<Language>("en");
    const [showLangDropdown, setShowLangDropdown] = useState<boolean>(false);

    useEffect(() => {
        const savedLang = localStorage.getItem("ksk-lang");

        if (savedLang && ["en", "fr", "de"].includes(savedLang)) {
            setLang(savedLang as Language);
        } else {
            localStorage.setItem("ksk-lang", "en");
            setLang("en");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("ksk-lang", lang);
    }, [lang]);

    const toggleLang = (language: Language) => {
        setLang(language);
        setShowLangDropdown(false);
    };

    const content = {
        en: {
            title: "Privacy Policy",
            lastUpdated: "Last updated",
            sections: [
                {
                    title: "1. Introduction",
                    content:
                        "We place a high value on protecting your personal data. This privacy policy describes our practices regarding the collection, use, and sharing of information you provide to us when using our service."
                },
                {
                    title: "2. Data Collected",
                    content: "We collect the following types of information:",
                    listItems: [
                        "Personal information such as name, surname, email address",
                        "Payment information necessary for transactions",
                        "Usage and browsing data on our platform",
                        "Technical information such as IP address and cookies"
                    ]
                },
                {
                    title: "3. Use of Data",
                    content: "Your data is used to:",
                    listItems: [
                        "Provide, maintain and improve our services",
                        "Process your orders and transactions",
                        "Communicate with you regarding your account and our services",
                        "Send you marketing information (with your consent)",
                        "Detect and prevent fraud"
                    ]
                },
                {
                    title: "4. Legal Basis (GDPR)",
                    content:
                        "In accordance with the General Data Protection Regulation (GDPR), we process your data on the following legal bases:",
                    listItems: [
                        "Performance of a contract when you use our services",
                        "Your explicit consent for specific processing",
                        "Our legitimate interests, where they do not override your rights",
                        "Legal obligations to which we are subject"
                    ]
                },
                {
                    title: "5. Data Retention",
                    content:
                        "We retain your personal data for as long as necessary for the purposes described in this policy, and in accordance with our legal and regulatory obligations."
                },
                {
                    title: "6. Your Rights",
                    content: "As a data subject, you have the following rights:",
                    listItems: [
                        "Right to access your personal data",
                        "Right to rectify inaccurate data",
                        "Right to erasure of your data",
                        "Right to restriction of processing",
                        "Right to data portability",
                        "Right to object to processing",
                        "Right to withdraw your consent at any time",
                        "Right to lodge a complaint with a supervisory authority"
                    ],
                    additionalContent:
                        "To exercise these rights, please contact us at the address indicated in the \"Contact\" section below."
                },
                {
                    title: "7. Data Security",
                    content:
                        "We implement appropriate security measures to protect your data against unauthorized access, alteration, disclosure, or destruction."
                },
                {
                    title: "8. Data Sharing",
                    content: "We may share your data with:",
                    listItems: [
                        "Our service providers who help us operate our business",
                        "Legal authorities when required by law",
                        "Business partners (only with your consent)"
                    ]
                },
                {
                    title: "9. Cookies and Similar Technologies",
                    content:
                        "Our site uses cookies and similar technologies to enhance your experience. You can manage your cookie preferences via our cookie banner or your browser settings."
                },
                {
                    title: "10. Policy Changes",
                    content:
                        "We may modify this privacy policy at any time. Changes will take effect upon their publication on this page, with the update date indicated at the top."
                },
                {
                    title: "11. Contact",
                    content:
                        "For any questions regarding this policy or your personal data, please contact us at:",
                    addressLines: [
                        "Company Name",
                        "Postal address",
                        "Postal code, City",
                        "Country",
                        "Email: contact@example.com",
                        "Phone: +33 1 23 45 67 89"
                    ]
                }
            ]
        },
        fr: {
            title: "Politique de Confidentialité",
            lastUpdated: "Dernière mise à jour",
            sections: [
                {
                    title: "1. Introduction",
                    content:
                        "Nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité décrit nos pratiques concernant la collecte, l'utilisation et le partage des informations que vous nous fournissez lorsque vous utilisez notre service."
                },
                {
                    title: "2. Données Collectées",
                    content: "Nous collectons les types d'informations suivants :",
                    listItems: [
                        "Informations personnelles telles que nom, prénom, adresse email",
                        "Informations de paiement nécessaires aux transactions",
                        "Données d'utilisation et de navigation sur notre plateforme",
                        "Informations techniques comme l'adresse IP et les cookies"
                    ]
                },
                {
                    title: "3. Utilisation des Données",
                    content: "Vos données sont utilisées pour :",
                    listItems: [
                        "Fournir, maintenir et améliorer nos services",
                        "Traiter vos commandes et transactions",
                        "Communiquer avec vous concernant votre compte et nos services",
                        "Vous envoyer des informations marketing (avec votre consentement)",
                        "Détecter et prévenir les fraudes"
                    ]
                },
                {
                    title: "4. Base Légale (RGPD)",
                    content:
                        "Conformément au Règlement Général sur la Protection des Données (RGPD), nous traitons vos données sur les bases légales suivantes :",
                    listItems: [
                        "Exécution d'un contrat lorsque vous utilisez nos services",
                        "Votre consentement explicite pour certains traitements spécifiques",
                        "Nos intérêts légitimes, lorsqu'ils ne prévalent pas sur vos droits",
                        "Obligations légales auxquelles nous sommes soumis"
                    ]
                },
                {
                    title: "5. Conservation des Données",
                    content:
                        "Nous conservons vos données personnelles aussi longtemps que nécessaire pour les finalités décrites dans cette politique, et conformément à nos obligations légales et réglementaires."
                },
                {
                    title: "6. Vos Droits",
                    content: "En tant que personne concernée, vous disposez des droits suivants :",
                    listItems: [
                        "Droit d'accès à vos données personnelles",
                        "Droit de rectification des données inexactes",
                        "Droit à l'effacement de vos données",
                        "Droit à la limitation du traitement",
                        "Droit à la portabilité de vos données",
                        "Droit d'opposition au traitement",
                        "Droit de retirer votre consentement à tout moment",
                        "Droit d'introduire une réclamation auprès de la CNIL"
                    ],
                    additionalContent:
                        "Pour exercer ces droits, veuillez nous contacter à l'adresse indiquée dans la section \"Contact\" ci-dessous."
                },
                {
                    title: "7. Sécurité des Données",
                    content:
                        "Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès, altération, divulgation ou destruction non autorisés."
                },
                {
                    title: "8. Partage des Données",
                    content: "Nous pouvons partager vos données avec :",
                    listItems: [
                        "Nos prestataires de services qui nous aident à opérer notre activité",
                        "Les autorités légales lorsque la loi l'exige",
                        "Des partenaires commerciaux (uniquement avec votre consentement)"
                    ]
                },
                {
                    title: "9. Cookies et Technologies Similaires",
                    content:
                        "Notre site utilise des cookies et technologies similaires pour améliorer votre expérience. Vous pouvez gérer vos préférences concernant les cookies via notre bannière de cookies ou les paramètres de votre navigateur."
                },
                {
                    title: "10. Modifications de la Politique",
                    content:
                        "Nous pouvons modifier cette politique de confidentialité à tout moment. Les modifications entreront en vigueur dès leur publication sur cette page, avec la date de mise à jour indiquée en haut."
                },
                {
                    title: "11. Contact",
                    content:
                        "Pour toute question concernant cette politique ou vos données personnelles, veuillez nous contacter à :",
                    addressLines: [
                        "Nom de l'entreprise",
                        "Adresse postale",
                        "Code postal, Ville",
                        "France",
                        "Email: contact@example.com",
                        "Téléphone: +33 1 23 45 67 89"
                    ]
                }
            ]
        },
        de: {
            title: "Datenschutzerklärung",
            lastUpdated: "Zuletzt aktualisiert",
            sections: [
                {
                    title: "1. Einleitung",
                    content:
                        "Wir legen großen Wert auf den Schutz Ihrer personenbezogenen Daten. Diese Datenschutzerklärung beschreibt unsere Praktiken bezüglich der Erhebung, Verwendung und Weitergabe von Informationen, die Sie uns bei der Nutzung unseres Dienstes zur Verfügung stellen."
                },
                {
                    title: "2. Erhobene Daten",
                    content: "Wir erheben folgende Arten von Informationen:",
                    listItems: [
                        "Persönliche Informationen wie Name, Vorname, E-Mail-Adresse",
                        "Zahlungsinformationen, die für Transaktionen erforderlich sind",
                        "Nutzungs- und Browsing-Daten auf unserer Plattform",
                        "Technische Informationen wie IP-Adresse und Cookies"
                    ]
                },
                {
                    title: "3. Verwendung der Daten",
                    content: "Ihre Daten werden verwendet für:",
                    listItems: [
                        "Bereitstellung, Wartung und Verbesserung unserer Dienste",
                        "Bearbeitung Ihrer Bestellungen und Transaktionen",
                        "Kommunikation mit Ihnen bezüglich Ihres Kontos und unserer Dienste",
                        "Zusendung von Marketinginformationen (mit Ihrer Einwilligung)",
                        "Erkennung und Verhinderung von Betrug"
                    ]
                },
                {
                    title: "4. Rechtsgrundlage (DSGVO)",
                    content:
                        "Gemäß der Datenschutz-Grundverordnung (DSGVO) verarbeiten wir Ihre Daten auf folgenden Rechtsgrundlagen:",
                    listItems: [
                        "Erfüllung eines Vertrags, wenn Sie unsere Dienste nutzen",
                        "Ihre ausdrückliche Einwilligung für bestimmte Verarbeitungen",
                        "Unsere berechtigten Interessen, sofern diese Ihre Rechte nicht überwiegen",
                        "Rechtliche Verpflichtungen, denen wir unterliegen"
                    ]
                },
                {
                    title: "5. Datenspeicherung",
                    content:
                        "Wir speichern Ihre personenbezogenen Daten so lange, wie es für die in dieser Richtlinie beschriebenen Zwecke erforderlich ist und in Übereinstimmung mit unseren gesetzlichen und regulatorischen Verpflichtungen."
                },
                {
                    title: "6. Ihre Rechte",
                    content: "Als betroffene Person haben Sie folgende Rechte:",
                    listItems: [
                        "Recht auf Zugang zu Ihren personenbezogenen Daten",
                        "Recht auf Berichtigung unrichtiger Daten",
                        "Recht auf Löschung Ihrer Daten",
                        "Recht auf Einschränkung der Verarbeitung",
                        "Recht auf Datenübertragbarkeit",
                        "Recht auf Widerspruch gegen die Verarbeitung",
                        "Recht, Ihre Einwilligung jederzeit zu widerrufen",
                        "Recht, eine Beschwerde bei einer Aufsichtsbehörde einzureichen"
                    ],
                    additionalContent:
                        "Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter der im Abschnitt \"Kontakt\" angegebenen Adresse."
                },
                {
                    title: "7. Datensicherheit",
                    content:
                        "Wir setzen angemessene Sicherheitsmaßnahmen ein, um Ihre Daten vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung zu schützen."
                },
                {
                    title: "8. Datenweitergabe",
                    content: "Wir können Ihre Daten weitergeben an:",
                    listItems: [
                        "Unsere Dienstleister, die uns bei der Durchführung unserer Geschäftstätigkeit unterstützen",
                        "Behörden, wenn dies gesetzlich vorgeschrieben ist",
                        "Geschäftspartner (nur mit Ihrer Einwilligung)"
                    ]
                },
                {
                    title: "9. Cookies und ähnliche Technologien",
                    content:
                        "Unsere Website verwendet Cookies und ähnliche Technologien, um Ihr Erlebnis zu verbessern. Sie können Ihre Cookie-Einstellungen über unser Cookie-Banner oder die Einstellungen Ihres Browsers verwalten."
                },
                {
                    title: "10. Änderungen der Richtlinie",
                    content:
                        "Wir können diese Datenschutzrichtlinie jederzeit ändern. Änderungen treten mit ihrer Veröffentlichung auf dieser Seite in Kraft, wobei das Aktualisierungsdatum oben angegeben wird."
                },
                {
                    title: "11. Kontakt",
                    content:
                        "Bei Fragen zu dieser Richtlinie oder Ihren personenbezogenen Daten kontaktieren Sie uns bitte unter:",
                    addressLines: [
                        "Firmenname",
                        "Postanschrift",
                        "Postleitzahl, Stadt",
                        "Deutschland",
                        "E-Mail: contact@example.com",
                        "Telefon: +33 1 23 45 67 89"
                    ]
                }
            ]
        }
    };

    const { title, lastUpdated, sections } = content[lang];

    return (
        <>
            <NavBar lang={lang} setLang={setLang} />
            <main className="prose prose-lg max-w-4xl mx-auto px-4 py-8">
                <article>
                    <header>
                        <h1 className="text-3xl font-bold mb-6">{title}</h1>
                        <p className="text-gray-600 mb-8">{lastUpdated}: {new Date().toLocaleDateString(lang === 'en' ? 'en-US' : lang === 'fr' ? 'fr-FR' : 'de-DE')}</p>
                    </header>

                    {sections.map((section, index) => (
                        <section key={index} className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                            <p>{section.content}</p>

                            {section.listItems && (
                                <ul className="list-disc pl-5 mb-4">
                                    {section.listItems.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}

                            {section.additionalContent && (
                                <p>{section.additionalContent}</p>
                            )}

                            {section.addressLines && (
                                <address className="not-italic mt-2">
                                    {section.addressLines.map((line, i) => (
                                        <div key={i}>{line}</div>
                                    ))}
                                </address>
                            )}
                        </section>
                    ))}
                </article>
            </main>

            <Footer lang={lang} />
        </>
    );
}
