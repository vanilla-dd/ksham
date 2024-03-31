import Image from 'next/image'

const images = [
    {
        image: '/google.webp',
        width: 140,
        height: 140,
        alt: 'google',
    },
    {
        image: '/iitMandi.webp',
        width: 140,
        height: 140,
        alt: 'IITMandi',
    },
    {
        image: '/siicIITKanpur.webp',
        width: 300,
        height: 140,
        alt: 'IITKanpur',
    },
    { image: '/samsung.webp', width: 200, height: 100, alt: 'samsung' },
    { image: '/AIC.webp', width: 220, height: 140, alt: 'AIC' },
]
function Supporters() {
    return (
        <div className="px-4">
            <p className="text-center text-2xl font-bold tracking-wider md:text-4xl">
                Supported By
            </p>
            <div>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 lg:gap-14">
                    {[...images].map((item, index) => (
                        <Image
                            className="w-24 sm:w-32 lg:w-40"
                            src={item.image}
                            width={item.width}
                            height={item.height}
                            alt={item.alt}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Supporters
