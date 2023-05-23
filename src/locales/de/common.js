import {
  FaCar,
  FaCompass,
  FaGlassMartiniAlt,
  FaHeart,
  FaPlane,
  FaShoppingBag,
} from "react-icons/fa";

export const de = {
  common: {
    routes: [
      { href: "/#sluzby", label: "Dienstleistungen" },
      { href: "/#cenik", label: "Preisliste" },
      { href: "/#reference", label: "Referenzen" },
      { href: "/#ridici", label: "Fahrer" },
      { href: "/#vozy", label: "Unser fuhrpark" },
      { href: "/#kontakt", label: "Kontakt" },
    ],
    footer: {
      links: [
        {
          href: "/gdpr",
          label: "Datenschutz-Bestimmungen",
        },
      ],
      revealSignature: "Erstellt von Reveal",
    },
  },

  // Main Page
  index: {
    // Seo
    seo: {
      title: "Wir versenden von überall nach überall",
      description:
        "Wir bieten Ihnen eine bequeme, sichere und schnelle Personenbeförderung in ganz Europa an. Wir sind ein junges, dynamisches Unternehmen, das sich ständig weiterentwickelt, um Ihnen die modernsten Transportmöglichkeiten anbieten zu können.",
    },

    // Hero section
    hero: {
      heading: "Wir versenden von überall nach überall",
      perex:
        "Wir bieten Ihnen eine bequeme, sichere und schnelle Personenbeförderung in ganz Europa an. Wir sind ein junges, dynamisches Unternehmen, das sich ständig weiterentwickelt, um Ihnen die modernsten Transportmöglichkeiten anbieten zu können.",
      button: "Ich interessiere mich",
    },

    // Services section
    services: {
      preHeading: "Dienstleistungen",
      heading: "Was können wir für sie machen?",
      services: [
        {
          heading: "Persönlicher Fahrer Ihres Wagen",
          text: "Wir bieten luxuriösen Chauffeur-Service in Ihrem eigenen Fahrzeug an. Sie können die Vorteile Ihres eigenen Fahrzeugs genießen, ohne fahren oder sich um das Parken kümmern zu müssen. Unsere erfahrenen Fahrer sorgen für Ihr Komfort und Sicherheit während der Reise an jedem Ort in Europa. Wir sind für Einzelpersonen und Gruppen jederzeit verfügbar. Mit uns haben Sie die Gewissheit, dass Sie pünktlich und stressfrei an Ihrem Zielort ankommen werden.",
          icon: FaCar,
        },
        {
          heading: "Persönlicher Fahrer mit unserem Wagen",
          text: "Unser Unternehmen bietet Ihnen bequemen und zuverlässigen Transport mit professionellem Fahrer und modernem Fahrzeug an. Sie müssen sich keine Sorgen um die Suche nach einem Parkplatz oder das Fahren in einer unbekannten Stadt machen, unser erfahrener Fahrer kümmert sich um alles. Wir bieten eine Auswahl an verschiedenen Fahrzeugtypen, um Ihren Transport so bequem wie möglich zu gestalten. Mit unserem persönlichen Fahrer können Sie sich auf Präzision, Schnelligkeit und Sicherheit bei der Beförderung an jedem Ort in Europa verlassen.",
          icon: FaCompass,
        },
        {
          heading: "Flughafentransporte innerhalb Europas",
          text: "Vermeiden Sie den Stress der Planung Ihrer Reise zum Flughafen. Wir werden Ihnen Transport zum/vom Flughafen innerhalb Europas mit bequemem und zuverlässigem Service, der Ihren Bedürfnissen entspricht, bereitstellen. Mit uns können Sie eine angenehme und sorgenfreie Reise genießen, ohne sich um das Parken oder das Finden der richtigen Route kümmern zu müssen.",
          icon: FaPlane,
        },
        {
          heading: "Express-kurier",
          text: "Wenn Sie eine dringende Sendung haben, die Sie zuverlässig an einen entfernten Ort innerhalb der Tschechischen Republik oder sogar in Europa liefern müssen, haben wir die Lösung für Sie. Unser Unternehmen bietet einen Express-Kurierdienst an, mit dem Sie Ihre wichtige Sendung schnell und sicher an die Zieladresse liefern können.",
          icon: FaShoppingBag,
        },
        {
          heading: "Hochzeiten",
          text: "Wir haben komfortable Hochzeitsautos mit professionellen Fahrern in Anzügen bereitgestellt, damit Ihr Hochzeitstag perfekt wird. Wir werden dafür sorgen, dass Sie und Ihre Gäste bequem und stilvoll zur Hochzeitszeremonie gelangen.",
          icon: FaHeart,
        },
        {
          heading: "Firmenfeiern und Feste",
          text: "Bei der Organisation von Firmen- oder Familienveranstaltungen bieten wir Ihnen gerne eine sichere und komfortable Transportlösung direkt bis zur Haustür an. Vom rechtzeitigen Abholen bis zur Lieferung am Zielort können Sie sich auf unsere Zuverlässigkeit und professionelle Herangehensweise verlassen.",
          icon: FaGlassMartiniAlt,
        },
      ],
    },

    // Pricelist section
    priceList: {
      preHeading: "Preisliste",
      heading: "Wie viel wird es kosten?",
      perex:
        "* Die Preise dienen nur zur Orientierung und werden an die Anforderungen des Kunde oder der Kundin angepasst",
      standardHeading: "Standarddienste",
      standardPrices: [
        {
          item: "Persönlicher Fahrer mit unserem Wagen",
          price: "von 800 CZK / std.",
        },
        {
          item: "Persönlicher Fahrer Ihres Wagen",
          price: "400 CZK / std.",
        },
        {
          item: "Hochzeiten",
          price: "von 800 CZK / std.",
        },
        {
          item: "Firmenfeiren und Feste",
          price: "von 800 CZK / std.",
        },
        {
          item: "Express kurier – auf Anfrage",
          price: "gemäß spezifikationod",
        },
      ],
      airportHeading: "Flughafen",
      airportPrices: [
        {
          item: "Prag -> Flughafen Václava Havla",
          price: "von 800 CZK",
        },
        {
          item: "Prag -> Flughafen Wien",
          price: "8150 CZK",
        },
        {
          item: "Prag -> Flughafen München",
          price: "8800 CZK",
        },
      ],
    },

    // Testimonials section
    testimonials: {
      preHeading: "Referenzen",
      heading: "Ihre meinung",
      perex: "* Herkunft von Referenzen - Bewertung von Google-Unternehmen",
      testimonials: [
        {
          name: "Jan Hrubeš",
          text: "Great deal, speed, reliability, professionalism, high quality 💯 we were very satisfied, thanks 👏👍",
        },
        {
          name: "Kateřina Juránková",
          text: "Perfect professional ride, perfect cleanliness of the interior, very pleasant performance, reliability, 100% service as it should be and like bonus, very nice and handsome young man ...",
        },
        {
          name: "Alexandr Kučera",
          text: "Great professional approach and always a good mood. Drive4people I can only recommend.",
        },
        {
          name: "Marek Sahula",
          text: "Excellent and professional approach. The driver arrived on time, he was smiling and very nice all the time. This company can only recommend.",
        },
        {
          name: "Jiří Sandanus",
          text: "The service was amazing, everything went to our complete satisfaction. I can just recommend to everyone.",
        },
        {
          name: "Tobiáš bartoš",
          text: "From the first meeting Absolute professionalism !. Mr. Luke is Very pleasant and reliable. Quality representation of the company. More like that Professional drivers.",
        },
        {
          name: "Lukáš Kousal",
          text: "(Translated by google) - I go to this company regularly. AND I am always satisfied with the accuracy. They always meet me in all demands and sudden changes. I can only recommend!",
        },
        {
          name: "Hana Bluchová",
          text: "Great satisfaction, the ride was without problems, reliability, professional.",
        },
      ],
    },

    // Drivers section
    drivers: {
      preHeading: "Fahrer",
      heading: "Wer wird sie oder ihre sendung befördern?",
      perex:
        "Unser Unternehmen ist stolz auf seinen professionellen Ansatz und seinen hochwertigen Kundenservice. Deshalb haben wir in unserem Team nur erfahrene und zuverlässige Fahrer, die sich mit den europäischen Straßen gut auskennen und strenge Sicherheitsstandards einhalten. Unsere Fahrer sind immer bereit, beim Einladen von Gepäck zu helfen, und sorgen während Ihrer Reise für maximalen Komfort und Sicherheit. Mit unserem Fahrerteam können Sie sicher sein, dass Sie pünktlich und stressfrei an Ihrem Ziel ankommen werden.",
      drivers: [
        {
          name: "Lukáš Jiránek",
          src: "/img/d4p-2023-5.jpg",
        },
        {
          name: "Nguyen Manh Tien",
          src: "/img/d4p-2023-6.jpg",
        },
        {
          name: "Matěj Bedrník",
          src: "/img/d4p-2023-7.jpg",
        },
      ],
    },

    // CarFleet section
    carFleet: {
      preHeading: "Unser fuhrpark",
      heading: "Über welche fahrzeuge verfügen wir?",
      perex:
        "Wir können Ihnen Transportdienstleistungen mit jedem Fahrzeugtyp anbieten, sei es ein Personenkraftwagen oder ein Mehrzweck-Minibus. Außerdem planen wir derzeit den professionellen Warentransport in ganz Europa, den wir mit modernen Lieferwagen durchführen. Sie können sich auf unsere Zuverlässigkeit und sorgfältige Herangehensweise an Ihre Bedürfnisse verlassen.",
      cars: {
        car1: "Volkswagen Passat Variant, 2019",
        car2: "Mercedes-Benz E Class 220D – 2019",
      },
    },

    // Contact section
    contect: {
      preHeading: "Kontakt",
      heading: "Steigen sie ein und fahren sie mit uns",
      phoneHeading: "Telefon:",
      emailHeading: "E-mail:",
      form: {
        heading: "Haben sie eine frage?",
        nameSurnameInput: "Name und Nachname",
        emailInput: "E-mail",
        phoneInput: "Telefon",
        messageInput: "Deine Nachricht",
        gdprLabel: "Ich stimme den Bedingungen zu",
        gdprLink: "schutz personenbezogener Daten.",
        submitButton: "Senden",
        // Success message
        successAlert: {
          heading: "Das Formular wurde erfolgreich gesendet",
          text: "Vielen Dank, dass Sie das Formular ausgefüllt haben. Wir werden uns schnellstmöglich bei Ihnen melden.",
          backToHomePage: "Zurück zur Hauptseite",
        },
        // Error messages
        errorAlert: {
          heading: "Etwas ist schief gelaufen",
          text: "Das Formular konnte nicht gesendet werden. Bitte versuchen Sie es später noch einmal oder verwenden Sie eine andere Kontaktmethode.",
        },
      },
      billingInfo: {
        heading: "Abrechnungsdaten",
        sro: {
          name: "Cardrive4people s.r.o",
          ico: "IČO: 17440858",
          dic: "DIČ: CZ17440858",
        },
        bank: {
          number: "6204445359/0800",
          iban: "IBAN - CZ76 0800 0000 0062 0444 5359",
          bicSwift: "BIC/SWIFT - GIBACZPX",
        },
      },
    },
  },
};
