import { Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className="w-full border-t-2 px-4 py-2">
            <div className="flex justify-between">
                <div className="text-center">
                    <p>© Ksham Innovation 2023.</p>
                    <p>All Rights Reserved.</p>
                </div>
                <div className="flex gap-2">
                    <Link
                        href={'/'}
                        className="flex items-center gap-1 border-2 px-2 font-bold"
                    >
                        <Linkedin className="h-6 w-6 stroke-blue-400" />
                        Linkedin
                    </Link>
                    <Link
                        href={'/'}
                        className="flex items-center gap-1 border-2 px-2 font-bold"
                    >
                        <Instagram className="h-6 w-6 stroke-pink-600" />
                        Instagram
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
