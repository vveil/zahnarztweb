import { For, createMemo, JSX } from "solid-js";

export default function HeroText(props: {
  text: string;
  splitText?: string;
  className?: string;
}) {
  const lines = createMemo(() => props.text.split("\n"));
  const splitLines = createMemo(() => props.splitText?.split("\n") || []);

  const processText = (text: string, index: number): JSX.Element => {
    const splitVersion = splitLines()[index];

    if (!splitVersion) return <>{text}</>;

    return (
      <>
        <span class="md:hidden">{splitVersion}</span>
        <span class="hidden md:inline">{text}</span>
      </>
    );
  };

  return (
    <div class={`${props.className || ''} flex flex-col`}>
      <For each={lines()}>
        {(line, index) => (
          <h1 class="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            {processText(line, index())}
          </h1>
        )}
      </For>
    </div>
  );
}
