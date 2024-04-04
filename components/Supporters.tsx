'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
    {
        image: '/google.webp',
        width: 140,
        height: 140,
        alt: 'google',
    },
    {
        image: '/iitMandi.webp',
        width: 140,
        height: 140,
        alt: 'IITMandi',
    },
    {
        image: '/siicIITKanpur.webp',
        width: 300,
        height: 140,
        alt: 'IITKanpur',
    },
    { image: '/samsung.webp', width: 200, height: 100, alt: 'samsung' },
    { image: '/AIC.webp', width: 220, height: 140, alt: 'AIC' },
]
function Supporters() {
    return (
        <div className="px-4">
            <p className="text-center text-2xl font-bold tracking-wider md:text-4xl">
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
                        <path
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
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 lg:gap-14">
                    {[...images].map((item, index) => (
                        <Image
                            className="sm:w-30 w-28 md:w-32 lg:w-36"
                            src={item.image}
                            width={item.width}
                            height={item.height}
                            alt={item.alt}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Supporters
