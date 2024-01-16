import { A, useLocation } from "@solidjs/router";
import ApplicationButton from "./ApplicationButton";

export default function Header(props: any) {
    const location = useLocation();
    const active = (path: string) => {
        if (path == "/bewerben") {
            if (location.pathname == "/bewerben") {
                return "bg-highlight-light"
            }
            return "hover:bg-highlight-light"
        }
        return path == location.pathname
            ? "text-highlight"
            : "hover:text-highlight-light";
    }
    return (
        <div class={`${props.className} flex justify-between py-4 md:py-8`}>
            <A href="/" class="flex flex-col">
                <h1 class="text-start font-semibold text-xl md:text-2xl text-dark-blue">Zahnarztpraxis</h1>
                <h1 class="text-start font-semibold text-xl md:text-2xl opacity-40">Dr. med. dent. Jürgen Werner</h1>
            </A>
            <div class="hidden lg:flex gap-8 text-lg items-center font-special">
                <A class={`${active("/openinghours")} `} href="/openinghours">Öffnungszeiten</A>
                <A class={`${active("/directions")} `} href="/directions">Anfahrt</A>
                <A class={`${active("/service")} `} href="/service">Behandlungsspektrum</A>
                <A class={`${active("/aktuelles")} `} href="/aktuelles">Aktuelles</A>
                <ApplicationButton text="Bewerben" className={`${active("/bewerben")} "hover:bg-highlight-light"`} />
            </div>
            <div class="flex lg:hidden font-special">
                Test
            </div>
        </div>
    );
}
