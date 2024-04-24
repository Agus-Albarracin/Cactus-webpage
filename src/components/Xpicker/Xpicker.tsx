"use client"
import { useRouter } from "next/navigation";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import { Reveal } from "../Reveal"
import { dataFeaturesBusiness } from "./Xpicker.data"
import Image from "next/image"


export function Xpicker() {
    const router = useRouter();

    const handleTitleClick = () => {
        router.push("/documentation");
    };

    return (
        <div className="relative px-6 py-0 md:py-40" >
            <BackgroundRadialLeft />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h2 className="text-5xl font-semibold">
                            <span className="block degradedLime bg-limeLigh m-2" id="xpicker"></span>
                            <span className="block degradedLime bg-limeLight">
                                Client Side
                            </span>
                            <span
                                style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                                onClick={handleTitleClick}
                            >
                                xpicker 👷
                                <Image
                                    src="/assets/arrow-up-right.svg"
                                    title="Haz click para ir a la documentación"
                                    alt="arrow navigation"
                                    width={70}
                                    height={70}
                                />
                            </span>
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">He is our star operator, working on selecting, organizing, preparing, and sending. It receives 2 arguments:<br />
                            <br />• The endpoint, which must be a string.
                            <br />• And the credentialResponse object provided by the React/Google component.
                        </p>
                    </Reveal>
                </div>

                <div className="grid items-center m-15 py-5 md:p-8">
                    {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
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


