import { A } from "@solidjs/router";
import ApplicationTeaser from "./ApplicationTeaser";
import BaseWidget from "./BaseWidget";
import ContactSmall from "./ContactSmall";
import GoogleLocation from "./GoogleLocation";
import HeroText from "./HeroText";
import OpeningHoursWidget from "./OpeningHoursWidget";
import ServicesShort from "./ServicesShort";
import TeamImage from "./TeamImage";
import DefaultButton from "./DefaultButton";

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
                        <DefaultButton
                            url="https://www.google.com/maps/search/?api=1&query=dr+werner+zahnarzt+rautheim"
                        >
                            <span>Auf Google Maps ansehen</span>
                            <span class="ml-2">→</span>
                        </DefaultButton>

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
                    <div class="flex flex-col gap-1 mb-6">
                        <p class="font-semibold">Telefon</p>
                        <p>0531&thinsp;/&thinsp;6802931</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="font-semibold">E-Mail</p>
                        <a href="mailto:dr.juergenwerner@arcor.de">
                            dr.juergenwerner@arcor.de
                        </a>
                    </div>
                </BaseWidget>
            </div >
        </div >
    )
}