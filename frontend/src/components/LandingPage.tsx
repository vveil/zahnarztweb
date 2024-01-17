import ApplicationTeaser from "./ApplicationTeaser";
import ContactSmall from "./ContactSmall";
import GoogleLocation from "./GoogleLocation";
import HeroText from "./HeroText";
import OpeningHoursWidget from "./OpeningHoursWidget";
import ServicesShort from "./ServicesShort";
import TeamImage from "./TeamImage";

export default function LandingPage(props: any) {
    return (
        <div class={`${props.className} flex flex-col`}>

            <HeroText />

            {/* <ServicesShort className="" /> */}
        </div>
    )
}