"use client"
import 'swiper/css'
import 'swiper/css/effect-cards'
import { BackgroundRadialRight2 } from "../BackgroundRadialRight2";
import { Reveal } from "../Reveal";
import Image from "next/image";
import { dataFeaturesBusiness2 } from "../Xpicker/Xops.data"

export function Xops() {
    return (
        <div className="relative px-6 py-0 md:py-12" >
            <BackgroundRadialRight2 />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h2 className="text-5xl font-semibold">
                        <span className="block degradedLime bg-limeLigh" id="xops"></span>
                            <span className="block degradedLime bg-limeLight">Server Side</span>
                            xops 🏭 <br />
                            
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-20">This method is responsible for receiving the products such as: the client, the API ID, the request, the response, and the model you created in the database for your user, like raw materials, to create and deposit the users in your database.<br />
                        The factory provides the developer with lines of code in their controller, the advantages of using this small business:<br />
                        <br />• Code neatness.
                        <br />• Reduction of lines and time.
                        <br />• Receives all necessary parameters to create the user in your database.
                        <br />• Later, you can continue adding more or modify it whenever you want.
                        </p>
                    </Reveal>
                </div>
                <div className="grid items-center m-15 py-5 md:p-8">
                    {dataFeaturesBusiness2.map(({ id, icon, title, description }) => (
                        <Reveal key={id}>
                            <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack">
                                <Image src={`/assets/${icon}.gif`} alt={title} width={40} height={40} />
                                <div>
                                    <h4 className="text-primary">{title}</h4>
                                    <p className="text-primaryDark">{description}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </div>
    )
}
