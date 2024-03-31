import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import About from '@/components/About'
import Supporters from '@/components/Supporters'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            <main className="flex min-h-dvh flex-col text-black dark:text-white">
                <Navbar />
                <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-4">
                    <h1 className="relative text-center text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                        {"World's"} 1<sup>st</sup>
                        <br />
                        Smart Aid Glasses
                        <div className="absolute -left-16 -top-8 -z-50 -rotate-45 sm:-left-20 sm:-top-12 lg:-left-16 lg:-top-14">
                            <Image
                                src="/product.webp"
                                alt="Product Image"
                                className="w-52 sm:w-72 lg:w-80"
                                width={400}
                                height={400}
                            />
                        </div>
                    </h1>
                    <div className="text-center text-xs font-semibold underline underline-offset-2 sm:text-sm md:text-base lg:text-lg">
                        <p>Designed For Deaf, Blind, Mute</p>
                    </div>
                    <div>
                        <Button className="px-3 py-1 text-xs font-bold sm:px-4 sm:py-2 lg:px-6 lg:text-sm ">
                            <Link href="/early">Get Early Access</Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Supporters />

            {/* <About /> */}
        </>
    )
}
