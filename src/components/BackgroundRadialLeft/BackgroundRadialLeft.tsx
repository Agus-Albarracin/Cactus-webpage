import Image from "next/image";

export function BackgroundRadialLeft() {
    return (
        <div className="left-0 absolute top-20">
            <Image src="/assets/background-floated-left.png" width={850} height={650} alt="Circle Left 2" />
        </div>
    )
}
