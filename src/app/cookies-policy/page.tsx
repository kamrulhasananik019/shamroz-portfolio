"use client";

import { useEffect, useState } from "react";
import { Footer, NavBar } from "../page";

type Language = "en" | "fr" | "de";

const flagEmojis: Record<Language, string> = {
    en: "🇬🇧",
    fr: "🇫🇷",
    de: "🇩🇪"
};

export default function CookiesPolicyPage() {
    const [lang, setLang] = useState<Language>("en");

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
            title: "Cookies Policy",
            lastUpdated: "Last updated",
            sections: [
                {
                    title: "1. Introduction",
                    content: "This Cookies Policy explains what cookies are and how KSK Textile uses them. You should read this policy to understand what cookies are, how we use them, the types of cookies we use, the information we collect using cookies and how we use that information, and how to control your cookie preferences. For further information on how we use, store, and keep your personal data secure, see our Privacy Policy."
                },
                {
                    title: "2. What Are Cookies?",
                    content: "Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and allow us to analyze what works and where improvements are needed."
                },
                {
                    title: "3. How We Use Cookies",
                    content: "We use cookies for various reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to our website. It is recommended that you leave all cookies on if you are not sure whether you need them or not, in case they are used to provide a service that you use.",
                    listItems: [
                        "To enable certain functions",
                        "To provide analytics",
                        "To store your preferences",
                        "For marketing purposes",
                        "For authentication and security"
                    ]
                },
                {
                    title: "4. Types of Cookies We Use",
                    content: "Our website uses the following types of cookies:",
                    subsections: [
                        {
                            title: "4.1 Essential Cookies",
                            content: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work."
                        },
                        {
                            title: "4.2 Performance Cookies",
                            content: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies, we will not know when you have visited our site."
                        },
                        {
                            title: "4.3 Functional Cookies",
                            content: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, then some or all of these services may not function properly."
                        },
                        {
                            title: "4.4 Targeting/Advertising Cookies",
                            content: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising."
                        }
                    ]
                },
                {
                    title: "5. Third-Party Cookies",
                    content: "In some special cases, we also use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this site.",
                    listItems: [
                        "This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.",
                        "From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features, these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimizations our users appreciate the most.",
                        "As we sell products, it's important for us to understand statistics about how many of the visitors to our site actually make a purchase and as such this is the kind of data that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to monitor our advertising and product costs to ensure the best possible price."
                    ]
                },
                {
                    title: "6. Cookie Management",
                    content: "You can manage your cookies preferences by adjusting the settings on your browser (see your browser Help for how to do this). Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org."
                },
                {
                    title: "7. Disabling Cookies",
                    content: "You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore, it is recommended that you do not disable cookies."
                },
                {
                    title: "8. Changes to Our Cookies Policy",
                    content: "We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the Last Updated date. You are advised to review this Cookies Policy periodically for any changes."
                },
                {
                    title: "9. Contact Us",
                    content: "If you have any questions about our Cookies Policy, please contact us at:",
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
            title: "Politique de Cookies",
            lastUpdated: "Dernière mise à jour",
            sections: [
                {
                    title: "1. Introduction",
                    content: "Cette Politique de Cookies explique ce que sont les cookies et comment KSK Textile les utilise. Vous devriez lire cette politique pour comprendre ce que sont les cookies, comment nous les utilisons, les types de cookies que nous utilisons, les informations que nous collectons à l'aide de cookies et comment nous utilisons ces informations, ainsi que la manière de contrôler vos préférences en matière de cookies. Pour plus d'informations sur la façon dont nous utilisons, stockons et protégeons vos données personnelles, consultez notre Politique de Confidentialité."
                },
                {
                    title: "2. Que Sont les Cookies?",
                    content: "Les cookies sont de petits fichiers texte qui sont utilisés pour stocker de petites informations. Ils sont stockés sur votre appareil lorsque le site web est chargé dans votre navigateur. Ces cookies nous aident à faire fonctionner correctement le site web, à le rendre plus sécurisé, à offrir une meilleure expérience utilisateur et à analyser ce qui fonctionne et où des améliorations sont nécessaires."
                },
                {
                    title: "3. Comment Nous Utilisons les Cookies",
                    content: "Nous utilisons des cookies pour diverses raisons détaillées ci-dessous. Malheureusement, dans la plupart des cas, il n'existe pas d'options standard pour désactiver les cookies sans désactiver complètement les fonctionnalités et caractéristiques qu'ils ajoutent à notre site. Il est recommandé de laisser tous les cookies actifs si vous n'êtes pas sûr d'en avoir besoin ou non, au cas où ils seraient utilisés pour fournir un service que vous utilisez.",
                    listItems: [
                        "Pour activer certaines fonctions",
                        "Pour fournir des analyses",
                        "Pour stocker vos préférences",
                        "À des fins marketing",
                        "Pour l'authentification et la sécurité"
                    ]
                },
                {
                    title: "4. Types de Cookies que Nous Utilisons",
                    content: "Notre site web utilise les types de cookies suivants :",
                    subsections: [
                        {
                            title: "4.1 Cookies Essentiels",
                            content: "Ces cookies sont nécessaires au fonctionnement du site web et ne peuvent pas être désactivés dans nos systèmes. Ils sont généralement établis uniquement en réponse à des actions que vous effectuez et qui correspondent à une demande de services, comme la définition de vos préférences de confidentialité, la connexion ou le remplissage de formulaires. Vous pouvez configurer votre navigateur pour qu'il bloque ou vous alerte de l'existence de ces cookies, mais certaines parties du site ne fonctionneront pas."
                        },
                        {
                            title: "4.2 Cookies de Performance",
                            content: "Ces cookies nous permettent de compter les visites et les sources de trafic afin que nous puissions mesurer et améliorer les performances de notre site. Ils nous aident à savoir quelles pages sont les plus et les moins populaires et à voir comment les visiteurs se déplacent sur le site. Toutes les informations recueillies par ces cookies sont agrégées et donc anonymes. Si vous n'autorisez pas ces cookies, nous ne saurons pas quand vous avez visité notre site."
                        },
                        {
                            title: "4.3 Cookies Fonctionnels",
                            content: "Ces cookies permettent au site web de fournir une fonctionnalité et une personnalisation améliorées. Ils peuvent être définis par nous ou par des fournisseurs tiers dont les services ont été ajoutés à nos pages. Si vous n'autorisez pas ces cookies, certains ou tous ces services peuvent ne pas fonctionner correctement."
                        },
                        {
                            title: "4.4 Cookies de Ciblage/Publicité",
                            content: "Ces cookies peuvent être définis sur notre site par nos partenaires publicitaires. Ils peuvent être utilisés par ces entreprises pour établir un profil de vos intérêts et vous montrer des publicités pertinentes sur d'autres sites. Ils ne stockent pas directement des informations personnelles mais sont basés sur l'identification unique de votre navigateur et de votre appareil internet. Si vous n'autorisez pas ces cookies, vous ferez l'expérience d'une publicité moins ciblée."
                        }
                    ]
                },
                {
                    title: "5. Cookies Tiers",
                    content: "Dans certains cas particuliers, nous utilisons également des cookies fournis par des tiers de confiance. La section suivante détaille les cookies tiers que vous pourriez rencontrer sur ce site.",
                    listItems: [
                        "Ce site utilise Google Analytics, qui est l'une des solutions d'analyse les plus répandues et les plus fiables sur le web, pour nous aider à comprendre comment vous utilisez le site et comment nous pouvons améliorer votre expérience. Ces cookies peuvent suivre des éléments tels que le temps que vous passez sur le site et les pages que vous visitez afin que nous puissions continuer à produire un contenu attrayant.",
                        "De temps en temps, nous testons de nouvelles fonctionnalités et apportons des modifications subtiles à la façon dont le site est livré. Lorsque nous testons encore de nouvelles fonctionnalités, ces cookies peuvent être utilisés pour vous garantir une expérience cohérente sur le site tout en nous permettant de comprendre quelles optimisations nos utilisateurs apprécient le plus.",
                        "Comme nous vendons des produits, il est important pour nous de comprendre les statistiques sur le nombre de visiteurs de notre site qui effectuent réellement un achat, et c'est le type de données que ces cookies suivront. Cela est important pour vous car cela signifie que nous pouvons faire des prévisions commerciales précises qui nous permettent de surveiller nos coûts de publicité et de produits afin d'assurer le meilleur prix possible."
                    ]
                },
                {
                    title: "6. Gestion des Cookies",
                    content: "Vous pouvez gérer vos préférences en matière de cookies en ajustant les paramètres de votre navigateur (consultez l'aide de votre navigateur pour savoir comment procéder). La plupart des navigateurs web permettent un certain contrôle de la plupart des cookies via les paramètres du navigateur. Pour en savoir plus sur les cookies, notamment pour voir quels cookies ont été définis, visitez www.aboutcookies.org ou www.allaboutcookies.org."
                },
                {
                    title: "7. Désactivation des Cookies",
                    content: "Vous pouvez empêcher l'installation de cookies en ajustant les paramètres de votre navigateur (consultez l'aide de votre navigateur pour savoir comment procéder). Sachez que la désactivation des cookies affectera la fonctionnalité de ce site et de nombreux autres sites que vous visitez. La désactivation des cookies entraînera généralement la désactivation de certaines fonctionnalités et caractéristiques de ce site. Il est donc recommandé de ne pas désactiver les cookies."
                },
                {
                    title: "8. Modifications de Notre Politique de Cookies",
                    content: "Nous pouvons mettre à jour notre Politique de Cookies de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle Politique de Cookies sur cette page et en mettant à jour la date de Dernière mise à jour. Il vous est conseillé de consulter périodiquement cette Politique de Cookies pour prendre connaissance de tout changement."
                },
                {
                    title: "9. Contactez-Nous",
                    content: "Si vous avez des questions concernant notre Politique de Cookies, veuillez nous contacter à :",
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
            title: "Cookie-Richtlinie",
            lastUpdated: "Zuletzt aktualisiert",
            sections: [
                {
                    title: "1. Einleitung",
                    content: "Diese Cookie-Richtlinie erklärt, was Cookies sind und wie KSK Textile sie verwendet. Sie sollten diese Richtlinie lesen, um zu verstehen, was Cookies sind, wie wir sie verwenden, welche Arten von Cookies wir verwenden, welche Informationen wir mithilfe von Cookies sammeln und wie wir diese Informationen verwenden, sowie wie Sie Ihre Cookie-Präferenzen steuern können. Weitere Informationen darüber, wie wir Ihre persönlichen Daten verwenden, speichern und sichern, finden Sie in unserer Datenschutzrichtlinie."
                },
                {
                    title: "2. Was sind Cookies?",
                    content: "Cookies sind kleine Textdateien, die zum Speichern kleiner Informationsmengen verwendet werden. Sie werden auf Ihrem Gerät gespeichert, wenn die Website in Ihrem Browser geladen wird. Diese Cookies helfen uns, die Website ordnungsgemäß funktionieren zu lassen, sie sicherer zu machen, eine bessere Benutzererfahrung zu bieten und zu analysieren, was funktioniert und wo Verbesserungen erforderlich sind."
                },
                {
                    title: "3. Wie wir Cookies verwenden",
                    content: "Wir verwenden Cookies aus verschiedenen, unten aufgeführten Gründen. Leider gibt es in den meisten Fällen keine Standardoptionen zum Deaktivieren von Cookies, ohne die Funktionalität und Eigenschaften, die sie unserer Website hinzufügen, vollständig zu deaktivieren. Es wird empfohlen, alle Cookies aktiv zu lassen, wenn Sie nicht sicher sind, ob Sie sie benötigen oder nicht, falls sie zur Bereitstellung eines von Ihnen genutzten Dienstes verwendet werden.",
                    listItems: [
                        "Um bestimmte Funktionen zu aktivieren",
                        "Zur Bereitstellung von Analysen",
                        "Um Ihre Einstellungen zu speichern",
                        "Für Marketingzwecke",
                        "Für Authentifizierung und Sicherheit"
                    ]
                },
                {
                    title: "4. Arten von Cookies, die wir verwenden",
                    content: "Unsere Website verwendet die folgenden Arten von Cookies:",
                    subsections: [
                        {
                            title: "4.1 Wesentliche Cookies",
                            content: "Diese Cookies sind für das Funktionieren der Website notwendig und können in unseren Systemen nicht abgeschaltet werden. Sie werden in der Regel nur als Reaktion auf von Ihnen durchgeführte Aktionen gesetzt, die einer Anforderung von Diensten entsprechen, wie etwa dem Festlegen Ihrer Datenschutzeinstellungen, dem Anmelden oder dem Ausfüllen von Formularen. Sie können Ihren Browser so einstellen, dass er diese Cookies blockiert oder Sie auf diese Cookies hinweist, aber einige Teile der Website werden dann nicht funktionieren."
                        },
                        {
                            title: "4.2 Leistungs-Cookies",
                            content: "Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können. Sie helfen uns zu erfahren, welche Seiten am beliebtesten und am wenigsten beliebt sind, und zu sehen, wie sich Besucher auf der Website bewegen. Alle Informationen, die diese Cookies sammeln, sind aggregiert und daher anonym. Wenn Sie diese Cookies nicht zulassen, wissen wir nicht, wann Sie unsere Website besucht haben."
                        },
                        {
                            title: "4.3 Funktionale Cookies",
                            content: "Diese Cookies ermöglichen es der Website, verbesserte Funktionalität und Personalisierung bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten hinzugefügt haben. Wenn Sie diese Cookies nicht zulassen, funktionieren einige oder alle dieser Dienste möglicherweise nicht ordnungsgemäß."
                        },
                        {
                            title: "4.4 Targeting-/Werbe-Cookies",
                            content: "Diese Cookies können über unsere Website von unseren Werbepartnern gesetzt werden. Sie können von diesen Unternehmen verwendet werden, um ein Profil Ihrer Interessen zu erstellen und Ihnen relevante Werbung auf anderen Websites zu zeigen. Sie speichern nicht direkt personenbezogene Daten, sondern basieren auf der eindeutigen Identifizierung Ihres Browsers und Internetgeräts. Wenn Sie diese Cookies nicht zulassen, erleben Sie weniger zielgerichtete Werbung."
                        }
                    ]
                },
                {
                    title: "5. Cookies von Drittanbietern",
                    content: "In einigen besonderen Fällen verwenden wir auch Cookies, die von vertrauenswürdigen Dritten bereitgestellt werden. Im folgenden Abschnitt wird beschrieben, welche Cookies von Drittanbietern Sie auf dieser Website antreffen könnten.",
                    listItems: [
                        "Diese Website verwendet Google Analytics, eine der am weitesten verbreiteten und vertrauenswürdigsten Analyselösungen im Web, die uns hilft zu verstehen, wie Sie die Website nutzen und wie wir Ihre Erfahrung verbessern können. Diese Cookies können Dinge wie die auf der Website verbrachte Zeit und die besuchten Seiten verfolgen, damit wir weiterhin ansprechende Inhalte erstellen können.",
                        "Von Zeit zu Zeit testen wir neue Funktionen und nehmen subtile Änderungen an der Art und Weise vor, wie die Website bereitgestellt wird. Wenn wir noch neue Funktionen testen, können diese Cookies verwendet werden, um sicherzustellen, dass Sie eine konsistente Erfahrung auf der Website haben, während wir verstehen, welche Optimierungen unsere Benutzer am meisten schätzen.",
                        "Da wir Produkte verkaufen, ist es für uns wichtig, Statistiken darüber zu verstehen, wie viele der Besucher unserer Website tatsächlich einen Kauf tätigen, und dies ist die Art von Daten, die diese Cookies verfolgen werden. Dies ist wichtig für Sie, da es bedeutet, dass wir genaue Geschäftsprognosen erstellen können, die es uns ermöglichen, unsere Werbe- und Produktkosten zu überwachen, um den bestmöglichen Preis zu gewährleisten."
                    ]
                },
                {
                    title: "6. Cookie-Verwaltung",
                    content: "Sie können Ihre Cookie-Präferenzen verwalten, indem Sie die Einstellungen in Ihrem Browser anpassen (siehe Hilfe Ihres Browsers für Informationen zur Vorgehensweise). Die meisten Webbrowser ermöglichen eine gewisse Kontrolle der meisten Cookies über die Browser-Einstellungen. Um mehr über Cookies zu erfahren, einschließlich wie Sie sehen können, welche Cookies gesetzt wurden, besuchen Sie www.aboutcookies.org oder www.allaboutcookies.org."
                },
                {
                    title: "7. Deaktivieren von Cookies",
                    content: "Sie können das Setzen von Cookies verhindern, indem Sie die Einstellungen in Ihrem Browser anpassen (siehe Hilfe Ihres Browsers für Informationen zur Vorgehensweise). Beachten Sie, dass das Deaktivieren von Cookies die Funktionalität dieser und vieler anderer von Ihnen besuchter Websites beeinträchtigt. Das Deaktivieren von Cookies führt in der Regel auch zur Deaktivierung bestimmter Funktionen und Merkmale dieser Website. Daher wird empfohlen, Cookies nicht zu deaktivieren."
                },
                {
                    title: "8. Änderungen unserer Cookie-Richtlinie",
                    content: "Wir können unsere Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen informieren, indem wir die neue Cookie-Richtlinie auf dieser Seite veröffentlichen und das Datum der letzten Aktualisierung aktualisieren. Es wird empfohlen, diese Cookie-Richtlinie regelmäßig auf Änderungen zu überprüfen."
                },
                {
                    title: "9. Kontaktieren Sie uns",
                    content: "Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte unter:",
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
                                    {section.listItems.map((item: string, i: number) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}

                            {section.subsections && section.subsections.map((subsection: any, i: number) => (
                                <div key={i} className="ml-6 mt-4 mb-4">
                                    <h3 className="text-xl font-semibold mb-3">{subsection.title}</h3>
                                    <p>{subsection.content}</p>
                                </div>
                            ))}

                            {section.addressLines && (
                                <address className="not-italic mt-2">
                                    {section.addressLines.map((line: string, i: number) => (
                                        <div key={i}>{line}</div>
                                    ))}
                                </address>
                            )}
                        </section>
                    ))}
                </article>
            </main>

            {/* Footer */}
            <Footer lang={lang} />
        </>
    );
}
