import ApplicationTeaser from "./ApplicationTeaser";
import Contact from "./Contact";
import HeroText from "./HeroText";
import OpeningHours from "./OpeningHours";
import TeamImage from "./TeamImage";

export default function MobileLandingPage(props: any) {
    return (
        <div class={`${props.className} sm:hidden flex flex-col lg:flex-row justify-between pb-4 h-auto w-auto`}>
            <div class="flex flex-col gap-4 md:gap-8 ">
                <HeroText className="mx-8" />
                <div class="text-xl mx-8">
                    <p>Weststr. 70</p>
                    <p>38126 Braunschweig</p>
                </div>
                <OpeningHours className="mt-2" />
            </div>
            <div class="flex flex-col gap-4 mt-8 w-auto lg:w-6/12 lg:mt-0">
                <TeamImage />
                <ApplicationTeaser className="mx-8" />
                <Contact className="mx-8" />
            </div>
        </div>
    )
}