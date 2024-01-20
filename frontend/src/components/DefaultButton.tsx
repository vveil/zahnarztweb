import { A } from "@solidjs/router";

export default function DefaultButton(props: any) {
    return (
        <A
            href={`${props.url}`}
            class={`font-bold py-2 rounded-lg border-highlight text-highlight w-fit px-3 border-2 drop-shadow-solid bg-dark-teal`}
        >
            {props.children}
        </A>
    )
}