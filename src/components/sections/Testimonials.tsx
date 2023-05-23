import { useTranslation } from "@/hooks/useTranslation";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import SwiperCore, { A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Container from "../Container";
import Heading from "../Heading";
import PreHeading from "../PreHeading";
import Reveal from "../Reveal";

function Avatar({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const initials = name
    .split(" ")
    .map((n, i) => (i === 0 || i === name.split(" ").length - 1 ? n[0] : ""))
    .join("");

  const randomBackgroundClasses = [
    "bg-primary",
    "bg-red-600",
    "bg-orange-600",
    "bg-yellow-600",
    "bg-green-600",
    "bg-teal-600",
    "bg-blue-600",
    "bg-purple-600",
    "bg-pink-600",
  ];

  if (!mounted)
    return (
      <div
        className={clsx(
          "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg uppercase text-white",
          className
        )}
      >
        <span>{initials}</span>
      </div>
    );

  return (
    <div
      className={clsx(
        "flex h-12 w-12 items-center justify-center rounded-full text-lg uppercase text-white",
        randomBackgroundClasses[
          Math.floor(Math.random() * randomBackgroundClasses.length)
        ],
        className
      )}
    >
      <span>{initials}</span>
    </div>
  );
}

function Carousel() {
  SwiperCore.use([Pagination, Autoplay, A11y]);
  const t = useTranslation();

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="h-auto items-center"
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
      }}
    >
      {t.index.testimonials.testimonials.map((testimonial) => (
        <SwiperSlide
          key={testimonial.name}
          className="mb-12 flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gray-200 bg-opacity-80 px-6 py-10 text-center"
        >
          <Avatar name={testimonial.name} className="mx-auto mb-4" />
          <span className="block font-bold">{testimonial.name}</span>
          <div className="my-2 flex items-center justify-center gap-1">
            <FaStar className="text-sm text-yellow-400" />
            <FaStar className="text-sm text-yellow-400" />
            <FaStar className="text-sm text-yellow-400" />
            <FaStar className="text-sm text-yellow-400" />
            <FaStar className="text-sm text-yellow-400" />
          </div>
          <p className="text-sm">{testimonial.text}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function Testimonials() {
  const t = useTranslation();
  return (
    <section id="reference" className="bg-gray-100">
      <Container py="lg">
        <Reveal>
          <PreHeading level={2}>{t.index.testimonials.preHeading}</PreHeading>
          <Heading level={"none"} size="md" hasMarginBottom>
            {t.index.testimonials.heading}
          </Heading>
          <p>{t.index.testimonials.perex}</p>
        </Reveal>

        <Reveal className="mt-10">
          <Carousel />
        </Reveal>
      </Container>
    </section>
  );
}
