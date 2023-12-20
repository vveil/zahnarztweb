export default function HeroText(props: any) {
    return (
        <div class={`${props.className} flex flex-col`}>
            <h1 class="text-4xl font-bold">Ihr Zahnarzt</h1>
            <h1 class="text-4xl font-bold">in Braunschweig</h1>
        </div>
    )
}