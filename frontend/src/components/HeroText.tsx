import { For } from "solid-js";

export default function HeroText(props: any) {
    const lines = () => props.text.split('\n');
    return (
        <div class={`${props.className} flex flex-col mx-5 sm:mx-0`}>
            <For each={lines()}>{(line) => <h1 class="text-4xl sm:text-7xl font-bold">{line}</h1>}</For>
        </div>
    )
}