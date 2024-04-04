import Image from 'next/image'
import * as React from 'react'
import { Button } from './ui/button'
import { Globe, Instagram, Linkedin } from 'lucide-react'

interface EmailTemplateProps {
    firstName: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
}) => (
    <div className="flex min-h-full w-full items-center justify-center bg-[#1b1b1b]">
        <p>Ksham</p>
        <p>{firstName}</p>
        <h1>Thanks for joining the early access.</h1>
        <Image src="/product.webp" alt="" />
        <p>{"We'll get in touch as soon as possible. Keep an eye on gmail."}</p>
        <div className="flex w-full gap-10">
            <Button>
                <Instagram /> Instagram
            </Button>
            <Button>
                <Linkedin /> Linkedin
            </Button>
            <Button>
                <Globe /> Website
            </Button>
        </div>
    </div>
)
