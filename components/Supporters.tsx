'use client'

import { motion } from 'framer-motion'
function Supporters() {
    return (
        <div className="flex flex-col px-4 md:gap-4 lg:gap-8">
            <p className="text-center text-xl font-bold tracking-wider sm:text-2xl md:text-3xl lg:text-4xl">
                <span className="relative w-fit">
                    Supported{' '}
                    <motion.svg
                        whileHover={{ scale: 1.1 }}
                        whileTap={{
                            scale: 0.9,
                        }}
                        viewBox="0 0 500 500"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute -left-12 -top-5 w-20 select-none border-none fill-transparent outline-none"
                    >
                        <defs>
                            <linearGradient id="SvgjsLinearGradient1001">
                                <stop
                                    stopColor="hsl(340, 45%, 50%)"
                                    offset="0"
                                />
                                <stop
                                    stopColor="hsl(340, 45%, 80%)"
                                    offset="1"
                                />
                            </linearGradient>
                        </defs>
                        <motion.path
                            whileInView="animated"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, pathLength: 0 },
                                animated: {
                                    opacity: 1,
                                    pathLength: 1,
                                    transition: {
                                        duration: 1,
                                        ease: 'easeIn',
                                    },
                                },
                            }}
                            initial="hidden"
                            d="M 150.127 262.699 C 156.242 247.175 196.704 114.38 208.371 114.85 C 220.037 115.32 272.34 261.535 261.238 267.18 C 250.136 272.825 96.897 180.186 102.636 168.613 C 108.375 157.041 310.817 147.18 315.897 156.965 C 320.978 166.75 168.335 250.795 151.023 261.803"
                            strokeWidth="10"
                            stroke='url("#SvgjsLinearGradient1001")'
                            strokeLinecap="round"
                        />
                    </motion.svg>
                </span>
                By
            </p>
            <div>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-10 lg:gap-16">
                    <div className="min-h-12 min-w-20 bg-[url(/google.webp)] bg-contain bg-center bg-no-repeat min-[565px]:min-h-16 min-[565px]:min-w-28 sm:min-h-16 sm:min-w-32 lg:min-h-24 lg:min-w-36"></div>
                    <div className="min-h-16 min-w-24 bg-[url(/AIC.webp)] bg-contain bg-center bg-no-repeat min-[565px]:min-h-16 min-[565px]:min-w-28 sm:min-h-16 sm:min-w-32 lg:min-h-24 lg:min-w-36"></div>
                    <div className="min-h-12 min-w-20 bg-[url(/iitMandi.webp)] bg-cover bg-center bg-no-repeat dark:bg-[url(/iitMandiDark.svg)] min-[565px]:min-h-16 min-[565px]:min-w-28 sm:min-h-20 sm:min-w-32 lg:min-h-24 lg:min-w-36"></div>
                    <div className="min-h-12 min-w-24 bg-[url(/Samsung_Logo.webp)] bg-contain bg-center bg-no-repeat min-[565px]:min-h-16 min-[565px]:min-w-28 sm:min-h-16 sm:min-w-32 lg:min-h-24 lg:min-w-36"></div>
                    <div className="min-h-12 min-w-28 bg-[url(/siicIITKanpur.webp)] bg-contain bg-center bg-no-repeat dark:bg-[url(/siicIITKanpurDark.webp)] min-[565px]:min-h-16 min-[565px]:min-w-36 sm:min-h-16 sm:min-w-32 lg:min-h-24 lg:min-w-40"></div>
                </div>
            </div>
        </div>
    )
}

export default Supporters
