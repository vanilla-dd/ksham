'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function About() {
    return (
        <main className="grid place-items-center">
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
            <div className="grid w-full max-w-6xl grid-cols-6 grid-rows-5 justify-center gap-4 border text-green-400">
                <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-zinc-700 px-6 py-8 tracking-wider">
                    <span className="text-4xl font-bold">5</span>
                    Microphones
                </div>
                <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-zinc-700 px-6 py-8 tracking-wider">
                    <span className="text-4xl font-bold">1080p</span>
                    Camera
                </div>
                <div className="col-span-2 row-span-2 rounded-md bg-zinc-700 px-4 py-6 ">
                    <Image
                        src={'/glasscase.svg'}
                        alt="glasses case"
                        width={100}
                        height={100}
                        className="w-full drop-shadow-[10px_10px_20px_rgba(255,255,255,.40)]"
                    />
                    <p className="text-center text-4xl font-bold tracking-wider">
                        Smart Case
                    </p>
                </div>
                <div className="col-span-2 flex items-center justify-center rounded-md bg-zinc-700">
                    <p className="text-center text-2xl leading-10">
                        <span className="relative font-extrabold tracking-wide text-rose-600">
                            Patented{' '}
                            <svg
                                className="absolute -left-2 -top-4 w-32 rotate-180"
                                viewBox="101.8847 131.459 365.5387 210.8862"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="SvgjsLinearGradient1002">
                                        <stop
                                            stopColor="hsl(265, 55%, 60%)"
                                            offset="0"
                                        />
                                        <stop
                                            stopColor="hsl(265, 55%, 30%)"
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
                                                duration: 2,
                                                ease: 'circOut',
                                            },
                                        },
                                    }}
                                    initial="hidden"
                                    d="M 161.744 187.969 C 168.913 183.339 188.028 167.359 204.755 160.191 C 221.481 153.022 239.85 147.497 262.102 144.958 C 284.355 142.419 313.626 140.776 338.267 144.958 C 362.909 149.14 390.239 157.353 409.952 170.048 C 429.665 182.742 447.437 203.351 456.547 221.123 C 465.657 238.895 471.033 260.848 464.611 276.678 C 458.19 292.509 439.821 306.398 418.016 316.105 C 396.212 325.812 356.637 330.591 333.787 334.922 C 310.938 339.253 301.678 341.344 280.92 342.091 C 260.161 342.837 229.546 341.941 209.235 339.402 C 188.924 336.864 173.542 334.325 159.056 326.858 C 144.57 319.39 132.622 305.651 122.318 294.599 C 112.013 283.548 109.62 270.258 104.99 258.609 C 100.36 246.961 101.804 230.038 103.596 216.298 C 105.388 202.558 116.785 199.265 131.267 187.814 C 145.749 176.363 152.52 174.117 162.675 164.41 C 172.831 154.702 191.796 147.137 200.608 142.507 C 209.419 137.878 241.516 132.654 244.652 131.459"
                                    fill="none"
                                    strokeWidth="10"
                                    stroke='url("#SvgjsLinearGradient1002")'
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                        Bone Conduction Transducer
                    </p>
                </div>
                <div className="col-span-2 flex items-center justify-center rounded-md bg-zinc-700">
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-24"
                    >
                        <path
                            style={{ fill: '#D5DCED' }}
                            d="M282.483,0h-52.966c-9.75,0-17.655,7.904-17.655,17.655v26.483h88.276V17.655
	C300.138,7.904,292.233,0,282.483,0z"
                        />
                        <path
                            style={{ fill: '#C7CFE2' }}
                            d="M264.828,0h-35.31c-9.75,0-17.655,7.904-17.655,17.655v26.483h35.31V17.655
	C247.172,7.904,255.078,0,264.828,0z"
                        />
                        <path
                            style={{ fill: '#7F8499' }}
                            d="M335.448,512H176.552c-19.501,0-35.31-15.809-35.31-35.31V70.621c0-19.501,15.809-35.31,35.31-35.31
	h158.897c19.501,0,35.31,15.809,35.31,35.31V476.69C370.759,496.191,354.95,512,335.448,512z"
                        />
                        <path
                            style={{ fill: '#707487' }}
                            d="M229.517,476.69V70.621c0-19.501,15.809-35.31,35.31-35.31h-88.276
	c-19.501,0-35.31,15.809-35.31,35.31V476.69c0,19.501,15.809,35.31,35.31,35.31h88.276C245.326,512,229.517,496.191,229.517,476.69z
	"
                        />
                        <path
                            style={{ fill: '#B4FF87' }}
                            d="M344.276,494.345H167.724c-4.875,0-8.828-3.953-8.828-8.828V88.276c0-4.875,3.953-8.828,8.828-8.828
	h176.552c4.875,0,8.828,3.953,8.828,8.828v397.241C353.103,490.392,349.151,494.345,344.276,494.345z"
                        />
                        <path
                            style={{ fill: '#9BF57D' }}
                            d="M329.426,248.812c-4.051-6.554-11.069-10.467-18.774-10.467h-28.575l23.204-58.01
	c2.723-6.806,1.896-14.496-2.215-20.568s-10.943-9.697-18.275-9.697h-48.138c-2.467,0-4.843,0.436-7.136,1.089v-71.71h-61.793
	c-4.875,0-8.828,3.953-8.828,8.828v397.241c0,4.875,3.953,8.828,8.828,8.828h66.69c-3.033-5.212-4.897-11.191-4.897-17.655v-68.363
	c4.014,4.246,9.567,6.726,15.463,6.726c8.035,0,15.272-4.492,18.887-11.722l66.524-133.047
	C333.836,263.393,333.475,255.367,329.426,248.812z"
                        />
                        <path
                            style={{ fill: '#FFF082' }}
                            d="M228.022,174.702l-23.843,111.269c-0.589,2.748,1.506,5.339,4.316,5.339H256l-14.578,102.046
	c-0.566,3.966,4.863,5.661,6.654,2.079L314.6,262.388c1.468-2.935-0.666-6.388-3.948-6.388H256l32.889-82.222
	c1.16-2.899-0.975-6.054-4.098-6.054h-48.138C232.491,167.724,228.894,170.632,228.022,174.702z"
                        />
                    </svg>
                    <span className="text-2xl">Day long battery backup</span>
                </div>
                <div className="">Desktop mode</div>
                <div className="">Object & Face recognition</div>
                <div>Real time sign language conversion</div>
                <div>Offline processing</div>
                <div>Bluetooth + Rechargable</div>
            </div>
        </main>
    )
}
export default About
