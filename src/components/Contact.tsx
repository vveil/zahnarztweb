export default function Contact(props: any) {
    return (
        <div class={`${props.className} flex flex-col gap-4`}>
            <h2 class="text-2xl font-bold font-special">Kontakt</h2>
            <div class="flex gap-8">
                <div class="flex flex-col gap-2">
                    <p class="font-semibold">Telefon</p>
                    <p class="">0531 / 6802929</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="font-semibold">E-Mail</p>
                    <p class="">
                        <a href="mailto:dr.juergenwerner@arcor.de" class="text-dark-blue">
                            dr.juergenwerner@arcor.de
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}