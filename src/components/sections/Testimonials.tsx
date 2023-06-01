import clsx from "clsx";
import { MdFormatQuote } from "react-icons/md";
import SwiperCore, { A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../Container";
import Heading from "../Heading";

const testimonials = [
  {
    name: "Mgr. Ondřej Mach",
    position: "Firemní právník",
    content:
      "Pan Šimana dokáže vždy najít optimální řešení a přizpůsobit se i klientovi, který občas řeší věci ze dne na den. Navíc zná i takové způsoby financování a investování, které mnoho jiných finančních poradců a bankéřů pokládá za neexistující. Pana Šimanu tedy lze jedině doporučit.",
  },
  {
    name: "Zdeněk Dolejší",
    position: "Provozovatel restaurací",
    content:
      "Davide, chtěl bych Vám poděkovat za perfektní osobní přístup, lidské jednání, profesionalitu a zajištění těch nejlepších podmínek - vše v rekordním čase a bez zbytečného papírování. Vašich služeb využiji i v budoucnu a budu Vás upřímně rád doporučovat. DĚKUJI 👌💸 Zdeněk Dolejší",
  },
  {
    name: "Ondřej Nádvorník, MBA",
    position: "jednatel FINLEY AGENCY s.r.o.",
    content:
      "Díky Davidu Šimanovi se nám podařilo pro náš projekt získat firemní financování od renomované banky. David byl profesionální, proaktivní a právě díky jenom zkušenostem a kontaktů se vše podařilo dohodnout a zrealizovat ve velmi krátkém čase. Davidovi tímto děkuji a rád se na něj obrátím i v budoucnu v dalších případech, kdy půjde o naše finanční plánování.",
  },
  {
    name: "Ondřej Langmajer",
    position: "MAVY Monolity s.r.o.",
    content:
      "Na pana Šimanu jsme narazili náhodou a to reklamou na sociálních sítích. V tu dobu jsme aktivně řešili provozní úvěr pro naši společnost, ale bez úspěchu. Až pan Šimana nám s tímto problémem pomohl, navrhl konstruktivní řešení a celou věc dotáhl až do zdárného konce. Vyřešením jednoho problému ale pro p. Šimanu neskončila a proaktivně nabízel další možnosti, jak pomoci naší společnosti. Moc děkujeme za jeho služby, které budeme i nadále rádi využívat.",
  },
  {
    name: "Veronika Vencová",
    position: "OSVČ freelencer",
    content:
      "Nevěřila jsem. Nečekala jsem nic. David Šimana je pro mně jednorožec. Opravdu dělal vše pro to, aby pomohl a nenechal se odradit ani tím, že jsem nebyla úplně nejpříjemnější klient. Jakmile se trochu srovnáme, svěříme Davidovi i naše finance a nejen úvěr. Ze srdce díky.",
  },
  {
    name: "Beatrice Fictum",
    position: "Design ve stavebnictví",
    content:
      "Naprosto výjimečný přístup a profesionální jednání. V mem případě se jednalo o zahraniční úvěr bez dokládání příjmu… opravdu složitý a zdlouhavý proces, kterým se David “prokousal” ke zdárnému a úspěšnému konci. Vše vyřídil, se vším pomohl, poradil a skvěle to zorganizoval a vymyslel. Děkuji za to!!!",
  },
];

export default function Testimonials({
  className = "",
}: {
  className?: string;
}) {
  SwiperCore.use([Pagination, Autoplay, A11y]);
  return (
    <section className={clsx("", className)}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="swiper-themed bg-gradient-to-r from-primary-900 to-primary-700 py-16 text-center text-white md:to-primary-500"
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: true,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Container>
              <div className="flex flex-col py-12 md:flex-row md:py-24">
                <MdFormatQuote className="mr-5 h-32 w-32 flex-shrink-0 text-indigo-500" />
                <div>
                  <p className="mb-6 text-left text-xl font-normal normal-case md:text-2xl">
                    {testimonial.content}
                  </p>
                  <Heading
                    level={"none"}
                    size="sm"
                    className="text-left text-secondary"
                    hasMarginBottom
                  >
                    {testimonial.name}
                  </Heading>
                  <Heading
                    level={"none"}
                    size="xs"
                    color="inherit"
                    className="mb-0 text-left !font-medium text-gray-200"
                  >
                    {testimonial.position}
                  </Heading>
                </div>
              </div>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
