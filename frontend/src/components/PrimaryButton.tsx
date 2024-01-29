import { A } from "@solidjs/router";

export default function PrimaryButton(props: any) {
  return (
    <A href={`${props.url}`} class={`primary-button ${props.className}`}>
      {props.children}
    </A>
  );
}
