import { A, useLocation } from "@solidjs/router";
import { createEffect } from "solid-js";

export default function ApplicationButton(props: any) {
    const location = useLocation();
    let isBewerbenRoute = false;
    createEffect(() => {
        isBewerbenRoute = (location.pathname === '/bewerben');
    });
    return (
        <A onClick={(e) => {
            // prevent navigating to /bewerben when already on /bewerben
            if (isBewerbenRoute) {
                e.preventDefault();
            }
        }}
            href="/bewerben" class={`bg-highlight text-light-teal font-sans font-semibold ${props.className} w-auto rounded`}>
            <button disabled={isBewerbenRoute} class="w-full px-4 py-2">{props.text}</button>
        </A>
    )
}