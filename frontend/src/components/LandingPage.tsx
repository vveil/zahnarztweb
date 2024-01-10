import ApplicationTeaser from "./ApplicationTeaser";
import ContactSmall from "./ContactSmall";
import GoogleLocation from "./GoogleLocation";
import HeroText from "./HeroText";
import OpeningHoursWidget from "./OpeningHoursWidget";
import ServicesShort from "./ServicesShort";
import TeamImage from "./TeamImage";

export default function LandingPage(props: any) {
    return (
        <div class={`${props.className} hidden sm:flex flex-col items-center gap-4`}>
            <div class={`sm:flex flex-col lg:flex-row justify-between pb-4 h-auto w-auto`}>
                <div class="flex flex-col gap-4 md:gap-8 ">
                    <HeroText />
                    <div class="text-xl">
                        <p>Weststr. 70</p>
                        <p>38126 Braunschweig</p>
                        <GoogleLocation className="mt-2 text-md border-2 bg-white text-gray-500 text-sm" svgClass="text-gray-500" />
                    </div>
                    <div class="flex flex-col gap-4 sm:flex-row lg:flex-col">
                        <OpeningHoursWidget hasInlineHeading={true} />
                        <ContactSmall />
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