import {
  FaCar,
  FaCompass,
  FaGlassMartiniAlt,
  FaHeart,
  FaPlane,
  FaShoppingBag,
} from "react-icons/fa";

export const cs = {
  common: {
    routes: [
      { href: "/#sluzby", label: "Služby" },
      { href: "/#cenik", label: "Ceník" },
      { href: "/#reference", label: "Reference" },
      { href: "/#ridici", label: "Řidiči" },
      { href: "/#vozy", label: "Vozy" },
      { href: "/#kontakt", label: "Kontakt" },
    ],
    footer: {
      links: [
        {
          href: "/gdpr",
          label: "Zpracování osobních údajů",
        },
      ],
      revealSignature: "Vytvořili Reveal",
    },
  },

  // Main Page
  index: {
    // Seo
    seo: {
      title: "Přepravíme odkudkoli kamkoli",
      description:
        "Zajistíme Vám pohodlnou, bezpečnou a rychlou přepravu osob po Evropě. Jsme mladá, dynamická firma, která se neustále rozvíjí, aby Vám mohla nabídnout nejmodernější způsoby dopravy.",
    },

    // Hero section
    hero: {
      heading: "Přepravíme odkudkoli kamkoli",
      perex:
        "Zajistíme Vám pohodlnou, bezpečnou a rychlou přepravu osob po Evropě. Jsme mladá, dynamická firma, která se neustále rozvíjí, aby Vám mohla nabídnout nejmodernější způsoby dopravy.",
      button: "Zjistit více",
    },

    // Services section
    services: {
      preHeading: "Služby",
      heading: "Co pro vás můžeme udělat?",
      services: [
        {
          heading: "Osobní řidič Vašeho vozu",
          text: "Nabízíme luxusní přepravu s řidičem ve Vašem vlastním voze. Můžete si tak užít výhody Vašeho vlastního vozu, aniž byste museli řídit a starat se o parkování. Naši zkušení řidiči zajistí Vaše pohodlí a bezpečí při cestování na jakémkoliv místě v Evropě. Jsme k dispozici pro jednotlivce i skupiny, a to kdykoliv vám vyhovuje. S námi máte jistotu, že dorazíte včas a bez stresu na Vaše místo určení",
          icon: FaCar,
        },
        {
          heading: "Osobní řidič s naším vozem",
          text: "Naše firma Vám nabízí pohodlnou a spolehlivou přepravu s profesionálním řidičem a moderním vozem. Nemusíte se starat o hledání parkovacího místa nebo o jízdu v neznámém městě, náš zkušený řidič se o vše postará. Nabízíme výběr z různých typů vozidel, aby byla vaše přeprava co nejpohodlnější. S naším osobním řidičem se můžete spolehnout na přesnost, rychlost a bezpečnost při přepravě na jakémkoliv místě v Evropě. ",
          icon: FaCompass,
        },
        {
          heading: "Přeprava na/z letiště v rámci evropy",
          text: "Vyhněte se stresu s plánováním cesty na letiště. Zajistíme pro Vás přepravu na/z letiště v rámci Evropy s pohodlným a spolehlivým servisem, který odpovídá Vašim potřebám. S námi si můžete užít příjemnou a bezstarostnou cestu, aniž byste museli řešit parkování nebo hledat správnou trasu.",
          icon: FaPlane,
        },
        {
          heading: "Expresní kurýr",
          text: "Pokud máte naléhavou zásilku, kterou potřebujete spolehlivě doručit na vzdálené místo v rámci České republiky nebo dokonce v Evropě, máme pro Vás řešení. Naše společnost nabízí expresní kurýrní službu, která Vám umožní doručení Vaší důležité zásilky rychle a bezpečně na cílovou adresu.",
          icon: FaShoppingBag,
        },
        {
          heading: "Svatby",
          text: "Máme připraveny komfortní svatební vozy s profesionálním řidičem v obleku, aby Váš svatební den byl dokonalý. Postaráme se o to, abyste Vy a Vaši hosté dorazili ke svatebnímu obřadu v pohodlí a stylu.",
          icon: FaHeart,
        },
        {
          heading: "Firemní večírky a oslavy",
          text: "Při organizaci firemních nebo rodinných akcí Vám rádi zajistíme bezpečnou a komfortní přepravu přímo ke dveřím. Od včasného vyzvednutí až po doručení na místo určení, můžete spolehnout na naši spolehlivost a profesionální přístup.",
          icon: FaGlassMartiniAlt,
        },
      ],
    },

    // Pricelist section
    priceList: {
      preHeading: "Ceník",
      heading: "Kolik to bude stát?",
      perex:
        "* Ceny jsou pouze orientační a upravují se podle požadavků zákazníků",
      standardHeading: "Standardní služby",
      standardPrices: [
        {
          item: "Osobní řidič s naším vozem",
          price: "od 800 Kč / hod",
        },
        {
          item: "Osobní řidič Vašeho vozidla",
          price: "400 kč / hod",
        },
        {
          item: "Svatby",
          price: "od 800 kč / hod",
        },
        {
          item: "Firmení večírky a oslavy",
          price: "od 800 Kč / hod",
        },
        {
          item: "Expresní kurýr",
          price: "dle specifikace",
        },
      ],
      airportHeading: "Letiště",
      airportPrices: [
        {
          item: "Praha -> Letiště Václava Havla",
          price: "od 800 Kč / hod",
        },
        {
          item: "Praha -> Letiště Vídeň",
          price: "8150 kč",
        },
        {
          item: "Praha -> Letiště Mnichov",
          price: "8800 kč",
        },
      ],
    },

    // Testimonials section
    testimonials: {
      preHeading: "Reference",
      heading: "Co řikají klienti",
      perex: "* Původ referencí - hodnocení firem google",
      testimonials: [
        {
          name: "Jan Hrubeš",
          text: "Skvělá domluva, rychlost, spolehlivost, profesionalita, vysoká kvalita 💯 byli jsme velmi spokojeni, díky 👏👍",
        },
        {
          name: "Kateřina Juránková",
          text: "Dokonala profi jizda, dokonala cistota interieru, velmi prijemne vystupovani, spolehlivost, stoprocentni servis jak ma byt a jako bonus, velmi sympaticky a pohledny mlady muz...",
        },
        {
          name: "Alexandr Kučera",
          text: "Skvělý profesionální přístup a vždy dobrá nálada. Drive4people můžu jedině doporučit.",
        },
        {
          name: "Marek Sahula",
          text: "Výborný a profesionální přístup. Pan řidič přijel na domluvený čas, byl usměvavý a po celou dobu velmi příjemný. Tuto společnost lze jedině doporučit.",
        },
        {
          name: "Jiří Sandanus",
          text: "Služba byla úžasná, vše proběhlo k naší naprosté spokojenosti. Mohu všem jen doporučit.",
        },
        {
          name: "Tobiáš bartoš",
          text: "Od prvního setkání Naprostá profesionalita!. Pan Lukáš je Velice příjemný a spolehlivý. Kvalitni repretentace firmy. Takových více Profi řidičů. Kodlova",
        },
        {
          name: "Lukáš Kousal",
          text: "(Přeloženo pomocí google) - Pravidelně chodím do této společnosti. A jsem vždy spokojen s přesností. Vždy mě potkávají ve všech požadavcích a náhlých změnách. Mohu jen DOPORUČIT!",
        },
        {
          name: "Hana Bluchová",
          text: "Velká spokojenost, jízda byla bez problémů, spolehlivost, profesionální.",
        },
      ],
    },

    // Drivers section
    drivers: {
      preHeading: "Řidiči",
      heading: "Kdo Vás poveze?",
      perex:
        "Naše společnost si zakládá na profesionálním přístupu a kvalitním zákaznickém servisu. Proto máme ve svém týmu pouze zkušené a spolehlivé řidiče, kteří jsou dobře obeznámeni s evropskými silnicemi a dodržují přísné bezpečnostní standardy. Naši řidiči jsou vždy ochotni pomoci s naložením zavazadel a poskytnou vám maximální pohodlí a bezpečnost během vaší cesty. S naším týmem řidičů si můžete být jisti, že dorazíte na čas a bez stresu na vaše místo určení.",
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
      preHeading: "Vozový park",
      heading: "Čím Vás povezeme?",
      perex:
        "Jsme schopni zajistit pro Vás dopravu jakýmkoliv vozidlem, ať už potřebujete osobní vůz nebo vícecestný minibus. Navíc nově připravujeme profesionální přepravu zboží po celé Evropě, kterou zajišťujeme moderními dodávkami. Můžete se spolehnout na naši spolehlivost a pečlivý přístup k Vašim potřebám.",
      cars: {
        car1: "Volkswagen Passat Variant, 2019",
        car2: "Mercedes-Benz E Class 220D – 2019",
      },
    },

    // Contact section
    contect: {
      preHeading: "Kontakt",
      heading: "Pojďte se s námi svézt",
      phoneHeading: "Telefon:",
      emailHeading: "E-mail:",
      form: {
        heading: "Máte dotaz?",
        nameSurnameInput: "Jméno a příjmení",
        emailInput: "Váš e-mail",
        phoneInput: "Váš telefon",
        messageInput: "Vaše zpráva",
        gdprLabel: "Souhlasím s podmínkami",
        gdprLink: "ochrany osobních údajů.",
        submitButton: "Odeslat",
        // Success message
        successAlert: {
          heading: "Formulář byl úspěšně odeslán",
          text: "Děkujeme za vyplnění formuláře. Ozveme se vám co nejdříve to půjde.",
          backToHomePage: "Zpět na hlavní stránku",
        },
        // Error messages
        errorAlert: {
          heading: "Něco se nepovedlo",
          text: "Formulář se nepodařilo odeslat, zkuste to později, nebo využijte jiný způsob kontaktu.",
        },
      },
      billingInfo: {
        heading: "Fakturační údaje",
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
