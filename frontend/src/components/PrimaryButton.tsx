import { A } from "@solidjs/router";

export default function PrimaryButton(props: any) {
    return (
        <A
            href={`${props.url}`}
            class={`font-bold py-2  px-4 rounded-lg border-highlight-dark text-white w-fit border-2 drop-shadow-solid-dark bg-highlight`}
        >
            {props.children}
        </A>
    )
}