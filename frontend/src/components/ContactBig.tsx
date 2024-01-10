import Address from "./ApplicationTeaser copy";

export default function ContactBig(props: any) {
    return (
        <div class={`${props.className} flex flex-col gap-4`}>
            <div class="flex">
                <Address />
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-1">
                        <p class="font-semibold">E-Mail</p>
                        <p class="">
                            <a href="mailto:dr.juergenwerner@arcor.de" class="text-dark-blue">
                                dr.juergenwerner@arcor.de
                            </a>
                        </p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="font-semibold">Telefon</p>
                        <p class="">0531 / 6802929</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="font-semibold">Fax</p>
                        <p class="">0531 / 6802930</p>
                    </div>
                </div>
            </div>
        </div>
    )
}