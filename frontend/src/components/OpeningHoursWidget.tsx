import { Show } from "solid-js";

export default function OpeningHoursWidget(props: any) {
    return (
        <div class={`${props.className} p-4 bg-dark-teal flex flex-col gap-6 w-screen sm:w-fit pr-16 md:pr-32 rounded`}>
            <Show when={props.hasInlineHeading}>
                <h2 class="text-xl font-bold font-special">Öffnungszeiten</h2>
            </Show>
            <div class="flex gap-8">
                <div class="flex flex-col gap-2 font-semibold">
                    <p>Montag</p>
                    <p>Dienstag</p>
                    <p>Mittwoch</p>
                    <p>Donnerstag</p>
                    <p>Freitag</p>
                </div>
                <div class="flex flex-col gap-2 font-thin">
                    <div class="flex gap-4">
                        <p>8 - 12</p>
                        <p>14 - 18</p>
                    </div>
                    <div class="flex gap-4">
                        <p>8 - 12</p>
                        <p>15 - 19</p>
                    </div>
                    <p>8 - 12</p>
                    <div class="flex gap-4">
                        <p>8 - 12</p>
                        <p>15 - 19</p>
                    </div>
                    <p>8 - 12</p>
                </div>
            </div>
        </div>
    )
}