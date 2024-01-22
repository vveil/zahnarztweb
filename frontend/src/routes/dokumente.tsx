import { A } from "@solidjs/router"
import { Show, createSignal } from "solid-js"
import BaseWidget from "~/components/BaseWidget"
import HeroText from "~/components/HeroText"

export default function Dokumente(props: any) {
    const anamneseFile = 'documents/anamnesebogen.pdf'
    const [showAnamnese, setShowAnamnese] = createSignal(false)
    return (
        <div>
            <Show when={anamneseFile && showAnamnese()}>
                <button class="mb-2 default-button" onClick={() => setShowAnamnese(false)}>← Zurück</button>
                <iframe src={anamneseFile} class="w-full h-[62.5rem]"></iframe>
            </Show>
            <Show when={!showAnamnese()}>
                <HeroText text="Dokumente" className="mb-12" />
                <div class="flex flex-col sm:flex-row gap-8 mx-5 sm:mx-0">
                    <BaseWidget title="Anamnesebogen" className="sm:w-fit lg:min-w-[412px]">
                        <div class="flex gap-4">
                            <button onClick={() => setShowAnamnese(true)} class="flex-1 hidden sm:flex justify-center default-button drop-shadow-none">Bearbeiten<span class="ml-2">→</span></button>
                            <A href="documents/anamesebogen.pdf" download="AnamnesebogenDrJürgenWerner.pdf" class="flex-1 primary-button text-center">Herunterladen</A>
                        </div>
                    </BaseWidget>
                    <BaseWidget title="Verhaltensmaßnahmen" className="sm:w-fit lg:min-w-[412px]">
                        <div class="flex">
                            <A href="documents/verhaltensmaßnahmen.pdf" download="Verhaltenmaßnahmen.pdf" class="flex-1 primary-button text-center">Herunterladen</A>
                        </div>
                    </BaseWidget>
                </div>
            </Show>
        </div>
    )
}