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
                    <div class="flex gap-8">
                        <div class="flex flex-col gap-3 font-semibold">
                            <p>Montag</p>
                            <p>Dienstag</p>
                            <p>Mittwoch</p>
                            <p>Donnerstag</p>
                            <p>Freitag</p>
                        </div>
                        <div class="flex flex-col gap-3 font-normal">
                            <div class="flex gap-4">
                                <p>8&thinsp;–&hairsp;12</p>
                                <p>14&thinsp;–&hairsp;18</p>
                            </div>
                            <div class="flex gap-4">
                                <p>8&thinsp;–&hairsp;12</p>
                                <p>15&thinsp;–&hairsp;19</p>
                            </div>
                            <p>8&thinsp;–&hairsp;12</p>
                            <div class="flex gap-4">
                                <p>8&thinsp;–&hairsp;12</p>
                                <p>15&thinsp;–&hairsp;19</p>
                            </div>
                            <p>8&thinsp;–&hairsp;12</p>
                        </div>
                    </div>
                </BaseWidget>
                <BaseWidget title="Kontakt" className="flex-1">
                </BaseWidget>
            </div>
        </div>
    )
}