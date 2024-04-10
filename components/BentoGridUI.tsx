import Image from 'next/image'
import { motion } from 'framer-motion'
import { Bluetooth, MonitorCheck, PlugZap, Plus, Sofa } from 'lucide-react'

// refactor as needed more product info
function BentoGridUI() {
    return (
        <>
            <div className="col-span-2 flex flex-col items-center justify-center gap-1 rounded-xl bg-zinc-700 px-3 py-4 text-xs tracking-wider sm:col-span-1 lg:col-span-1 lg:px-6 lg:py-8">
                <span className="text-2xl font-bold lg:text-4xl">5</span>
                Microphones
            </div>
            <div className="col-span-2 flex flex-col items-center justify-center rounded-xl bg-zinc-700 px-3 py-4 tracking-wider sm:col-span-1 lg:col-span-1 lg:px-6 lg:py-8">
                <span className="text-2xl font-bold lg:text-4xl">1080p</span>
                Camera
            </div>
            <div className="col-span-4 row-span-2 flex flex-col justify-around rounded-xl bg-zinc-700 px-4 py-6 sm:col-span-2 lg:col-span-2">
                <Image
                    src={'/glassCase.svg'}
                    alt="glasses case"
                    width={100}
                    height={100}
                    className="w-full drop-shadow-[10px_10px_20px_rgba(0,0,0,.5)]"
                />
                <p className="text-center text-2xl font-bold tracking-wider lg:text-4xl">
                    Smart Case
                </p>
            </div>
            <div className="col-span-4 flex items-center justify-center rounded-xl bg-zinc-700 sm:col-span-2 lg:col-span-2">
                <p className="text-center text-lg lg:text-2xl lg:leading-10">
                    <span className="relative font-extrabold tracking-wide text-rose-600">
                        Patented{' '}
                        <svg
                            className="absolute -left-1 -top-4 w-24 rotate-180 scale-x-110 scale-y-75 lg:left-2 lg:scale-x-150"
                            viewBox="0 0 104 73"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <motion.path
                                whileInView="animated"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, pathLength: 0 },
                                    animated: {
                                        opacity: 1,
                                        pathLength: 1,
                                        transition: {
                                            duration: 2,
                                            ease: 'circOut',
                                        },
                                    },
                                }}
                                initial="hidden"
                                d="M57.1576 7.44863C53.831 5.16772 51.182 3.5966 47.193 3.21034C43.8401 2.88567 40.4399 2.98776 37.104 3.43439C27.4742 4.72371 18.5278 10.1981 11.7423 16.9887C4.51029 24.226 -0.0601712 34.0308 0.892389 44.4084C2.03799 56.8891 11.2616 65.8317 22.6653 69.7276C37.5325 74.8068 55.3079 71.9896 69.5261 65.9911C82.4612 60.534 98.1688 50.2841 102.471 35.9373C106.219 23.4392 95.872 11.7376 85.8562 5.97051C77.5557 1.19116 67.8156 -0.854239 58.4918 2.0932C51.6146 4.26724 44.7193 7.80313 39.1564 12.4182C32.891 17.616 28.6773 24.2755 24.1785 30.9319"
                                stroke="currentColor"
                                strokeWidth="1.2047"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                    <span className="relative z-10">
                        Bone Conduction Transducer
                    </span>
                </p>
            </div>
            <div className="col-span-4 flex items-center justify-center rounded-xl bg-zinc-700 py-2 sm:col-span-2 lg:col-span-2">
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-14 lg:w-20"
                >
                    <path
                        style={{ fill: '#D5DCED' }}
                        d="M282.483,0h-52.966c-9.75,0-17.655,7.904-17.655,17.655v26.483h88.276V17.655
	C300.138,7.904,292.233,0,282.483,0z"
                    />
                    <path
                        style={{ fill: '#C7CFE2' }}
                        d="M264.828,0h-35.31c-9.75,0-17.655,7.904-17.655,17.655v26.483h35.31V17.655
	C247.172,7.904,255.078,0,264.828,0z"
                    />
                    <path
                        style={{ fill: '#7F8499' }}
                        d="M335.448,512H176.552c-19.501,0-35.31-15.809-35.31-35.31V70.621c0-19.501,15.809-35.31,35.31-35.31
	h158.897c19.501,0,35.31,15.809,35.31,35.31V476.69C370.759,496.191,354.95,512,335.448,512z"
                    />
                    <path
                        style={{ fill: '#707487' }}
                        d="M229.517,476.69V70.621c0-19.501,15.809-35.31,35.31-35.31h-88.276
	c-19.501,0-35.31,15.809-35.31,35.31V476.69c0,19.501,15.809,35.31,35.31,35.31h88.276C245.326,512,229.517,496.191,229.517,476.69z
	"
                    />
                    <path
                        style={{ fill: '#B4FF87' }}
                        d="M344.276,494.345H167.724c-4.875,0-8.828-3.953-8.828-8.828V88.276c0-4.875,3.953-8.828,8.828-8.828
	h176.552c4.875,0,8.828,3.953,8.828,8.828v397.241C353.103,490.392,349.151,494.345,344.276,494.345z"
                    />
                    <path
                        style={{ fill: '#9BF57D' }}
                        d="M329.426,248.812c-4.051-6.554-11.069-10.467-18.774-10.467h-28.575l23.204-58.01
	c2.723-6.806,1.896-14.496-2.215-20.568s-10.943-9.697-18.275-9.697h-48.138c-2.467,0-4.843,0.436-7.136,1.089v-71.71h-61.793
	c-4.875,0-8.828,3.953-8.828,8.828v397.241c0,4.875,3.953,8.828,8.828,8.828h66.69c-3.033-5.212-4.897-11.191-4.897-17.655v-68.363
	c4.014,4.246,9.567,6.726,15.463,6.726c8.035,0,15.272-4.492,18.887-11.722l66.524-133.047
	C333.836,263.393,333.475,255.367,329.426,248.812z"
                    />
                    <path
                        style={{ fill: '#FFF082' }}
                        d="M228.022,174.702l-23.843,111.269c-0.589,2.748,1.506,5.339,4.316,5.339H256l-14.578,102.046
	c-0.566,3.966,4.863,5.661,6.654,2.079L314.6,262.388c1.468-2.935-0.666-6.388-3.948-6.388H256l32.889-82.222
	c1.16-2.899-0.975-6.054-4.098-6.054h-48.138C232.491,167.724,228.894,170.632,228.022,174.702z"
                    />
                </svg>
                <p className="text-xl font-bold lg:text-2xl">
                    Day long battery backup
                </p>
            </div>
            <div className="col-span-2 flex flex-col items-center justify-around rounded-xl bg-zinc-700 px-2 py-4 text-center sm:row-start-4 lg:col-span-1 lg:row-start-auto">
                <p className="text-sm">Desktop mode</p>
                <MonitorCheck className="stroke-black" />
                <p className="text-xs tracking-wider text-white">
                    fully functional Desktop inbuilt
                </p>
            </div>
            <div className="col-span-2 row-start-7 rounded-xl bg-zinc-700 px-2 py-2 text-center sm:col-span-1 sm:row-span-2 sm:row-start-5 lg:col-span-1 lg:row-span-1">
                <p className="font-bold">Lidar Sensor</p>
                <div className="flex h-auto flex-col justify-around sm:h-full lg:h-auto">
                    <div className="self-end">
                        <Sofa className="h-7 w-7 stroke-black" />
                    </div>
                    <div className="relative self-center">
                        <svg
                            viewBox="0 0 246 345"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 -rotate-90 sm:-rotate-[120deg] sm:scale-[2] lg:-rotate-90 lg:scale-150"
                        >
                            <path
                                d="M231.654 338.871C226.62 328.369 215.525 326.434 199.105 326.459M231.654 338.871C225.998 327.972 228.442 313.96 239.986 304.673M231.654 338.871C230.13 339.104 224.107 318.996 210.59 297.968M199.326 279.195L187.311 259.67M176.046 242.774L165.908 227.004M155.62 210.859L143.605 192.461M133.535 178.327L121.895 160.68M112.283 146.111L100.268 129.214M89.0786 113.445L78.1898 97.2995M68.4273 83.4069L56.0365 67.6368M44.4719 53.3697C41.9687 49.615 35.9861 41.0541 32.0812 36.8487M22.3189 24.457L5.79785 6.05859"
                                stroke="#ffeeaa"
                                strokeWidth="11.3869"
                                strokeMiterlimit="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <p className="absolute bottom-0 left-1/2 text-xs text-[#ffeeaa]">
                            2m
                        </p>
                    </div>
                    <div className="">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                        >
                            <path
                                d="M7.90885 5H8.75C9.16421 5 9.5 5.33579 9.5 5.75C9.5 6.1297 9.21785 6.44349 8.85177 6.49315L8.75 6.5H7.90885C7.7339 6.5 7.56563 6.5611 7.4322 6.67094L7.35655 6.74259L5.283 8.999L8.74883 8.99956C9.90849 8.99956 10.8632 9.87687 10.9856 11.004H13.0132C13.1356 9.87687 14.0903 8.99956 15.25 8.99956L18.727 8.999L16.6438 6.74141C16.5254 6.61317 16.3669 6.53102 16.1962 6.5072L16.0925 6.5H15.25C14.8358 6.5 14.5 6.16421 14.5 5.75C14.5 5.3703 14.7822 5.05651 15.1482 5.00685L15.25 5H16.0925C16.6579 5 17.2 5.21269 17.6133 5.59178L17.7462 5.72424L21.3881 9.67141C21.4384 9.72588 21.479 9.78579 21.5101 9.84906C21.816 10.2334 21.9988 10.7201 21.9988 11.2496V14.7461C21.9988 16.541 20.5438 17.9961 18.7488 17.9961H16.25C14.4551 17.9961 13 16.541 13 14.7461L12.999 12.504H10.998L10.9988 14.7461C10.9988 16.541 9.54376 17.9961 7.74883 17.9961H5.25C3.45507 17.9961 2 16.541 2 14.7461V11.2496C2 10.6879 2.20576 10.1744 2.54602 9.78017L2.58382 9.72499L2.6277 9.67259L6.25196 5.72776C6.63545 5.31035 7.16059 5.05479 7.72092 5.00785L7.90885 5H8.75H7.90885Z"
                                fill="#000000"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="col-span-2 row-span-2 flex flex-col justify-around rounded-xl bg-zinc-700 py-4 text-center lg:col-span-1">
                <div className="flex w-full flex-col items-center">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                    >
                        <path
                            d="M2.77 10C2.34 10 2 9.66 2 9.23V6.92C2 4.21 4.21 2 6.92 2H9.23C9.66 2 10 2.34 10 2.77C10 3.2 9.66 3.54 9.23 3.54H6.92C5.05 3.54 3.54 5.06 3.54 6.92V9.23C3.54 9.66 3.19 10 2.77 10Z"
                            fill="#000000"
                        />
                        <path
                            d="M21.23 10C20.81 10 20.46 9.66 20.46 9.23V6.92C20.46 5.05 18.94 3.54 17.08 3.54H14.77C14.34 3.54 14 3.19 14 2.77C14 2.35 14.34 2 14.77 2H17.08C19.79 2 22 4.21 22 6.92V9.23C22 9.66 21.66 10 21.23 10Z"
                            fill="#000000"
                        />
                        <path
                            d="M17.0819 21.9997H15.6919C15.2719 21.9997 14.9219 21.6597 14.9219 21.2297C14.9219 20.8097 15.2619 20.4597 15.6919 20.4597H17.0819C18.9519 20.4597 20.4619 18.9397 20.4619 17.0797V15.6997C20.4619 15.2797 20.8019 14.9297 21.2319 14.9297C21.6519 14.9297 22.0019 15.2697 22.0019 15.6997V17.0797C22.0019 19.7897 19.7919 21.9997 17.0819 21.9997Z"
                            fill="#000000"
                        />
                        <path
                            d="M9.23 22H6.92C4.21 22 2 19.79 2 17.08V14.77C2 14.34 2.34 14 2.77 14C3.2 14 3.54 14.34 3.54 14.77V17.08C3.54 18.95 5.06 20.46 6.92 20.46H9.23C9.65 20.46 10 20.8 10 21.23C10 21.66 9.66 22 9.23 22Z"
                            fill="#000000"
                        />
                        <path
                            d="M18.4595 11.2305H17.0995H6.89953H5.53953C5.10953 11.2305 4.76953 11.5805 4.76953 12.0005C4.76953 12.4205 5.10953 12.7705 5.53953 12.7705H6.89953H17.0995H18.4595C18.8895 12.7705 19.2295 12.4205 19.2295 12.0005C19.2295 11.5805 18.8895 11.2305 18.4595 11.2305Z"
                            fill="#000000"
                        />
                        <path
                            d="M6.89844 13.9405V14.2705C6.89844 15.9305 8.23844 17.2705 9.89844 17.2705H14.0984C15.7584 17.2705 17.0984 15.9305 17.0984 14.2705V13.9405C17.0984 13.8205 17.0084 13.7305 16.8884 13.7305H7.10844C6.98844 13.7305 6.89844 13.8205 6.89844 13.9405Z"
                            fill="#ffffff"
                        />
                        <path
                            d="M6.89844 10.0605V9.73047C6.89844 8.07047 8.23844 6.73047 9.89844 6.73047H14.0984C15.7584 6.73047 17.0984 8.07047 17.0984 9.73047V10.0605C17.0984 10.1805 17.0084 10.2705 16.8884 10.2705H7.10844C6.98844 10.2705 6.89844 10.1805 6.89844 10.0605Z"
                            fill="#ffffff"
                        />
                    </svg>
                    <div className="flex h-6 w-6 rotate-90 justify-center">
                        <svg
                            viewBox="0 0 119 88"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <motion.path
                                whileInView={'animated'}
                                variants={{
                                    hidden: {
                                        pathLength: 0,
                                    },
                                    animated: {
                                        pathLength: 1,
                                        transition: {
                                            repeatDelay: 0.25,
                                            duration: 2,
                                            ease: 'easeIn',
                                            repeat: Infinity,
                                            repeatType: 'reverse',
                                        },
                                    },
                                }}
                                initial="hidden"
                                d="M113.4 17.361C89.7749 15.4615 65.0241 16.6174 41.5779 13.361C40.5911 13.224 29.0625 12.6854 31.8001 11.3166C33.5007 10.4663 52.3886 3.44264 52.2445 3.31659C50.1253 1.46242 27.3922 8.25769 25.0445 10.6055C24.8923 10.7577 50.8571 26.8896 54.2001 28.561"
                                stroke="#ffeeaa"
                                strokeWidth="10"
                                strokeLinecap="round"
                            />
                            <motion.path
                                whileInView={'animated'}
                                variants={{
                                    hidden: {
                                        pathLength: 0,
                                    },
                                    animated: {
                                        pathLength: 1,
                                        transition: {
                                            repeatDelay: 0.25,
                                            duration: 2,
                                            ease: 'easeIn',
                                            repeat: Infinity,
                                            repeatType: 'reverse',
                                        },
                                    },
                                }}
                                initial="hidden"
                                d="M3 58.961C35.8611 62.7435 69.5762 69.9485 102.2 71.761C117.812 72.6284 95.7404 64.0866 91 58.161C84.9491 50.5974 106.398 70.7889 115.711 73.4499C119.397 74.5029 88.2736 80.414 86.2001 84.561"
                                stroke="#ffeeaa"
                                strokeWidth="10"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                    >
                        <path
                            d="M7.90885 5H8.75C9.16421 5 9.5 5.33579 9.5 5.75C9.5 6.1297 9.21785 6.44349 8.85177 6.49315L8.75 6.5H7.90885C7.7339 6.5 7.56563 6.5611 7.4322 6.67094L7.35655 6.74259L5.283 8.999L8.74883 8.99956C9.90849 8.99956 10.8632 9.87687 10.9856 11.004H13.0132C13.1356 9.87687 14.0903 8.99956 15.25 8.99956L18.727 8.999L16.6438 6.74141C16.5254 6.61317 16.3669 6.53102 16.1962 6.5072L16.0925 6.5H15.25C14.8358 6.5 14.5 6.16421 14.5 5.75C14.5 5.3703 14.7822 5.05651 15.1482 5.00685L15.25 5H16.0925C16.6579 5 17.2 5.21269 17.6133 5.59178L17.7462 5.72424L21.3881 9.67141C21.4384 9.72588 21.479 9.78579 21.5101 9.84906C21.816 10.2334 21.9988 10.7201 21.9988 11.2496V14.7461C21.9988 16.541 20.5438 17.9961 18.7488 17.9961H16.25C14.4551 17.9961 13 16.541 13 14.7461L12.999 12.504H10.998L10.9988 14.7461C10.9988 16.541 9.54376 17.9961 7.74883 17.9961H5.25C3.45507 17.9961 2 16.541 2 14.7461V11.2496C2 10.6879 2.20576 10.1744 2.54602 9.78017L2.58382 9.72499L2.6277 9.67259L6.25196 5.72776C6.63545 5.31035 7.16059 5.05479 7.72092 5.00785L7.90885 5H8.75H7.90885Z"
                            fill="#000000"
                        />
                    </svg>
                    <div className="mb-2 flex h-6 w-6 rotate-90 justify-center">
                        <svg
                            viewBox="0 0 119 88"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <motion.path
                                whileInView={'animated'}
                                variants={{
                                    hidden: {
                                        pathLength: 0,
                                    },
                                    animated: {
                                        pathLength: 1,
                                        transition: {
                                            repeatDelay: 0.25,
                                            duration: 2,
                                            ease: 'easeIn',
                                            repeat: Infinity,
                                            repeatType: 'reverse',
                                        },
                                    },
                                }}
                                initial="hidden"
                                d="M113.4 17.361C89.7749 15.4615 65.0241 16.6174 41.5779 13.361C40.5911 13.224 29.0625 12.6854 31.8001 11.3166C33.5007 10.4663 52.3886 3.44264 52.2445 3.31659C50.1253 1.46242 27.3922 8.25769 25.0445 10.6055C24.8923 10.7577 50.8571 26.8896 54.2001 28.561"
                                stroke="#ffeeaa"
                                strokeWidth="10"
                                strokeLinecap="round"
                            />
                            <motion.path
                                whileInView={'animated'}
                                variants={{
                                    hidden: {
                                        pathLength: 0,
                                    },
                                    animated: {
                                        pathLength: 1,
                                        transition: {
                                            repeatDelay: 0.25,
                                            duration: 2,
                                            ease: 'easeIn',
                                            repeat: Infinity,
                                            repeatType: 'reverse',
                                        },
                                    },
                                }}
                                initial="hidden"
                                d="M3 58.961C35.8611 62.7435 69.5762 69.9485 102.2 71.761C117.812 72.6284 95.7404 64.0866 91 58.161C84.9491 50.5974 106.398 70.7889 115.711 73.4499C119.397 74.5029 88.2736 80.414 86.2001 84.561"
                                stroke="#ffeeaa"
                                strokeWidth="10"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 612"
                        className="h-12 w-12"
                    >
                        <g>
                            <polygon points="132.414,360.484 89.489,360.484 89.489,317.551 64.915,317.551 64.915,385.058 132.414,385.058" />
                            <polygon points="425.391,67.508 449.965,67.508 449.965,0 382.466,0 382.466,24.574 425.391,24.574" />
                            <polygon points="89.489,24.567 132.414,24.574 132.414,0 64.915,0 64.915,67.508 89.489,67.508" />
                            <polygon
                                points="425.391,360.484 382.466,360.484 382.466,385.058 449.965,385.058 449.965,317.551 425.391,317.551 	
		"
                            />
                            <path
                                d="M359.812,435.662c-19.166-7.168-40.989-26.526-40.989-40.965c0-9.559,0-21.502,0-37.885 c12.287-13.647,30.718-33.79,36.861-68.603c14.335-5.12,22.526-13.311,32.766-49.148c10.895-38.165-16.383-36.861-16.383-36.861 s0-20.478,0-38.221c0-30.038-13.983-118.775-116.055-118.775c-102.056,0-116.039,88.737-116.039,118.775 c0,17.742,0,38.221,0,38.221s-27.278-1.304-16.383,36.861c10.224,35.837,18.415,44.028,32.75,49.148 c6.144,34.813,24.59,54.956,36.877,68.603c0,16.382,0,28.326,0,37.885c0,14.439-23.566,34.822-40.989,40.965 c-28.062,9.895-98.04,16.871-115.319,76.338h438.181C457.749,452.701,387.666,446.086,359.812,435.662z"
                                fill="#ffffff"
                            />
                        </g>
                    </svg>
                </div>
                <p className="px-2 text-sm font-semibold lg:text-lg">
                    Object & Face recognition
                </p>
            </div>
            <div className="col-span-4 row-span-2 flex flex-col justify-center rounded-xl bg-zinc-700 py-2 sm:col-span-3 lg:col-span-2 lg:justify-around">
                <div className="grid grid-cols-2 py-4">
                    <div className="col-span-1 justify-self-center">
                        <svg
                            fill="#000000"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 738.561 738.561"
                            className="h-10 w-10 lg:h-14 lg:w-14"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <g>
                                        <path d="M600.479,293.487l-0.025-0.053c0.03,0.007,0.062,0.015,0.096,0.019C600.527,293.467,600.5,293.473,600.479,293.487z"></path>
                                        <path d="M591.156,278.057c-0.003-0.001-0.005-0.001-0.006-0.001c0.001-0.016,0.006-0.032,0.006-0.047V278.057z"></path>
                                    </g>
                                    <path d="M160.245,45.261c16.188-4.545,33.001,4.896,37.539,21.091l70.14,193.04c0.561,3.731,4.04,6.306,7.771,5.745 c3.739-0.568,6.312-4.054,5.751-7.779l-3.773-227.373C277.672,13.417,291.098,0,307.666,0c16.566,0,29.999,13.417,29.999,29.985 l5.73,232.962c0,5.577,4.517,10.059,10.101,10.086c8.164,0.057,9.763-7.631,9.763-7.631c0.204-0.785,49.029-205.721,49.029-205.721 c3.274-17.928,14.981-29.255,31.521-28.386c16.547,0.863,29.256,14.982,28.394,31.521L417.254,358.99 c-1.312,7.674,5.928,9.652,9.729,9.385c6.348-0.442,48.172,13.62,49.428,48.333c0,0,2.96,48.151,0.422,63.211 c-6.889,40.851-56.196,136.281-77.718,141.676v77.736c0,21.112-20.396,38.282-41.5,38.991 c-1.396,0.161-122.473,0.238-122.473,0.238c-23.125,0-37.083-18.742-37.083-41.874v-79.562 c-40.043-29.465-34.025-141.948-34.025-144.845l-0.632-107.989c1.025-22.823-1.473-56.091,23.028-62.697 c4.881-1.319,24.801-2,25.552-2.743c0.184-0.189-72.833-216.066-72.833-216.066C134.609,66.591,144.057,49.799,160.245,45.261z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="col-span-full justify-self-center">
                        <svg
                            className="h-10 w-10 rotate-[80deg] lg:h-16 lg:w-16"
                            viewBox="0 0 77 85"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <motion.path
                                whileInView="animated"
                                variants={{
                                    hidden: { pathLength: 0 },
                                    animated: {
                                        opacity: 1,
                                        pathLength: 1,
                                        transition: {
                                            duration: 3,
                                            ease: 'circOut',
                                            repeat: Infinity,
                                            repeatType: 'reverse',
                                        },
                                    },
                                }}
                                initial="hidden"
                                d="M1.33755 84.3973C0.297616 62.7119 2.93494 39.8181 19.4192 23.8736C28.2211 15.3599 42.4944 12.5723 47.6281 26.2359C51.1245 35.5419 51.542 51.9945 41.0605 57.0865C29.486 62.7095 40.2945 35.2221 41.9942 32.4952C49.9497 19.7313 59.7772 11.6122 72.2699 3.78281C76.9496 0.849879 73.7108 0.477284 70.0947 1.13476C66.9572 1.7052 63.4035 2.43717 60.5291 3.81975C59.6524 4.24143 65.7349 2.73236 66.6827 2.44768C70.7471 1.22705 75.4874 -0.0219285 75.9527 5.60812C76.0274 6.5127 75.9956 14.9844 74.7481 15.2963C74.099 15.4586 71.0438 10.27 70.4642 9.65288C66.6996 5.64506 63.5835 4.42393 58.2726 5.11792"
                                stroke="#ffeeaa"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <div className="col-start-2 justify-self-center text-xl font-bold text-white lg:text-4xl ">
                        W
                    </div>
                </div>
                <p className="px-4 text-center text-lg font-bold lg:text-2xl">
                    Real time sign language conversion
                </p>
            </div>
            <div className="col-span-4 flex flex-col justify-around rounded-xl bg-zinc-700 px-2 py-2 text-center font-bold lg:col-span-3">
                Offline processing
                <div className="flex flex-col items-center gap-2">
                    <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                    >
                        <g fill="black">
                            <path
                                d="m 8 1.992188 c -2.617188 0 -5.238281 0.933593 -7.195312 2.808593 l -0.496094 0.480469 c -0.3984378 0.378906 -0.410156 1.011719 -0.03125 1.410156 c 0.382812 0.398438 1.015625 0.410156 1.414062 0.027344 l 0.5 -0.476562 c 3.085938 -2.953126 8.53125 -2.953126 11.617188 0 l 0.5 0.476562 c 0.398437 0.382812 1.03125 0.371094 1.414062 -0.027344 c 0.378906 -0.398437 0.367188 -1.03125 -0.03125 -1.410156 l -0.496094 -0.480469 c -1.957031 -1.875 -4.578124 -2.808593 -7.195312 -2.808593 z m -0.03125 4.007812 c -1.570312 0.011719 -3.128906 0.628906 -4.207031 1.8125 l -0.5 0.550781 c -0.375 0.40625 -0.347657 1.042969 0.0625 1.414063 c 0.410156 0.371094 1.042969 0.339844 1.414062 -0.070313 l 0.5 -0.542969 c 1.242188 -1.363281 3.992188 -1.492187 5.398438 -0.128906 c 0.121093 -0.023437 0.242187 -0.035156 0.363281 -0.035156 c 0.53125 0 1.039062 0.210938 1.414062 0.585938 l 0.222657 0.222656 c 0.011719 -0.011719 0.023437 -0.019532 0.039062 -0.03125 c 0.40625 -0.371094 0.4375 -1.007813 0.0625 -1.414063 l -0.5 -0.550781 c -1.125 -1.230469 -2.703125 -1.824219 -4.269531 -1.8125 z m 0.03125 4 c -0.511719 0 -1.023438 0.195312 -1.414062 0.585938 c -0.78125 0.78125 -0.78125 2.046874 0 2.828124 s 2.046874 0.78125 2.828124 0 c 0.210938 -0.210937 0.359376 -0.453124 0.457032 -0.714843 l -0.285156 -0.285157 c -0.554688 -0.554687 -0.707032 -1.367187 -0.46875 -2.070312 c -0.335938 -0.226562 -0.726563 -0.34375 -1.117188 -0.34375 z m 0 0"
                                fillOpacity="0.34902"
                            />
                            <path d="m 11 10 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 1.292969 1.292969 l -1.292969 1.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 s 1.023437 0.390625 1.414062 0 l 1.292969 -1.292969 l 1.292969 1.292969 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 l -1.292969 -1.292969 l 1.292969 -1.292969 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 s -0.519531 0.105469 -0.707031 0.292969 l -1.292969 1.292969 l -1.292969 -1.292969 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0 0" />
                        </g>
                    </svg>
                    <p className="text-sm text-[#ffeeaa] md:text-base lg:text-lg">
                        No internet but still kicking...
                    </p>
                </div>
            </div>
            <div className="col-span-4 flex flex-col rounded-xl bg-zinc-700 py-2 text-center lg:col-span-3">
                <p>Bluetooth + Rechargable</p>
                <div className="flex flex-1 items-center justify-center gap-10">
                    <Bluetooth className="h-12 w-12 stroke-[#ffeeaa]" />
                    <Plus className="stroke-[#ffeeaa]" />
                    <PlugZap className="h-12 w-12 stroke-[#ffeeaa]" />
                </div>
            </div>
        </>
    )
}

export default BentoGridUI
