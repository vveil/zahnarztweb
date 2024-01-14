import { A, useLocation } from "@solidjs/router";
import ApplicationButton from "./ApplicationButton";

export default function Header(props: any) {
  const location = useLocation();
  const active = (path: string) => {
    if (path == "/bewerben") {
      if (location.pathname == "/bewerben") {
        return "bg-highlight-light";
      }
      return "hover:bg-highlight-light";
    }
    return path == location.pathname
      ? "text-highlight"
      : "hover:text-highlight-light";
  };
  return (
    <div class={`${props.className} flex justify-between py-4 md:py-8`}>
      <A href="/" class="flex flex-col">
        <h1 class="text-start font-semibold text-xl md:text-xl text-dark-blue">
          Zahnarztpraxis
        </h1>
        <h1 class="text-start font-semibold text-xl md:text-xl text-[#9197AE]">
          Dr. med. dent. Jürgen Werner
        </h1>
      </A>
      <div class="hidden sm:flex gap-8 text-md items-center">
        <A class={`${active("/aktuelles")} `} href="/aktuelles">
          Aktuelles
        </A>
        <A class={`${active("/service")} `} href="/service">
          Behandlungsspektrum
        </A>
        <A class={`${active("/dokumente")} `} href="/team">
          Dokumente
        </A>
        <ApplicationButton
          text="Bewerben"
          className={`${active("/bewerben")} "hover:bg-highlight-light"`}
        />
      </div>
      <div class="flex sm:hidden">Test</div>
    </div>
  );
}
