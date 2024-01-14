export default function BaseLayout(props: any) {
  return (
    <div
      class={`${props.className} flex flex-col w-full h-full flex-1 text-black-normal`}
    >
      <div class="">{props.children}</div>
    </div>
  );
}
