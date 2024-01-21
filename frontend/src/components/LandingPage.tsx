import BaseWidget from "./BaseWidget";
import HeroText from "./HeroText";
import DefaultButton from "./DefaultButton";
import EmployeePreview from "./EmployeePreview";
import PrimaryButton from "./PrimaryButton";

export default function LandingPage(props: any) {
    const heroText = `Ihr Zahnarzt\nin\u00A0Braunschweig`;
    return (
        <div class={`${props.className} flex flex-col gap-12 sm:gap-24`}>
            {/* <h1 class="text-4xl sm:text-7xl font-bold">Ihr Zahnarzt</h1>
            <h1 class="text-4xl sm:text-7xl font-bold">in&nbsp;Braunschweig</h1> */}
            <HeroText text={heroText} />
            <div class="flex flex-col sm:flex-row gap-8">
                <BaseWidget title="Anfahrt" className="flex-1" bgColor="sm:bg-dark-teal">
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
                <BaseWidget title="Kontakt" className="flex-1" bgColor="sm:bg-dark-teal">
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
            </div>
            <div>
                <h1 class="mx-5 sm:mx-0 text-4xl font-bold mb-3">Das Team der Praxis</h1>
                <p class="mx-5 sm:mx-0 text-2xl">
                    Wir beraten und behandeln Sie gerne persönlich und
                    <span class="sm:block hidden"> </span>
                    individuell auf Ihre Situation angepasst.
                </p>
            </div>
            <div class="flex flex-col gap-10 sm:flex-row sm:gap-0 justify-between">
                <EmployeePreview
                    imgSrc="/images/jwerner.jpg"
                    imgAlt="Bild des Zahnarztes Dr. med. dent. Jürgen Werner"
                    name="Dr. med. dent. Jürgen&nbsp;Werner"
                    job="Zahnarzt"
                />
                <EmployeePreview
                    imgSrc="/images/bhillebrecht.jpg"
                    imgAlt="Bild von Beachte Hillebrecht"
                    name="Beate Hillebrecht"
                    job="Rezeption, Prophylaxe"
                />
                <EmployeePreview
                    imgSrc="/images/azubi.jpg"
                    imgAlt="Bild von der Auszubildenen"
                    name="Neuer Name"
                    job="AZUBI, Stuhlassistenz, Labor"
                />
                <BaseWidget title="Wir suchen Zahnmedizinische Fachangestellte" className="order-first sm:order-1 sm:max-w-[18.75rem] max-h-[18.75rem]" childrenDivClasses="flex w-full h-full justify-end items-end">
                    <PrimaryButton url="/bewerben" className="mb-1">
                        Hier Bewerben
                        <span class="ml-2">→</span>
                    </PrimaryButton>
                </BaseWidget>
            </div>
        </div>
    )
}