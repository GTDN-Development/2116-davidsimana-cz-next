import Image from "next/image";
import Container from "../Container";
import Heading from "../Heading";
// import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";
// import { Fragment, useState } from "react";
// import { HiPlay } from "react-icons/hi";
// import { MdClose } from "react-icons/md";
// import Button from "../Button";

// function VideoModal() {
//   const [isOpen, setIsOpen] = useState(false);

//   function closeDialog() {
//     setIsOpen(false);
//   }

//   function openDialog() {
//     setIsOpen(true);
//   }

//   return (
//     <>
//       {/* Tlačítko pro otevření */}
//       <Button size="xl" onClick={openDialog} leftIcon={<HiPlay />}>
//         Přehrát video
//       </Button>

//       {/* Samotný modal */}
//       <Transition show={isOpen} as={Fragment}>
//         <HeadlessDialog
//           open={isOpen}
//           onClose={() => setIsOpen(false)}
//           className="fixed z-modal h-screen w-screen"
//         >
//           <Transition.Child
//             as={Fragment}
//             enter="transition-opacity duration-500"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             {/* Overlay */}
//             <HeadlessDialog.Overlay className="fixed inset-0 z-modal-below h-screen w-screen bg-gray-950 bg-opacity-80 backdrop-blur-md" />
//           </Transition.Child>

//           <Transition.Child
//             as={Fragment}
//             enter="transition duration-400"
//             enterFrom="opacity-0 scale-90"
//             enterTo="opacity-100 scale-100"
//             leave="transition duration-300"
//             leaveFrom="opacity-100 scale-100"
//             leaveTo="opacity-0 scale-90"
//           >
//             {/* Obsah modalu - container pro obrázek */}
//             <div className="relative bottom-1/2 top-1/2 z-modal mx-auto w-[90%] max-w-4xl -translate-y-1/2 transform">
//               <div className="aspect-[16/9]">
//                 <iframe
//                   width="560"
//                   height="315"
//                   src="https://www.youtube-nocookie.com/embed/y2x-OpPe6Hc"
//                   title="YouTube video player"
//                   className="h-full w-full bg-gray-400"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </div>
//           </Transition.Child>

//           <Transition.Child
//             as={Fragment}
//             enter="transition-opacity duration-500"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             {/* Tlačítko pro zavření (křížek) */}
//             <button
//               type="button"
//               onClick={closeDialog}
//               className="fixed right-6 top-6 z-modal-above rounded-xl bg-transparent p-2 text-4xl text-white transition-colors duration-200 hover:bg-white hover:bg-opacity-15 focus:bg-white focus:bg-opacity-15"
//             >
//               <span className="sr-only">Zavřít</span>
//               <MdClose />
//             </button>
//           </Transition.Child>
//         </HeadlessDialog>
//       </Transition>
//     </>
//   );
// }

export default function Hero() {
  return (
    <header
      id="domu"
      className="relative w-screen overflow-hidden sm:h-screen lg:min-h-[640px]"
    >
      <Container className="grid h-full grid-cols-1 lg:grid-cols-2">
        <div className="col-span-1 flex flex-col items-start justify-center gap-5 bg-blue-200 pb-20 pt-36 lg:gap-8 lg:py-0">
          <Heading level={1} size="lg" color="primary">
            Cesta k finanční svobodě
          </Heading>
          <p className="max-w-prose text-lg lg:text-xl">
            Splňte si Vaše finanční cíle bez nutností několikaleté praxe v
            oboru. Sestavím pro Vás finanční plán na míru za 7 dní.
          </p>

          {/* <VideoModal /> */}
        </div>

        <div className="col-span-1 flex items-end justify-center bg-red-200 pt-16">
          <Image
            src="/img-old/portrait.png"
            width={1000}
            height={1332}
            alt="Portrét David Šimana"
            className="w-full max-w-md object-contain lg:max-w-none"
            loading="eager"
            priority
          />
        </div>
      </Container>
    </header>
  );
}
