'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React from 'react'

const SelfImg = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [0.5, -0.5],
        ["-17.5deg", "17.5deg"]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [0.5, -0.5],
        ["17.5deg", "-17.5deg"]
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
    
        const width = rect.width;
        const height = rect.height;
    
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
    
        const xPos = mouseX / width;
        const yPos = mouseY / height;
    
        x.set(xPos);
        y.set(yPos);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.img 
            alt={"me"} src={"/placeholder.jpg"} width={500} height={1000} className='rounded-3xl hue-rotate-90 shadow-2xl' 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
                transform: "translateZ(100px)"
            }}
        />
    )
}

export default SelfImg