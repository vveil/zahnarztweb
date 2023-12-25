import { A } from "@solidjs/router";

export default function ApplicationButton(props: any) {
    return (
        <A href="/application" class="w-auto">
            <button class="w-full bg-highlight text-light-teal font-sans font-semibold px-4 py-2 rounded">{props.text}</button>
        </A>)
}