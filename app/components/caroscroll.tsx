"use client"
import React, { useRef } from 'react'
import { motion, useTransform, useScroll } from "framer-motion";

type CardType = {
    url: string;
    title: string;
    id: number;
  };

const Card = ({ card }: { card: CardType }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
        >
        <div
            style={{
                backgroundImage: `url(${card.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">

        </div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="font-black uppercase text-white">
                {card.title}
                </p>
            </div>
        </div>
    );
};

const cards: CardType[] = [
    {
      url: "/osiris.jpg",
      title: "OsirisAI",
      id: 1,
    },
];

const CaroScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({target: targetRef});
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default CaroScroll