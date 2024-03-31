import { ModeToggle } from '@/components/toggleTheme'
import Link from 'next/link'
import { Button } from './ui/button'
{
    /* <svg viewBox="158.0216 161.5434 63.3738 59.5033">
  <g transform="matrix(0.105635, 0, 0, -0.1, 153.656437, 235.457855)" fill="#ffffff" stroke="none" style="">
    <path d="M238 722 c-154 -55 -236 -232 -178 -384 25 -68 94 -141 160 -172 65 -30 188 -29 248 2 64 34 118 87 146 145 36 70 36 179 2 252 -29 63 -111 138 -173 159 -60 21 -145 20 -205 -2z m140 -24 c-2 -6 -12 -16 -21 -22 -13 -8 -22 -6 -39 12 l-22 22 43 0 c28 0 41 -4 39 -12z m-73 -38 l39 -40 41 40 c28 28 47 39 58 34 9 -3 17 -9 17 -13 0 -4 -26 -32 -58 -64 l-58 -57 -63 64 c-60 60 -64 72 -26 75 6 1 29 -17 50 -39z m115 -65 c66 67 76 73 89 60 14 -13 6 -25 -74 -105 l-90 -90 -92 92 c-82 82 -90 93 -75 104 15 11 27 3 92 -62 l75 -74 75 75z m-185 -65 l90 -91 -92 -89 c-78 -76 -93 -87 -104 -74 -10 13 -1 27 62 90 l73 74 -73 74 c-51 51 -72 79 -68 90 4 9 10 16 14 16 5 0 49 -41 98 -90z m264 -15 l-75 -74 75 -75 c67 -67 74 -77 60 -91 -13 -13 -24 -5 -104 75 l-90 90 90 90 c80 81 91 88 105 75 13 -14 7 -23 -61 -90z m-335 -13 l57 -59 -60 -61 c-57 -57 -62 -59 -72 -40 -9 17 -5 25 33 58 l43 39 -43 44 c-29 30 -41 49 -36 60 3 9 9 17 13 17 4 0 33 -26 65 -58z m436 30 c0 -9 -17 -33 -37 -54 l-37 -38 37 -38 c35 -36 46 -65 29 -76 -5 -3 -35 22 -67 54 l-59 60 59 60 c57 58 75 66 75 32z m-495 -72 c18 -20 18 -21 -3 -40 -29 -27 -32 -26 -32 20 0 45 8 49 35 20z m505 -22 l0 -42 -22 21 c-21 22 -21 23 -3 43 10 11 20 20 22 20 1 0 3 -19 3 -42z m-90 -201 c0 -4 -7 -10 -16 -14 -11 -4 -39 17 -88 66 l-72 72 -72 -71 c-73 -72 -81 -77 -98 -60 -7 7 18 39 80 100 l91 89 88 -87 c48 -47 87 -90 87 -95z m-118 26 c32 -32 58 -61 58 -64 0 -4 -8 -9 -17 -12 -11 -2 -35 12 -60 36 l-41 39 -37 -41 c-29 -32 -42 -40 -59 -35 -11 4 -22 7 -24 9 -3 2 110 121 118 124 2 0 30 -25 62 -56z m-32 -68 l23 -25 -46 0 c-26 0 -47 2 -47 5 0 7 34 43 41 44 3 1 16 -10 29 -24z" style="fill: rgb(0, 0, 0);"></path>
  </g>
</svg> */
}

const Navbar = async () => {
    return (
        <div className="sticky inset-x-0 top-0 z-50">
            <header className="flex h-full items-center justify-between border-b bg-white px-2 py-2 dark:bg-black sm:px-4">
                <Link href={'/'}>
                    <div className="w-16 border-2 fill-black px-1 py-3 transition-colors duration-300 hover:border-black/35 dark:fill-white dark:hover:border-white/35 sm:w-20 sm:px-2 md:w-24 md:px-3 lg:w-32 lg:px-4 ">
                        <svg viewBox="158.0189 161.5484 284.8677 59.5033">
                            <g
                                transform="matrix(0.10000000149011613, 0, 0, -0.10000000149011613, 153.8865837139872, 235.46290939245975)"
                                stroke="none"
                            >
                                <path d="M238 722 c-154 -55 -236 -232 -178 -384 25 -68 94 -141 160 -172 65 -30 188 -29 248 2 64 34 118 87 146 145 36 70 36 179 2 252 -29 63 -111 138 -173 159 -60 21 -145 20 -205 -2z m140 -24 c-2 -6 -12 -16 -21 -22 -13 -8 -22 -6 -39 12 l-22 22 43 0 c28 0 41 -4 39 -12z m-73 -38 l39 -40 41 40 c28 28 47 39 58 34 9 -3 17 -9 17 -13 0 -4 -26 -32 -58 -64 l-58 -57 -63 64 c-60 60 -64 72 -26 75 6 1 29 -17 50 -39z m115 -65 c66 67 76 73 89 60 14 -13 6 -25 -74 -105 l-90 -90 -92 92 c-82 82 -90 93 -75 104 15 11 27 3 92 -62 l75 -74 75 75z m-185 -65 l90 -91 -92 -89 c-78 -76 -93 -87 -104 -74 -10 13 -1 27 62 90 l73 74 -73 74 c-51 51 -72 79 -68 90 4 9 10 16 14 16 5 0 49 -41 98 -90z m264 -15 l-75 -74 75 -75 c67 -67 74 -77 60 -91 -13 -13 -24 -5 -104 75 l-90 90 90 90 c80 81 91 88 105 75 13 -14 7 -23 -61 -90z m-335 -13 l57 -59 -60 -61 c-57 -57 -62 -59 -72 -40 -9 17 -5 25 33 58 l43 39 -43 44 c-29 30 -41 49 -36 60 3 9 9 17 13 17 4 0 33 -26 65 -58z m436 30 c0 -9 -17 -33 -37 -54 l-37 -38 37 -38 c35 -36 46 -65 29 -76 -5 -3 -35 22 -67 54 l-59 60 59 60 c57 58 75 66 75 32z m-495 -72 c18 -20 18 -21 -3 -40 -29 -27 -32 -26 -32 20 0 45 8 49 35 20z m505 -22 l0 -42 -22 21 c-21 22 -21 23 -3 43 10 11 20 20 22 20 1 0 3 -19 3 -42z m-90 -201 c0 -4 -7 -10 -16 -14 -11 -4 -39 17 -88 66 l-72 72 -72 -71 c-73 -72 -81 -77 -98 -60 -7 7 18 39 80 100 l91 89 88 -87 c48 -47 87 -90 87 -95z m-118 26 c32 -32 58 -61 58 -64 0 -4 -8 -9 -17 -12 -11 -2 -35 12 -60 36 l-41 39 -37 -41 c-29 -32 -42 -40 -59 -35 -11 4 -22 7 -24 9 -3 2 110 121 118 124 2 0 30 -25 62 -56z m-32 -68 l23 -25 -46 0 c-26 0 -47 2 -47 5 0 7 34 43 41 44 3 1 16 -10 29 -24z"></path>
                                <path d="M1590 440 l0 -220 25 0 24 0 3 143 3 142 109 3 c71 2 113 -1 122 -9 11 -9 14 -43 14 -145 0 -127 1 -134 20 -134 19 0 20 7 20 143 0 195 6 187 -161 187 l-129 0 0 55 c0 52 -1 55 -25 55 l-25 0 0 -220z"></path>
                                <path d="M1090 633 c-17 -3 -50 -34 -100 -93 l-75 -90 -67 0 -68 0 0 90 c0 89 0 90 -25 90 l-25 0 0 -205 0 -205 25 0 c25 0 25 0 25 93 l0 94 67 -1 66 -1 76 -92 c67 -81 80 -92 109 -92 l34 -1 -58 67 c-32 38 -73 84 -90 103 l-33 35 85 99 c93 108 99 117 87 115 -4 -1 -19 -4 -33 -6z"></path>
                                <path d="M1206 528 c-23 -32 -21 -110 3 -139 18 -23 27 -24 145 -27 123 -4 126 -4 132 -27 3 -13 3 -33 -1 -44 -6 -20 -14 -21 -125 -21 -65 0 -120 4 -122 9 -1 4 -13 12 -25 15 -19 6 -23 4 -23 -13 0 -12 9 -30 20 -41 18 -18 33 -20 150 -20 117 0 132 2 150 20 30 30 28 119 -3 148 -21 20 -34 22 -144 22 -132 0 -133 0 -123 60 l5 35 113 3 c93 2 113 0 118 -13 7 -18 54 -20 54 -2 0 7 -7 23 -16 35 -14 21 -22 22 -154 22 -132 0 -140 -1 -154 -22z"></path>
                                <path d="M1980 530 c0 -19 7 -20 138 -20 94 0 142 -4 150 -12 7 -7 12 -29 12 -50 l0 -38 -150 0 -150 0 0 -73 c0 -64 3 -76 23 -95 22 -21 33 -22 170 -22 l147 0 0 148 c0 132 -2 151 -18 165 -16 14 -43 17 -170 17 -145 0 -152 -1 -152 -20z m298 -218 c-2 -26 -6 -46 -10 -44 -5 1 -60 2 -123 2 l-115 0 0 48 0 47 126 -3 125 -3 -3 -47z"></path>
                                <path d="M2370 385 l0 -165 25 0 24 0 3 143 3 142 87 3 c85 3 88 2 94 -22 3 -13 4 -79 2 -145 -3 -120 -3 -121 20 -121 22 0 22 2 22 133 0 72 4 138 9 145 5 9 31 12 92 10 l84 -3 3 -142 3 -143 24 0 25 0 0 139 c0 125 -2 141 -21 165 l-20 26 -240 0 -239 0 0 -165z"></path>
                            </g>
                        </svg>
                    </div>
                </Link>
                <nav>
                    <ul className="flex items-center justify-center gap-2">
                        <li>
                            <Button
                                asChild
                                variant={'link'}
                                className="p-0 text-xs md:text-sm lg:text-base"
                            >
                                <Link href="#about" className="p-0">
                                    About
                                </Link>
                            </Button>
                        </li>
                        <hr className="h-4 w-[1px] bg-gray-500" />
                        <li>
                            <Button
                                asChild
                                variant={'link'}
                                className="p-0 text-xs md:text-sm lg:text-base"
                            >
                                <Link href={'/early'} className="p-0">
                                    Early Access
                                </Link>
                            </Button>
                        </li>
                        <hr className="h-4 w-[1px] bg-gray-500" />
                        <li>
                            <ModeToggle />
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
