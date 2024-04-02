'use client'
import { EarOff, EyeOff } from 'lucide-react'
import React from 'react'
export function About() {
    return (
        <main>
            <h1 className="flex justify-center gap-2 pb-6 text-4xl font-bold">
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
            </h1>
            <div className="flex flex-wrap justify-center gap-2">
                <div className="flex-1 border px-6 py-4">
                    <h1 className="flex justify-center gap-2 text-lg font-semibold underline">
                        Glasses for Deaf <EarOff />
                    </h1>
                    <div className="px-4 py-2">
                        <li>Patented Dome Bone Conduction Transducer</li>
                        <li>Arrays of Microphones</li>
                        <li>Bluetooth & Rechargeable</li>
                    </div>
                </div>
                <div className="flex-1 border px-6 py-4">
                    <h1 className="flex justify-center gap-2 text-lg font-semibold underline">
                        Glasses for Blind <EyeOff />
                    </h1>
                    <div className="px-4 py-2">
                        <li>Objects & Face Recognition</li>
                        <li>1080p front camera</li>
                        {/* <li></li> */}
                    </div>
                </div>
                <div className="flex-1 border px-6 py-4">
                    <h1 className="flex justify-center gap-2 text-lg font-semibold underline">
                        Glasses for Mute <EyeOff />
                    </h1>
                    <div className="px-4 py-2">
                        <li>Real time sign language to audio conversion</li>
                        <li>Pairs of side camera & speaker.</li>
                        <li>Offline processing</li>
                    </div>
                </div>
                <div className="flex-1 border px-6 py-4">
                    <h1 className="flex justify-center gap-2 text-lg font-semibold underline">
                        Smart Case <EyeOff />
                    </h1>
                    <div className="px-4 py-2">
                        <li>Day long battery backup</li>
                        <li>Desktop computer mode.</li>
                        {/* <li></li> */}
                    </div>
                </div>
            </div>
        </main>
    )
}
export default About
