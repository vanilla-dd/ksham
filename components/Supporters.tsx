import Image from 'next/image'
import React from 'react'

function Supporters() {
    return (
        <div>
            <p className="text-center text-4xl font-bold tracking-wider">
                Supported By
            </p>
            <div className="flex items-center justify-around">
                <Image
                    src="/google.webp"
                    alt="google"
                    width={140}
                    height={140}
                />
                <Image
                    src="/iitMandi.webp"
                    alt="IIT Mandi"
                    width={140}
                    height={140}
                />
                <Image
                    src="/siicIITKanpur.webp"
                    alt="IIT Kanpur"
                    width={300}
                    height={140}
                />
                <Image
                    src="/samsung.webp"
                    alt="samsung"
                    width={140}
                    height={100}
                />
                <Image
                    src="/AIC.webp"
                    alt="Atal innovation center"
                    width={220}
                    height={140}
                />
            </div>
        </div>
    )
}

export default Supporters
