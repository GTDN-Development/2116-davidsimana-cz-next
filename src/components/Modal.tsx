import CloseButton from "@/components/CloseButton";
import Container from "@/components/Container";
// import { Dialog as DialogPrimitive } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

function VideoPlayer({
  videoSrc = "https://www.youtube-nocookie.com/embed/y2x-OpPe6Hc",
}: {
  videoSrc: string;
}) {
  return (
    <div className="aspect-[16/9] w-full">
      <iframe
        width="560"
        height="315"
        src={videoSrc}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="aspect-[16/9] h-full w-full bg-gray-600 object-cover"
        allowFullScreen
      ></iframe>
    </div>
  );
}

type ModalProps = {
  title?: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  videoSrc?: string;
  width?: "sm" | "md" | "lg";
  children?: any;
};

const componentVariants = {
  root: "top-[10%] sm:top-[15%] left-1/2 -translate-x-1/2 w-[92%] max-h-[90%] h-auto overflow-hidden z-modal-above bg-white rounded-2xl origin-top",
  width: {
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-6xl",
  },
};

export default function Modal({
  isOpen,
  setIsOpen,
  title,
  videoSrc,
  width = "md",
  children,
}: ModalProps) {
  return (
    <DialogPrimitive.Root
      defaultOpen={false}
      open={isOpen}
      onOpenChange={() => setIsOpen(false)}
      modal={true}
    >
      <AnimatePresence>
        {isOpen && (
          <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.1, ease: "easeOut" },
                }}
                className="fixed inset-0 z-modal-below h-screen w-screen bg-black/50 backdrop-blur-sm"
                aria-hidden={true}
                onClick={() => setIsOpen(false)}
              />
            </DialogPrimitive.Overlay>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                transition: { duration: 0.1, ease: "easeOut" },
              }}
              className={clsx("fixed inset-0 z-modal min-h-screen w-screen")}
            >
              {!videoSrc ? (
                <DialogPrimitive.Content
                  forceMount
                  className={clsx(
                    "absolute",
                    componentVariants.root,
                    componentVariants.width[width]
                  )}
                >
                  <Container className="relative flex w-full items-center justify-between border-b border-gray-300 px-2 py-6">
                    <DialogPrimitive.Title
                      className={clsx(
                        "text-center text-xl font-semibold lg:text-2xl",
                        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      )}
                    >
                      {title}
                    </DialogPrimitive.Title>
                    <DialogPrimitive.Close asChild>
                      <CloseButton
                        size="md"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        className="ml-auto"
                      />
                    </DialogPrimitive.Close>
                  </Container>

                  <Container>{children}</Container>
                </DialogPrimitive.Content>
              ) : (
                <>
                  <DialogPrimitive.Content
                    forceMount
                    className={clsx(
                      "absolute",
                      componentVariants.root,
                      componentVariants.width[width]
                    )}
                  >
                    <VideoPlayer videoSrc={videoSrc} />
                  </DialogPrimitive.Content>
                  <div className="absolute left-auto right-5 top-5 z-modal-above text-white">
                    <DialogPrimitive.Close asChild>
                      <CloseButton
                        size="lg"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      />
                    </DialogPrimitive.Close>
                  </div>
                </>
              )}
            </motion.div>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
