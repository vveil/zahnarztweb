export default function HeroText(props: any) {
    return (
        <div class={`${props.className} flex flex-col mx-5 sm:mx-0`}>
            <h1 class="text-4xl sm:text-7xl font-bold">Ihr Zahnarzt</h1>
            <h1 class="text-4xl sm:text-7xl font-bold">in&nbsp;Braunschweig</h1>
        </div>
    )
}