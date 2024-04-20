"use client"
import Link from "next/link"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { Reveal } from "../Reveal"


export function FirstBlock() {
    return (
        <div className="relative p-6 md:py-30">
            <BackgroundRadialRight />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h1 className="text-5xl font-semibold">
                            New library
                            <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-white">
                                Client and Server
                            </span>
                            for your project's
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Your main function is to extract data for Google login, decode it to obtain a profile object, and send it to the server to be saved in the database.The secondary function is to simplify the code in the CRUD controllers.</p>
                    </Reveal>
                </div>
                <MotionTransition className="flex items-center justify-center">
                    <Image src="/assets/cactus-block.png" alt="Cactus" width={700} height={700} className="h-auto w-100 md:w-full" />
                </MotionTransition>
            </div>
        </div>
    )
}
