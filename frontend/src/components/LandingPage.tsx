import ApplicationTeaser from "./ApplicationTeaser";
import BaseWidget from "./BaseWidget";
import ContactSmall from "./ContactSmall";
import GoogleLocation from "./GoogleLocation";
import HeroText from "./HeroText";
import OpeningHoursWidget from "./OpeningHoursWidget";
import ServicesShort from "./ServicesShort";
import TeamImage from "./TeamImage";

export default function LandingPage(props: any) {
    return (
        <div class={`${props.className} flex flex-col gap-24`}>
            <HeroText />
            <div class="flex gap-8">
                <BaseWidget title="Anfahrt" className="flex-1">
                    <div class="flex flex-col gap-6">
                        <div>
                            <p>Weststraße 70,</p>
                            <p>38126 Braunschweig</p>
                        </div>
                        <button>TODO Google Button</button>
                    </div>
                </BaseWidget>
                <BaseWidget title="Öffnungszeiten" className="flex-1">
                </BaseWidget>
                <BaseWidget title="Kontakt" className="flex-1">
                </BaseWidget>
            </div>
        </div>
    )
}