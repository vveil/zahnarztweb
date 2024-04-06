import { A } from "@solidjs/router";

export default function Footer(props: any) {
  return (
    <div
      class={`${props.className} flex justify-center gap-4 align-bottom text-sm text-gray-500`}
    >
      {/* <A href="/links">Links</A> */}
      {/* <A href="/contact">Kontakt</A> */}
      <A href="/impressum">Impressum</A>
      <A href="/datenschutz">Datenschutz</A>
    </div>
  );
}
