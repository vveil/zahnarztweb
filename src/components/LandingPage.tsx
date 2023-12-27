import ApplicationTeaser from "./ApplicationTeaser";
import Contact from "./Contact";
import HeroText from "./HeroText";
import OpeningHoursWidget from "./OpeningHoursWidget";
import ServicesShort from "./ServicesShort";
import TeamImage from "./TeamImage";

export default function LandingPage(props: any) {
    return (
        <div class={`${props.className} hidden sm:flex flex-col gap-4`}>
            <div class={`sm:flex flex-col lg:flex-row justify-between pb-4 h-auto w-auto`}>
                <div class="flex flex-col gap-4 md:gap-8 ">
                    <HeroText />
                    <div class="text-xl">
                        <p>Weststr. 70</p>
                        <p>38126 Braunschweig</p>
                    </div>
                    <div class="flex flex-col gap-4 sm:flex-row lg:flex-col">
                        <OpeningHoursWidget />
                        <Contact />
                    </div>
                </div>
                <div class="flex flex-col gap-4 mt-8 w-auto lg:w-6/12 lg:mt-0">
                    <TeamImage />
                    <ApplicationTeaser />
                </div>
            </div>
            <ServicesShort className="" />
        </div>
    )
}