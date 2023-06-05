import clsx from "clsx";
import Container from "../Container";
import Reveal from "../Reveal";

type Props = {
  className?: string;
  message: string;
};

export default function Message({
  className = "",
  message = "Specializuji se na podnikatele, majitele firem, freelancery, manažery, lékaře a IT specialisty.",
}: Props) {
  return (
    <div
      className={clsx(
        "bg-gradient-to-r from-primary-900 to-primary-700 md:to-primary-500",
        className
      )}
    >
      <Container py="xl" size="md">
        <Reveal className="mx-auto block text-center text-3xl font-bold !leading-snug text-primary-50 md:text-5xl 2xl:text-6xl">
          {message}
        </Reveal>
      </Container>
    </div>
  );
}
