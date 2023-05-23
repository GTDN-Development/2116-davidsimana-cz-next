import {
  FaCar,
  FaCompass,
  FaGlassMartiniAlt,
  FaHeart,
  FaPlane,
  FaShoppingBag,
} from "react-icons/fa";

export const en = {
  common: {
    routes: [
      { href: "/#sluzby", label: "Services" },
      { href: "/#cenik", label: "Price list" },
      { href: "/#reference", label: "Testimonials" },
      { href: "/#ridici", label: "Drivers" },
      { href: "/#vozy", label: "Car fleet" },
      { href: "/#kontakt", label: "Contact" },
    ],
    footer: {
      links: [
        {
          href: "/gdpr",
          label: "Privacy policy",
        },
      ],
      revealSignature: "Created by Reveal",
    },
  },

  // Main Page
  index: {
    // Seo
    seo: {
      title: "We'll transport you everywhere",
      description:
        "We will provide you with comfortable, safe, and fast transportation of people throughout Europe. We are a young, dynamic company that is constantly evolving to offer you the latest methods of transportation.",
    },

    // Hero section
    hero: {
      heading: "We'll transport you everywhere",
      perex:
        "We will provide you with comfortable, safe, and fast transportation of people throughout Europe. We are a young, dynamic company that is constantly evolving to offer you the latest methods of transportation.",
      button: "Learn more",
    },

    // Services section
    services: {
      preHeading: "Services",
      heading: "What can we do for you?",
      services: [
        {
          heading: "Personal driver for your own car",
          text: "We offer luxury transportation with a driver in your own car. You can enjoy the benefits of your own vehicle without having to drive and worry about parking. Our experienced drivers ensure your comfort and safety when traveling anywhere in Europe. We are available for individuals and groups, anytime that suits you. With us, you can be sure to arrive at your destination on time and stress-free.",
          icon: FaCar,
        },
        {
          heading: "Personal driver with our vehicle",
          text: "Our company offers you comfortable and reliable transportation with a professional driver and a modern vehicle. You don't have to worry about finding a parking spot or driving in an unfamiliar city, our experienced driver will take care of everything. We offer a selection of different types of vehicles to make your transportation as comfortable as possible. With our personal driver, you can rely on precision, speed, and safety when traveling anywhere in Europe.",
          icon: FaCompass,
        },
        {
          heading: "Transportation to/from airports throughout Europe",
          text: "Avoid the stress of planning your airport journey. We provide transportation to/from airports throughout Europe with a comfortable and reliable service that meets your needs. With us, you can enjoy a pleasant and worry-free journey without having to deal with parking or finding the right route.",
          icon: FaPlane,
        },
        {
          heading: "Express courier",
          text: "If you have an urgent shipment that needs to be reliably delivered to a distant location within the Czech Republic or even Europe, we have a solution for you. Our company offers an express courier service that allows you to quickly and safely deliver your important shipment to its destination address.",
          icon: FaShoppingBag,
        },
        {
          heading: "Weddings",
          text: "We have comfortable wedding cars with a professional driver in a suit ready for you to make your wedding day perfect. We will ensure that you and your guests arrive at the wedding ceremony in comfort and style.",
          icon: FaHeart,
        },
        {
          heading: "Corporate parties and celebrations",
          text: "When organizing corporate or family events, we are happy to provide you with safe and comfortable transportation right to the door. From timely pick-up to delivery to the destination, you can rely on our reliability and professional approach.",
          icon: FaGlassMartiniAlt,
        },
      ],
    },

    // Pricelist section
    priceList: {
      preHeading: "Price list",
      heading: "How much will it cost?",
      perex:
        "* Prices are for guidance and are adjusted according to the clients requirements.",
      standardHeading: "Standart services",
      standardPrices: [
        {
          item: "Personal driver with our car",
          price: "starting at 800 CZK / hour",
        },
        {
          item: "Personal driver of your car",
          price: "400 CZK / hour",
        },
        {
          item: "Weddings",
          price: "starting at 800 CZK / hour",
        },
        {
          item: "Corporate parties and celebrations",
          price: "starting at 800 CZK / hour",
        },
        {
          item: "Express courier",
          price: "According to specification",
        },
      ],
      airportHeading: "Airport",
      airportPrices: [
        {
          item: "Prague -> Václav Havel Airport",
          price: "starting at 800 CZK / hour",
        },
        {
          item: "Prague -> Vienna Airport",
          price: "8150 CZK",
        },
        {
          item: "Prague -> Munich Airport",
          price: "8800 CZK",
        },
      ],
    },

    // Testimonials section
    testimonials: {
      preHeading: "Testimonials",
      heading: "Our clients say",
      perex: "* Testimonials origin - google business rankings",
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
      preHeading: "Drivers",
      heading: "Who will be your driver?",
      perex:
        "Our company values are professional approach and quality customer service. That's why we only have experienced and reliable drivers on our team who are well-versed in European roads and adhere to strict safety standards. Our drivers are always willing to help with loading luggage and provide you with maximum comfort and safety during your journey. With our team of drivers, you can be sure that you will arrive at your destination on time and without any stress.",
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
      preHeading: "Car fleet",
      heading: "Which car will we use?",
      perex:
        "We are able to provide transportation for you with any type of vehicle, whether you need a personal car or a multi-passenger minibus. In addition, we are now preparing professional goods transportation throughout Europe, which we provide with modern delivery vans. You can rely on our reliability and careful approach to your needs.",
      cars: {
        car1: "Volkswagen Passat Variant, 2019",
        car2: "Mercedes-Benz E Class 220D – 2019",
      },
    },

    // Contact section
    contect: {
      preHeading: "Contakt",
      heading: "Let's take a ride with us",
      phoneHeading: "Phone:",
      emailHeading: "E-mail:",
      form: {
        heading: "Have a question?",
        nameSurnameInput: "Name and Surname",
        emailInput: "Your e-mail",
        phoneInput: "Your phone",
        messageInput: "Yout message",
        gdprLabel: "I agree with terms and conditions described in our",
        gdprLink: "privacy policy.",
        submitButton: "Submit",
        // Success message
        successAlert: {
          heading: "The form was sent successfully",
          text: "Thank you for filling out the form. We will get back to you as soon as possible.",
          backToHomePage: "Back to the main page",
        },
        // Error messages
        errorAlert: {
          heading: "Something went wrong",
          text: "The form could not be submitted, please try again later or use another contact method.",
        },
      },
      billingInfo: {
        heading: "Billing information",
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
