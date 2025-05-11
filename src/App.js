import { useState } from "react";
import bannerImage from "./banner.jpg"; // Adjust the path if needed
// Translation dictionaries
const translations = {
  es: {
    title: "Chichi Auto Import, srl",
    tagline: "Los mejores vehículos importados en República Dominicana",
    navbar: {
      home: "Inicio",
      vehicles: "Vehículos",
      services: "Servicios",
      financing: "Financiamiento",
      aboutUs: "Sobre Nosotros",
      contact: "Contacto",
    },
    hero: {
      heading: "Encuentre su vehículo ideal",
      subheading: "Gran selección de vehículos nuevos y usados importados",
      cta: "Contáctanos",
    },
    familyBusiness: {
      heading: "Negocio Familiar",
      description:
        "Somos un negocio familiar con más de 30 años de experiencia en la venta de vehículos de calidad en San Víctor, Moca. Nuestra pasión es encontrar el vehículo perfecto para cada cliente, ofreciendo precios justos y un servicio personalizado.",
      values: "Valores: Honestidad • Calidad • Servicio • Compromiso",
    },
    contact: {
      heading: "Contáctenos",
      address: "Carretera Moca La Vega km 2 Moca Provoincia Espaillat",
      phone: "+1 809-737-3907",
      email: "ramong25@gmail.com",
      hours: "Lunes a Sábado: 8:00 AM - 6:00 PM",
    },
    footer: {
      copyright: "© 2025 Chichi Auto Import, srl. Todos los derechos reservados.",
    },
    languageSwitch: "English",
  },
  en: {
    title: "Chichi Auto Import, srl",
    tagline: "The best imported vehicles in the Dominican Republic",
    navbar: {
      home: "Home",
      vehicles: "Vehicles",
      services: "Services",
      financing: "Financing",
      aboutUs: "About Us",
      contact: "Contact",
    },
    hero: {
      heading: "Find your ideal vehicle",
      subheading: "Great selection of new and used imported vehicles",
      cta: "Contact us",
    },
    familyBusiness: {
      heading: "Family Business",
      description:
        "We are a family business with over 30 years of experience selling quality vehicles in San Víctor, Moca. Our passion is finding the perfect vehicle for each customer, offering fair prices and personalized service.",
      values: "Values: Honesty • Quality • Service • Commitment",
    },
    contact: {
      heading: "Contact Us",
      address: "Main Street #123, San Víctor, Moca",
      phone: "+1 809-555-1234",
      email: "info@autoimperio.do",
      hours: "Monday to Saturday: 9:00 AM - 6:00 PM",
    },
    footer: {
      copyright: "© 2025 Chichi Auto Import, srl. All rights reserved.",
    },
    languageSwitch: "Español",
  },
};

const CarDealershipLanding = () => {
  const [language, setLanguage] = useState("es");
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <div className="font-sans bg-white">
      {/* Header/Navigation */}
      <header className="bg-black text-white">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-white">
              AI
            </div>
            <span className="text-xl font-bold">{t.title}</span>
          </div>
          {/*           
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-red-500">{t.navbar.home}</a>
            <a href="#" className="hover:text-red-500">{t.navbar.vehicles}</a>
            <a href="#" className="hover:text-red-500">{t.navbar.services}</a>
            <a href="#" className="hover:text-red-500">{t.navbar.financing}</a>
            <a href="#" className="hover:text-red-500">{t.navbar.aboutUs}</a>
            <a href="#" className="hover:text-red-500">{t.navbar.contact}</a>
          </div>
           */}
          <button
            onClick={toggleLanguage}
            className="bg-transparent border border-red-600 text-red-600 px-3 py-1 rounded hover:bg-red-600 hover:text-white transition"
          >
            {t.languageSwitch}
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-96 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t.hero.heading}
            </h1>
            <p className="text-xl md:text-2xl mb-8">{t.hero.subheading}</p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition w-max">
              {t.hero.cta}
            </button>
          </div>
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/banner.jpg')" }}
            ></div>
          </div>
        </section>

        {/* Family Business Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-black border-b-2 border-red-600 pb-2 inline-block">
                {t.familyBusiness.heading}
              </h2>
              <p className="text-lg mb-6 text-gray-800">
                {t.familyBusiness.description}
              </p>
              <p className="font-semibold text-red-600">
                {t.familyBusiness.values}
              </p>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <p className="text-center font-semibold text-gray-800">
                    Honestidad
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <p className="text-center font-semibold text-gray-800">
                    Calidad
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </div>
                  <p className="text-center font-semibold text-gray-800">
                    Servicio
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <polyline points="17 11 19 13 23 9"></polyline>
                    </svg>
                  </div>
                  <p className="text-center font-semibold text-gray-800">
                    Compromiso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black border-b-2 border-red-600 pb-2 inline-block">
              {t.contact.heading}
            </h2>
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Chichi Auto Import, srl
              </h3>
              <div className="flex items-start mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600 mr-2 mt-1"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p className="text-gray-700">{t.contact.address}</p>
              </div>
              <div className="flex items-start mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600 mr-2 mt-1"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <p className="text-gray-700">{t.contact.phone}</p>
              </div>
              <div className="flex items-start mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600 mr-2 mt-1"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <p className="text-gray-700">{t.contact.email}</p>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600 mr-2 mt-1"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <p className="text-gray-700">{t.contact.hours}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-white">
                AI
              </div>
              <span className="text-xl font-bold">{t.title}</span>
            </div>
          </div>
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

export default CarDealershipLanding;
