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
                <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-4 p-4 pt-20 md:pt-0">
                    <h1 className="text-center text-4xl font-bold md:text-7xl ">
                        {"World's"} 1<sup>st</sup>
                        <br />
                        Smart Aid Glasses
                    </h1>
                    <div className="text-center text-xl font-semibold underline underline-offset-2  ">
                        <p>Designed For Deaf, Blind, Mute</p>
                    </div>
                    <div>
                        <Button className="px-6 py-6 text-base">
                            <Link href="/early">Get Early Access</Link>
                        </Button>
                    </div>
                </div>
                <div className="absolute left-56 top-1/3 -rotate-45">
                    <Image
                        src="/product.webp"
                        alt="Product Image"
                        width={400}
                        height={400}
                    />
                </div>
            </main>
            <Supporters />
            <About />
        </>
    )
}
