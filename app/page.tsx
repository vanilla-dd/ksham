import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="flex min-h-dvh flex-col">
            <Navbar />
            <div className="z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-4 p-4 pt-20 md:pt-0">
                <h1 className="text-center text-4xl font-bold text-black text-transparent dark:text-white md:text-7xl">
                    {"World's"} 1<sup className="text-white">st</sup>
                    <br />
                    Smart Aid Glasses
                </h1>
                <div className="text-center text-xl font-semibold underline underline-offset-2  ">
                    <p>Designed For Deaf, Blind, Mute</p>
                </div>
                <div>
                    <Button>
                        <Link href="/early">Early Access</Link>
                    </Button>
                </div>
            </div>
        </main>
    )
}
