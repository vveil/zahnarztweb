import { A } from "@solidjs/router";

export default function DefaultButton(props: any) {
  return (
    <A href={`${props.url}`} class={`default-button ${props.className}`}>
      {props.children}
    </A>
  );
}
