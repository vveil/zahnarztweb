import { createSignal } from "solid-js";

export default function Header(props: any) {
    return (
        <div class={`${props.className} flex justify-between py-4 md:py-8`}>
            <div class="flex flex-col">
                <h1 class="text-start font-semibold text-xl md:text-2xl text-dark-blue">Zahnarztpraxis</h1>
                <h1 class="text-start font-semibold text-xl md:text-2xl opacity-40">Dr. med. dent. Jürgen Werner</h1>
            </div>
            <div class="hidden lg:flex gap-8 text-lg font-special">
                <nav>Öffnungszeiten</nav>
                <nav>Anfahrt</nav>
                <nav>Service</nav>
                <nav>Team</nav>
                <nav>Karriere</nav>
            </div>
            <div class="flex lg:hidden font-special">
                Test
            </div>
        </div>
    );
}
