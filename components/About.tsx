'use client'
import { motion } from 'framer-motion'
import BentoGridUI from './BentoGridUI'

function About() {
    return (
        <main className="grid place-items-center px-2" id="about">
            <h1 className="flex justify-center gap-2 pb-6 text-xl font-bold tracking-wider sm:text-2xl md:text-3xl lg:text-4xl">
                Our
                <span className="relative inline-block">
                    Innovation
                    <svg viewBox="225.194 210.259 319.932 28">
                        <defs>
                            <linearGradient
                                id="SvgjsLinearGradient1000"
                                gradientTransform="rotate(227, 0.5, 0.5)"
                            >
                                <stop
                                    stopColor="hsl(265, 55%, 30%)"
                                    offset="0"
                                ></stop>
                                <stop
                                    stopColor="hsl(265, 55%, 60%)"
                                    offset="1"
                                ></stop>
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
                            d="M 225.194 226.18 C 227.739 225.643 283.724 212.524 288.814 212.739 C 293.903 212.955 347.237 231.485 352.434 231.557 C 357.631 231.628 413.653 214.388 418.742 214.532 C 423.832 214.675 474.979 235.392 479.674 235.141 C 484.369 234.89 533.868 209.334 536.126 208.259"
                            fill="none"
                            strokeWidth="9"
                            stroke='url("#SvgjsLinearGradient1000")'
                            strokeLinecap="round"
                            strokeDasharray="0 0"
                        ></motion.path>
                    </svg>
                </span>
            </h1>
            <div className="sm: grid w-full max-w-6xl grid-cols-4 grid-rows-11 justify-center gap-2 rounded-md border-2 p-4 text-green-400 shadow-lg sm:grid-rows-8 lg:grid-cols-6 lg:grid-rows-4 lg:p-6">
                <BentoGridUI />
            </div>
        </main>
    )
}
export default About
