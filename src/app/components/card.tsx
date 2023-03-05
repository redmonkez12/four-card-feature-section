import Image from "next/image";
import clsx from "clsx";

export type Props = {
    text: string;
    header: string;
    imageUrl: string;
    variant: "green" | "red" | "orange" | "blue";
    styles?: string;
};

export function Card({ text, header, imageUrl, variant, styles }: Props) {
    return (
        <div className={clsx(`relative rounded-lg shadow-card p-7 md:p-8 flex flex-col gap-8 md:gap-10 max-w-[21.875rem] bg-white ${styles}`, {
            "card-green": variant === "green",
            "card-blue": variant === "blue",
            "card-orange": variant === "orange",
            "card-red": variant === "red"
        })}>
            <div className={"text-black"}>
                <h2 className={"text-lg font-semibold leading-[1.875rem]"}>{header}</h2>
                <p className={"text-[0.813rem] mt-px md:mt-0.5 opacity-50 tracking-[0.006rem] leading-[1.438rem]"}>{text}</p>
            </div>

            <Image className={"md:hidden self-end"} src={imageUrl} width={57} height={57} alt={"Logo"}/>
            <Image className={"hidden md:inline self-end"} src={imageUrl} width={64} height={64} alt={"Logo"}/>
        </div>
    );
}