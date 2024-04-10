import { Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
// Still wip
function Footer() {
    return (
        <footer className="w-full border-t-2 px-4 py-2 text-xs sm:text-sm">
            <div className="flex justify-between">
                <div className="space-y-1 text-center">
                    <p>© Ksham Innovation 2023.</p>
                    <p>All Rights Reserved.</p>
                </div>
                <div className="flex flex-col items-end justify-center gap-1">
                    <Link
                        href={'/'}
                        className="flex items-center gap-1 font-bold"
                    >
                        <Linkedin className="h-4 w-4 stroke-blue-400" />
                        Linkedin
                    </Link>
                    <hr className="h-1/2 w-[1px] bg-gray-400" />
                    <Link
                        href={'/'}
                        className="flex items-center gap-1 font-bold"
                    >
                        <Instagram className="h-4 w-4 stroke-pink-600" />
                        Instagram
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
