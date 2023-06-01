import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Parallax from "../Parallax";

export default function ParallaxPhoto() {
  const isMobileAndLarger = useMediaQuery("(min-width: 640px)");

  if (!isMobileAndLarger) {
    return (
      <Image
        src="/images/team.jpg"
        alt="Můj tým"
        width={2560}
        height={1440}
        loading="lazy"
        className="h-auto w-full"
      />
    );
  }

  return (
    <div className="relative h-72 w-screen overflow-hidden sm:h-96 lg:h-[480px] 2xl:h-[600px]">
      <Parallax
        offset={40}
        className="absolute inset-0 -z-10 w-full opacity-70"
      >
        <Image
          src="/images/team.jpg"
          alt="Můj tým"
          width={2560}
          height={1440}
          loading="lazy"
          className="w-full scale-125 lg:-translate-y-14 lg:scale-100"
        />
      </Parallax>
    </div>
  );
}
