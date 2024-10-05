"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";

export function TeamCards() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="z-10 flex absolute top-48 right-12 lg:hidden items-center justify-center rounded-full h-6 w-6 text-black font-bold"
              onClick={() => setActive(null)}
            >x</motion.button>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}   
              transition={{ duration: 0.4 }}  
              className="w-3/4 rounded-2xl max-w-[500px] h-1/2 md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <h3 className="font-medium text-black dark:text-neutral-200 text-xl">
                      {active.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-800 text-base">
                      {active.description}
                    </p>
                  </div>
                  <a
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-m rounded-full font-bold bg-green-500 text-white no-underline"
                  >
                    {active.ctaText}
                  </a>
                </div>
                <div className="pt-4 relative px-4">
                  <div className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="grid sm:grid-cols-4 gap-6 p-8">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            onClick={() => setActive(card)}
            initial={{ opacity: 0, y: 50 }}  
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 50 }}    
            transition={{ duration: 0.4 }}  
            className="py-4 px-12 flex flex-col rounded-3xl cursor-pointer bg-[#150050] hover:shadow-xl hover:shadow-[#8a3ffc] transition-all duration-300"
          >
            <div className="flex gap-4 flex-col w-full">
              <div className="flex justify-center items-center flex-col">
                <h3 className="text-neutral-200 text-center md:text-left text-xl font-bold">
                  {card.title}
                </h3>
                <p className="text-neutral-400 text-center md:text-left text-lg">
                  {card.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

const cards = [
  {
    description: "Society Head",
    title: "Arnav Bhargava",
    ctaText: "Github",
    ctaLink: "https://github.com/SOURHEAD",
    content: () => {
      return (
        <p>
            Hello I am Arnav Bhargava, 20 year old programmer Learning DEV-OPS
        </p>
      );
    },
  },
  {
    description: "Core Member",
    title: "Prakhar Shankar",
    ctaText: "Github",
    ctaLink: "https://github.com/SOURHEAD",
  },
  {
    description: "Core Member",
    title: "Pradyot Ranjan",
    ctaText: "Github",
    ctaLink: "https://github.com/SOURHEAD",
  },
  {
    description: "Core Member",
    title: "Vidip Singh",
    ctaText: "Github",
    ctaLink: "https://github.com/SOURHEAD",
  },
  {
    description: "Core Member",
    title: "Tushar Singhal",
    ctaText: "Github",
    ctaLink: "https://github.com/SOURHEAD",
  },
  {
    description: "Core Member",
    title: "Nihar Sanoria",
    ctaText: "Github",
    ctaLink: "https://github.com/SOURHEAD",
  },
  {
    description: "Core Member",
    title: "Siddhant Roy",
    ctaText: "Github",
    ctaLink: "https://github.com/SOURHEAD",
  },
  {
    description: "Core Member",
    title: "Sanidhya Nigam",
    ctaText: "Github",
    ctaLink: "https://github.com/SOURHEAD",
  },
    {
    description: "Core Member",
    title: "Swayam",
    ctaText: "Github",
    ctaLink: "https://github.com/SOURHEAD",
  },
];
