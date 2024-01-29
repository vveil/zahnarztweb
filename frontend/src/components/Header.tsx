import { A, useLocation } from "@solidjs/router";
import ApplicationButton from "./ApplicationButton";
import PrimaryButton from "./PrimaryButton";
import { createSignal } from "solid-js";

export default function Header(props: any) {
  const [isOpen, setIsOpen] = createSignal(false);
  const location = useLocation();
  const active = (path: string) => {
    if (path == "/bewerben") {
      if (location.pathname == "/bewerben") {
        return "opacity-80";
      }
      return "hover:opacity-80";
    }
    return path == location.pathname
      ? "text-highlight"
      : "hover:text-highlight";
  };
  return (
    <div class={`${props.className} mx-5 flex justify-between sm:mx-0`}>
      <A href="/" class="flex flex-col">
        <h1 class="text-dark-blue text-start text-xl font-semibold md:text-2xl">
          Zahnarztpraxis
        </h1>
        <h1 class="text-start text-xl font-semibold opacity-40 md:text-2xl">
          Dr. med. dent. Jürgen&nbsp;Werner
        </h1>
      </A>
      <div class="hidden items-center gap-8 text-lg lg:flex">
        <A class={`${active("/aktuelles")} `} href="/aktuelles">
          Aktuelles
        </A>
        {/* <A class={`${active("/service")} `} href="/service">Behandlungsspektrum</A> */}
        <A class={`${active("/dokumente")} `} href="/dokumente">
          Dokumente
        </A>
        <PrimaryButton url="/bewerben" className={`${active("/bewerben")}`}>
          <span>Bewerben</span>
        </PrimaryButton>
      </div>
      <div class="sm:hidden">
        <div class="space-y-[6px]" onClick={() => setIsOpen(!isOpen())}>
          <span class="bg-dark-blue block h-0.5 w-8"></span>
          <span class="bg-dark-blue block h-0.5 w-8"></span>
          <span class="bg-dark-blue block h-0.5 w-8"></span>
        </div>
        <div
          class={`bg-dark-teal border-highlight absolute left-0 top-24 z-10 flex h-fit w-full transform flex-col gap-4 border-y-2 px-5 py-8 text-xl font-semibold ${isOpen() ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}
        >
          <A
            class={`${active("/aktuelles")} `}
            href="/aktuelles"
            onClick={() => setIsOpen(false)}
          >
            Aktuelles
          </A>
          {/* <A class={`${active("/service")} `} href="/service">Behandlungsspektrum</A> */}
          <A
            class={`${active("/dokumente")} `}
            href="/dokumente"
            onClick={() => setIsOpen(false)}
          >
            Dokumente
          </A>
          <A
            href="/bewerben"
            class={`${active("/bewerben")} primary-button h-fit`}
            onClick={() => setIsOpen(false)}
          >
            <span>Bewerben</span>
          </A>
        </div>
      </div>
    </div>
  );
}
