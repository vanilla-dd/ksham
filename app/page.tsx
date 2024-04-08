import Navbar from '@/components/Navbar'
import Supporters from '@/components/Supporters'
import Image from 'next/image'
import About from '@/components/About'
import Link from 'next/link'
import WhyAbleInnovation from '@/components/WhyAbleInnovation'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <main className="flex min-h-dvh flex-col gap-6 text-black dark:text-white md:gap-8">
                <Navbar />
                <div className="mx-auto mt-12 flex w-full max-w-7xl flex-col items-center justify-center gap-4 sm:flex-1">
                    <h1 className="relative text-center text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                        {"World's "}
                        <span className="relative">
                            1<sup>st</sup>
                            <svg
                                viewBox="0 0 500 500"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute -top-16 left-2 w-20 rotate-[100deg] md:-top-20 md:w-28"
                            >
                                <defs>
                                    <marker
                                        markerWidth="5"
                                        markerHeight="5"
                                        refX="2.5"
                                        refY="2.5"
                                        viewBox="0 0 5 5"
                                        orient="auto"
                                        id="SvgjsMarker1001"
                                    >
                                        <polygon
                                            points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
                                            fill="hsl(227, 71%, 57%)"
                                        />
                                    </marker>
                                </defs>
                                <g
                                    strokeWidth="10"
                                    stroke="hsl(227, 71%, 57%)"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    transform="matrix(1, 0, 0, 1, -171.34543102004272, -165.3622308576439)"
                                >
                                    <path
                                        d="M250 250Q450 350 400 400Q294 533 550 550 "
                                        markerEnd="url(#SvgjsMarker1001)"
                                    />
                                </g>
                            </svg>
                            <svg
                                viewBox="225.194 210.259 319.932 28"
                                className="absolute -left-1 bottom-1 w-10 sm:bottom-2 sm:left-0 sm:w-14 md:left-0 md:w-16 lg:bottom-3 lg:w-20"
                            >
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
                                <path
                                    d="M 225.194 226.18 C 227.739 225.643 283.724 212.524 288.814 212.739 C 293.903 212.955 347.237 231.485 352.434 231.557 C 357.631 231.628 413.653 214.388 418.742 214.532 C 423.832 214.675 474.979 235.392 479.674 235.141 C 484.369 234.89 533.868 209.334 536.126 208.259"
                                    fill="none"
                                    strokeWidth="9"
                                    stroke='url("#SvgjsLinearGradient1000")'
                                    strokeLinecap="round"
                                    strokeDasharray="0 0"
                                ></path>
                            </svg>
                        </span>
                        <br />
                        Smart Aid Glasses
                        <div className="absolute -left-10 -top-8 -z-50 -rotate-45 sm:-left-12 sm:-top-12 md:-left-7 lg:-left-6 lg:-top-14">
                            <Image
                                src="/product.webp"
                                alt="Product Image"
                                className="w-48 sm:w-64 md:w-72 lg:w-80"
                                width={400}
                                height={400}
                            />
                        </div>
                    </h1>
                    <div className="text-center text-xs font-semibold underline underline-offset-2 sm:text-sm md:text-base lg:text-lg">
                        <p>Designed For Deaf, Blind, Mute</p>
                    </div>
                    <div className="mt-0 md:mt-2">
                        <Link
                            href={'/early'}
                            className="rounded-md bg-black px-3 py-2 text-xs font-bold text-white dark:bg-white dark:text-black sm:px-4 sm:py-2 lg:px-6 lg:py-3 lg:text-sm"
                        >
                            Get Early Access
                        </Link>
                    </div>
                </div>
                <div>
                    <Supporters />
                </div>
                <div>
                    <About />
                </div>
                <div>
                    <WhyAbleInnovation />
                </div>
                <div>
                    <Footer />
                </div>
            </main>
        </>
    )
}
