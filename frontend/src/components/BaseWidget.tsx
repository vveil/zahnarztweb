import { Show } from "solid-js";

export default function BaseWidget(props: any) {
    return (
        <div class={`flex flex-col gap-5 rounded p-4 bg-dark-teal ${props.className} `}>
            <h2 class="text-3xl font-bold">{props.title}</h2>
            <div class="text-xl">
                {props.children}
            </div>
        </div>
    )
}