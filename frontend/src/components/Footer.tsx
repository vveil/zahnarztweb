import { A } from "@solidjs/router";

export default function Footer(props: any) {
    return (
        <div class={`${props.className} flex gap-4 text-sm text-gray-500 justify-center align-bottom`}>
            {/* <A href="/links">Links</A> */}
            {/* <A href="/contact">Kontakt</A> */}
            <A href="/impressum">Impressum</A>
        </div>
    );
}
