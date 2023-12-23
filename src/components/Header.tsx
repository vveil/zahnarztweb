import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import ApplicationButton from "./ApplicationButton";

export default function Header(props: any) {
    return (
        <div class={`${props.className} flex justify-between py-4 md:py-8`}>
            <A href="/" class="flex flex-col">
                <h1 class="text-start font-semibold text-xl md:text-2xl text-dark-blue">Zahnarztpraxis</h1>
                <h1 class="text-start font-semibold text-xl md:text-2xl opacity-40">Dr. med. dent. Jürgen Werner</h1>
            </A>
            <div class="hidden lg:flex gap-8 text-lg items-center font-special">
                <A href="/openinghours">Öffnungszeiten</A>
                <A href="/directions">Anfahrt</A>
                <A href="/service">Service</A>
                <A href="/team">Team</A>
                <ApplicationButton text="Bewerben" />
            </div>
            <div class="flex lg:hidden font-special">
                Test
            </div>
        </div>
    );
}
