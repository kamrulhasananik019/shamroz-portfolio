"use client";

import { useEffect, useState } from "react";
import { Footer, NavBar } from "../page";

type Language = "en" | "fr" | "de";

const flagEmojis: Record<Language, string> = {
    en: "🇬🇧",
    fr: "🇫🇷",
    de: "🇩🇪"
};

export default function TermsPage() {
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

    const content = {
        en: {
            title: "Terms and Conditions",
            lastUpdated: "Last updated",
            sections: [
                {
                    title: "1. Introduction",
                    content: "These Terms and Conditions govern your use of our website and the purchase of products from KSK Textile. By accessing our website or placing an order, you acknowledge and accept these Terms and Conditions in full."
                },
                {
                    title: "2. Definitions",
                    content: "For the purpose of these Terms and Conditions:",
                    listItems: [
                        "'Company', 'we', 'us', or 'our' refers to KSK Textile.",
                        "'Customer', 'you', or 'your' refers to the person or entity accessing our website or placing an order.",
                        "'Products' refers to the textile items offered for sale on our website.",
                        "'Website' refers to the online platform located at www.ksktextile.com."
                    ]
                },
                {
                    title: "3. Product Information",
                    content: "3.1 We make every effort to ensure that the information about our products is accurate and up-to-date. However, we cannot guarantee that all descriptions, images, and specifications are entirely error-free.",
                    additionalContent: "3.2 We reserve the right to modify product specifications without prior notice, provided that such modifications do not materially affect the quality or performance of the products."
                },
                {
                    title: "4. Orders and Contract Formation",
                    content: "4.1 When placing an order through our website, you are making an offer to purchase products at the indicated price.",
                    additionalContent: "4.2 The contract is formed only when we send you an order confirmation email. We reserve the right to refuse any order without stating reasons."
                },
                {
                    title: "5. Pricing and Payment",
                    content: "5.1 All prices displayed on our website are in Euros and exclusive of VAT unless otherwise stated.",
                    additionalContent: "5.2 We accept payment via credit/debit cards, bank transfers, and other payment methods as indicated during the checkout process. Payment must be received in full before the products are dispatched, unless otherwise agreed in writing."
                },
                {
                    title: "6. Delivery",
                    content: "6.1 We aim to deliver products within the timeframe indicated at the time of ordering. However, delivery times are estimates and not guaranteed.",
                    additionalContent: "6.2 Risk of loss or damage to products passes to you upon delivery. Ownership of products passes to you upon full payment."
                },
                {
                    title: "7. Right of Withdrawal and Returns",
                    content: "7.1 In accordance with applicable European consumer laws, individual consumers have the right to withdraw from the contract within 14 days of receiving the products, without stating any reason.",
                    additionalContent: "7.2 To exercise this right, you must inform us of your decision to withdraw before the expiration of the withdrawal period. You must return the products in their original condition and packaging at your own expense within 14 days of informing us of your withdrawal."
                },
                {
                    title: "8. Warranties and Product Defects",
                    content: "8.1 We warrant that our products will be free from material defects at the time of delivery and will conform with their description.",
                    additionalContent: "8.2 If a product is defective, you must inform us within a reasonable time. You may be entitled to a repair, replacement, or refund as appropriate under applicable consumer protection laws."
                },
                {
                    title: "9. Limitation of Liability",
                    content: "9.1 Our liability for any losses you suffer as a result of us breaching these Terms and Conditions is strictly limited to the purchase price of the products you purchased.",
                    additionalContent: "9.2 We are not responsible for indirect losses which happen as a side effect of the main loss or damage and which are not foreseeable by you and us (such as loss of income or revenue, loss of business, loss of profits, or loss of anticipated savings)."
                },
                {
                    title: "10. Intellectual Property",
                    content: "10.1 All content on our website, including text, graphics, logos, images, and software, is the property of KSK Textile or its content suppliers and is protected by international copyright laws.",
                    additionalContent: "10.2 You may not reproduce, distribute, modify, or create derivative works from any material on our website without our prior written consent."
                },
                {
                    title: "11. Data Protection",
                    content: "11.1 We collect and process your personal data in accordance with our Privacy Policy, which forms an integral part of these Terms and Conditions.",
                    additionalContent: "11.2 By using our website or placing an order, you consent to such processing and you warrant that all data provided by you is accurate."
                },
                {
                    title: "12. Force Majeure",
                    content: "We shall not be liable for any delay or failure to perform our obligations if such delay or failure results from events beyond our reasonable control, including but not limited to natural disasters, strikes, lockouts, epidemics, governmental regulations, riots, or transportation delays."
                },
                {
                    title: "13. Governing Law and Jurisdiction",
                    content: "13.1 These Terms and Conditions are governed by and construed in accordance with the laws of France.",
                    additionalContent: "13.2 Any disputes arising out of or relating to these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of Paris, France."
                },
                {
                    title: "14. Amendments to Terms and Conditions",
                    content: "We reserve the right to modify these Terms and Conditions at any time. The updated terms will be posted on our website and will take effect immediately upon posting."
                },
                {
                    title: "15. Contact Information",
                    content: "For any questions regarding these Terms and Conditions, please contact us at:",
                    addressLines: [
                        "KSK Textile",
                        "50 avenue des Champs-Élysées",
                        "75008 Paris",
                        "France",
                        "Email: business@kskimex.com",
                        "Phone: +33 (0)7 82 86 55 18"
                    ]
                }
            ]
        },
        fr: {
            title: "Conditions Générales de Vente",
            lastUpdated: "Dernière mise à jour",
            sections: [
                {
                    title: "1. Introduction",
                    content: "Les présentes Conditions Générales de Vente régissent l'utilisation de notre site internet et l'achat de produits auprès de KSK Textile. En accédant à notre site ou en passant une commande, vous reconnaissez et acceptez intégralement ces Conditions Générales de Vente."
                },
                {
                    title: "2. Définitions",
                    content: "Aux fins des présentes Conditions Générales de Vente :",
                    listItems: [
                        "'Société', 'nous', ou 'notre' désigne KSK Textile.",
                        "'Client', 'vous', ou 'votre' désigne la personne physique ou morale qui accède à notre site internet ou passe une commande.",
                        "'Produits' désigne les articles textiles proposés à la vente sur notre site.",
                        "'Site internet' désigne la plateforme en ligne située à l'adresse www.ksktextile.com."
                    ]
                },
                {
                    title: "3. Informations sur les Produits",
                    content: "3.1 Nous mettons tout en œuvre pour garantir que les informations concernant nos produits sont exactes et à jour. Toutefois, nous ne pouvons garantir que toutes les descriptions, images et spécifications sont entièrement exemptes d'erreurs.",
                    additionalContent: "3.2 Nous nous réservons le droit de modifier les spécifications des produits sans préavis, à condition que ces modifications n'affectent pas matériellement la qualité ou les performances des produits."
                },
                {
                    title: "4. Commandes et Formation du Contrat",
                    content: "4.1 Lorsque vous passez une commande sur notre site, vous faites une offre d'achat de produits au prix indiqué.",
                    additionalContent: "4.2 Le contrat n'est formé que lorsque nous vous envoyons un email de confirmation de commande. Nous nous réservons le droit de refuser toute commande sans avoir à en indiquer les motifs."
                },
                {
                    title: "5. Prix et Paiement",
                    content: "5.1 Tous les prix affichés sur notre site sont en euros et hors TVA, sauf indication contraire.",
                    additionalContent: "5.2 Nous acceptons les paiements par cartes de crédit/débit, virements bancaires et autres méthodes de paiement indiquées lors du processus de commande. Le paiement doit être reçu en totalité avant l'expédition des produits, sauf accord écrit contraire."
                },
                {
                    title: "6. Livraison",
                    content: "6.1 Nous nous efforçons de livrer les produits dans le délai indiqué au moment de la commande. Toutefois, les délais de livraison sont des estimations et ne sont pas garantis.",
                    additionalContent: "6.2 Le risque de perte ou de dommage des produits vous est transféré lors de la livraison. La propriété des produits vous est transférée après paiement intégral."
                },
                {
                    title: "7. Droit de Rétractation et Retours",
                    content: "7.1 Conformément aux lois européennes applicables en matière de protection des consommateurs, les consommateurs individuels disposent d'un droit de rétractation dans les 14 jours suivant la réception des produits, sans avoir à justifier de motifs.",
                    additionalContent: "7.2 Pour exercer ce droit, vous devez nous informer de votre décision de vous rétracter avant l'expiration du délai de rétractation. Vous devez nous retourner les produits dans leur état et emballage d'origine, à vos frais, dans les 14 jours suivant votre information de rétractation."
                },
                {
                    title: "8. Garanties et Défauts des Produits",
                    content: "8.1 Nous garantissons que nos produits seront exempts de défauts matériels au moment de la livraison et seront conformes à leur description.",
                    additionalContent: "8.2 Si un produit est défectueux, vous devez nous en informer dans un délai raisonnable. Vous pouvez avoir droit à une réparation, un remplacement ou un remboursement, selon ce qui est approprié en vertu des lois applicables en matière de protection des consommateurs."
                },
                {
                    title: "9. Limitation de Responsabilité",
                    content: "9.1 Notre responsabilité pour toute perte que vous subissez du fait de notre violation des présentes Conditions Générales de Vente est strictement limitée au prix d'achat des produits que vous avez achetés.",
                    additionalContent: "9.2 Nous ne sommes pas responsables des pertes indirectes qui surviennent comme effet secondaire de la perte ou du dommage principal et qui ne sont pas prévisibles par vous et nous (telles que la perte de revenus, la perte d'activité, la perte de profits ou la perte d'économies anticipées)."
                },
                {
                    title: "10. Propriété Intellectuelle",
                    content: "10.1 Tout le contenu de notre site internet, y compris les textes, graphiques, logos, images et logiciels, est la propriété de KSK Textile ou de ses fournisseurs de contenu et est protégé par les lois internationales sur le droit d'auteur.",
                    additionalContent: "10.2 Vous ne pouvez pas reproduire, distribuer, modifier ou créer des œuvres dérivées à partir de tout matériel sur notre site sans notre consentement écrit préalable."
                },
                {
                    title: "11. Protection des Données",
                    content: "11.1 Nous collectons et traitons vos données personnelles conformément à notre Politique de Confidentialité, qui fait partie intégrante des présentes Conditions Générales de Vente.",
                    additionalContent: "11.2 En utilisant notre site ou en passant une commande, vous consentez à ce traitement et vous garantissez que toutes les données que vous fournissez sont exactes."
                },
                {
                    title: "12. Force Majeure",
                    content: "Nous ne serons pas responsables de tout retard ou manquement à nos obligations si ce retard ou manquement résulte d'événements indépendants de notre volonté, y compris mais sans s'y limiter, les catastrophes naturelles, les grèves, les lock-out, les épidémies, les règlements gouvernementaux, les émeutes ou les retards de transport."
                },
                {
                    title: "13. Droit Applicable et Juridiction",
                    content: "13.1 Les présentes Conditions Générales de Vente sont régies et interprétées conformément au droit français.",
                    additionalContent: "13.2 Tout litige découlant de ou lié aux présentes Conditions Générales de Vente sera soumis à la compétence exclusive des tribunaux de Paris, France."
                },
                {
                    title: "14. Modifications des Conditions Générales de Vente",
                    content: "Nous nous réservons le droit de modifier ces Conditions Générales de Vente à tout moment. Les conditions mises à jour seront publiées sur notre site et prendront effet immédiatement après leur publication."
                },
                {
                    title: "15. Informations de Contact",
                    content: "Pour toute question concernant ces Conditions Générales de Vente, veuillez nous contacter à :",
                    addressLines: [
                        "KSK Textile",
                        "50 avenue des Champs-Élysées",
                        "75008 Paris",
                        "France",
                        "Email: business@kskimex.com",
                        "Téléphone: +33 (0)7 82 86 55 18"
                    ]
                }
            ]
        },
        de: {
            title: "Allgemeine Geschäftsbedingungen",
            lastUpdated: "Zuletzt aktualisiert",
            sections: [
                {
                    title: "1. Einleitung",
                    content: "Diese Allgemeinen Geschäftsbedingungen regeln Ihre Nutzung unserer Website und den Kauf von Produkten bei KSK Textile. Durch den Zugriff auf unsere Website oder die Aufgabe einer Bestellung erkennen Sie diese Allgemeinen Geschäftsbedingungen vollständig an und akzeptieren sie."
                },
                {
                    title: "2. Definitionen",
                    content: "Für die Zwecke dieser Allgemeinen Geschäftsbedingungen:",
                    listItems: [
                        "'Unternehmen', 'wir', 'uns' oder 'unser' bezieht sich auf KSK Textile.",
                        "'Kunde', 'Sie' oder 'Ihr' bezieht sich auf die Person oder Einrichtung, die auf unsere Website zugreift oder eine Bestellung aufgibt.",
                        "'Produkte' bezieht sich auf die Textilartikel, die auf unserer Website zum Verkauf angeboten werden.",
                        "'Website' bezieht sich auf die Online-Plattform unter www.ksktextile.com."
                    ]
                },
                {
                    title: "3. Produktinformationen",
                    content: "3.1 Wir bemühen uns, sicherzustellen, dass die Informationen über unsere Produkte korrekt und aktuell sind. Wir können jedoch nicht garantieren, dass alle Beschreibungen, Bilder und Spezifikationen völlig fehlerfrei sind.",
                    additionalContent: "3.2 Wir behalten uns das Recht vor, Produktspezifikationen ohne vorherige Ankündigung zu ändern, vorausgesetzt, solche Änderungen beeinträchtigen nicht wesentlich die Qualität oder Leistung der Produkte."
                },
                {
                    title: "4. Bestellungen und Vertragsschluss",
                    content: "4.1 Wenn Sie eine Bestellung über unsere Website aufgeben, machen Sie ein Angebot zum Kauf von Produkten zum angegebenen Preis.",
                    additionalContent: "4.2 Der Vertrag kommt erst zustande, wenn wir Ihnen eine Auftragsbestätigungs-E-Mail senden. Wir behalten uns das Recht vor, jede Bestellung ohne Angabe von Gründen abzulehnen."
                },
                {
                    title: "5. Preise und Zahlung",
                    content: "5.1 Alle auf unserer Website angezeigten Preise sind in Euro und exklusive Mehrwertsteuer, sofern nicht anders angegeben.",
                    additionalContent: "5.2 Wir akzeptieren Zahlungen per Kredit-/Debitkarten, Banküberweisungen und andere Zahlungsmethoden, die während des Bestellvorgangs angegeben werden. Die Zahlung muss vollständig eingehen, bevor die Produkte versandt werden, sofern nicht schriftlich anders vereinbart."
                },
                {
                    title: "6. Lieferung",
                    content: "6.1 Wir bemühen uns, Produkte innerhalb des zum Zeitpunkt der Bestellung angegebenen Zeitrahmens zu liefern. Lieferzeiten sind jedoch Schätzungen und nicht garantiert.",
                    additionalContent: "6.2 Das Risiko des Verlusts oder der Beschädigung von Produkten geht bei der Lieferung auf Sie über. Das Eigentum an den Produkten geht bei vollständiger Zahlung auf Sie über."
                },
                {
                    title: "7. Widerrufsrecht und Rücksendungen",
                    content: "7.1 In Übereinstimmung mit den geltenden europäischen Verbraucherschutzgesetzen haben Einzelverbraucher das Recht, innerhalb von 14 Tagen nach Erhalt der Produkte ohne Angabe von Gründen vom Vertrag zurückzutreten.",
                    additionalContent: "7.2 Um dieses Recht auszuüben, müssen Sie uns vor Ablauf der Widerrufsfrist über Ihre Entscheidung zum Widerruf informieren. Sie müssen die Produkte in ihrem ursprünglichen Zustand und ihrer Verpackung auf eigene Kosten innerhalb von 14 Tagen nach Ihrer Widerrufsmitteilung zurücksenden."
                },
                {
                    title: "8. Garantien und Produktmängel",
                    content: "8.1 Wir garantieren, dass unsere Produkte zum Zeitpunkt der Lieferung frei von wesentlichen Mängeln sind und ihrer Beschreibung entsprechen.",
                    additionalContent: "8.2 Wenn ein Produkt fehlerhaft ist, müssen Sie uns innerhalb einer angemessenen Frist informieren. Sie haben möglicherweise Anspruch auf Reparatur, Ersatz oder Rückerstattung, je nachdem, was nach den geltenden Verbraucherschutzgesetzen angemessen ist."
                },
                {
                    title: "9. Haftungsbeschränkung",
                    content: "9.1 Unsere Haftung für Verluste, die Ihnen infolge unserer Verletzung dieser Allgemeinen Geschäftsbedingungen entstehen, ist streng auf den Kaufpreis der von Ihnen gekauften Produkte beschränkt.",
                    additionalContent: "9.2 Wir sind nicht verantwortlich für indirekte Verluste, die als Nebeneffekt des Haupt-Verlusts oder -Schadens auftreten und die von Ihnen und uns nicht vorhersehbar sind (wie Einkommens- oder Umsatzverlust, Geschäftsverlust, Gewinnverlust oder Verlust erwarteter Einsparungen)."
                },
                {
                    title: "10. Geistiges Eigentum",
                    content: "10.1 Alle Inhalte auf unserer Website, einschließlich Text, Grafiken, Logos, Bilder und Software, sind Eigentum von KSK Textile oder seiner Inhaltsanbieter und durch internationale Urheberrechtsgesetze geschützt.",
                    additionalContent: "10.2 Sie dürfen Material auf unserer Website ohne unsere vorherige schriftliche Zustimmung nicht reproduzieren, verteilen, modifizieren oder davon abgeleitete Werke erstellen."
                },
                {
                    title: "11. Datenschutz",
                    content: "11.1 Wir erheben und verarbeiten Ihre personenbezogenen Daten gemäß unserer Datenschutzrichtlinie, die integraler Bestandteil dieser Allgemeinen Geschäftsbedingungen ist.",
                    additionalContent: "11.2 Durch die Nutzung unserer Website oder die Aufgabe einer Bestellung stimmen Sie einer solchen Verarbeitung zu und garantieren, dass alle von Ihnen bereitgestellten Daten korrekt sind."
                },
                {
                    title: "12. Höhere Gewalt",
                    content: "Wir haften nicht für Verzögerungen oder Nichterfüllung unserer Verpflichtungen, wenn diese Verzögerung oder Nichterfüllung aus Ereignissen resultiert, die außerhalb unserer angemessenen Kontrolle liegen, einschließlich, aber nicht beschränkt auf Naturkatastrophen, Streiks, Aussperrungen, Epidemien, staatliche Vorschriften, Unruhen oder Transportverzögerungen."
                },
                {
                    title: "13. Anwendbares Recht und Gerichtsstand",
                    content: "13.1 Diese Allgemeinen Geschäftsbedingungen unterliegen dem französischen Recht und werden gemäß diesem ausgelegt.",
                    additionalContent: "13.2 Alle Streitigkeiten, die sich aus oder im Zusammenhang mit diesen Allgemeinen Geschäftsbedingungen ergeben, unterliegen der ausschließlichen Zuständigkeit der Gerichte von Paris, Frankreich."
                },
                {
                    title: "14. Änderungen der Allgemeinen Geschäftsbedingungen",
                    content: "Wir behalten uns das Recht vor, diese Allgemeinen Geschäftsbedingungen jederzeit zu ändern. Die aktualisierten Bedingungen werden auf unserer Website veröffentlicht und treten unmittelbar nach der Veröffentlichung in Kraft."
                },
                {
                    title: "15. Kontaktinformationen",
                    content: "Bei Fragen zu diesen Allgemeinen Geschäftsbedingungen kontaktieren Sie uns bitte unter:",
                    addressLines: [
                        "KSK Textile",
                        "50 avenue des Champs-Élysées",
                        "75008 Paris",
                        "Frankreich",
                        "E-Mail: business@kskimex.com",
                        "Telefon: +33 (0)7 82 86 55 18"
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
