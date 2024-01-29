import { For } from "solid-js";

export default function HeroText(props: any) {
  const lines = () => props.text.split("\n");
  return (
    <div class={`${props.className} flex flex-col`}>
      <For each={lines()}>
        {(line) => <h1 class="text-4xl font-bold sm:text-7xl">{line}</h1>}
      </For>
    </div>
  );
}
