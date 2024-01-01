"use client"
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

const pages = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact Me",
      href: "/contactMe",
    }
]

const DropMenu = () => {
    const [open, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen)
    }
    const menuVars = {
        initial: {
            scaleY: 0
        },
        animate: {
            scaleY: 1,
            transiton: {
                duration: 0.9,
                ease: [0.12, 0, 0.39, 0]
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }
    // const containerVars = {
    //     initial: {
    //         transition: {
    //             staggerChildren: 0.09,
    //             staggerDirection: -1,
    //         },
    //     },
    //     open: {
    //         transition: {
    //             delayChildren: 0.3,
    //             staggerChildren: 0.09,
    //             staggerDirection: 1,
    //         }
    //     }
    // }

  return (
    <>
        <div
        className="cursor-pointer text-md text-black pr-8"
        onClick={toggleMenu}>
            <svg className="swap-off fill-current text-stone-200" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
        </div>
        <AnimatePresence>
            {open && (
            <motion.div
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed left-0 top-0 w-full h-screen origin-top text-black bg-sky-950"
            >
                <div className="flex h-full flex-col pl-10 pt-9">
                    <div className="flex justify-between">
                        <Link onClick={toggleMenu} className="font-mono font-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400" href={"/"}>TL</Link>
                        <div
                        className="cursor-pointer text-md text-black pr-9"
                        onClick={toggleMenu}
                        >
                        <svg className="swap-on fill-current text-stone-200" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                        </div>
                    </div>
                    <div className="flex flex-col h-full justify-center font-lora items-center gap-4">
                        {pages.map((link, index) => {
                        return (
                            <div className="overflow-hidden" onClick={toggleMenu}>
                            <PageLink
                                key={index}
                                title={link.title}
                                href={link.href}
                            />
                            </div>
                        );
                        })}
                    </div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
    </>
  )
}

const PageLink = ({ title, href }: { title: string, href: string }) => {
    return (
        <motion.div
            className="text-7xl uppercase text-stone-200 font-bold text-center"
        >
            <Link href={href}>{title}</Link>
        </motion.div>
    );
};


export default DropMenu