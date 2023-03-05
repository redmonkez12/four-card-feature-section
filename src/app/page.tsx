import { Poppins } from 'next/font/google'
import { Card } from "@/app/components/card";

const poppins = Poppins({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700", "800", "900"] })

export default function Home() {
    return (
        <main className={`${poppins.className} px-8 py-20 flex flex-col items-center`}>
            <header className={"text-center max-w-[33.75rem]"}>
                <h1 className={"text-2xl md:text-4xl tracking-[0.01rem] md:tracking-[0.016rem] leading-[2.25rem] md:leading-[3.375rem]"}>
                    <div className={"font-light"}>Reliable, efficient delivery</div>
                    <div className={"font-semibold"}>Powered by Technology</div>
                </h1>
                <p className={"opacity-50 mt-4 text-[0.938rem] leading-[1.563rem] tracking-[0.007rem]"}>Our Artificial
                    Intelligence powered tools use millions of project data points to ensure that your project is
                    successful</p>
            </header>

            <section className={"mt-20 md:mt-16 flex flex-col md:grid md:grid-cols-3 md:grid-rows-4 gap-4 md:gap-8 max-w-[69.375rem]"}>
                <Card header={"Supervisor"}
                      text={"Monitors activity to identify project roadblocks"}
                      imageUrl={"/images/icon-supervisor.svg"}
                      variant={"green"}
                      styles={"col-start-1 col-end-2 row-start-2 row-end-4"}
                />
                <Card header={"Team Builder"}
                      text={"Scans our talent network to create the optimal team for your project"}
                      imageUrl={"/images/icon-team-builder.svg"}
                      variant={"red"}
                      styles={"col-start-2 col-end-3 row-start-1 row-end-3"}
                />
                <Card header={"Karma"}
                      text={"Regularly evaluates our talent to ensure quality"}
                      imageUrl={"/images/icon-karma.svg"}
                      variant={"orange"}
                      styles={"col-start-2 col-end-3 row-start-3 row-end-5"}
                />
                <Card header={"Calculator"}
                      text={"Uses data from past projects to provide better delivery estimates"}
                      imageUrl={"/images/icon-calculator.svg"}
                      variant={"blue"}
                      styles={"col-start-3 col-end-4 row-start-2 row-end-4"}
                />
            </section>
        </main>
    )
}
