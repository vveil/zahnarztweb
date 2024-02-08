import { A, useLocation } from "@solidjs/router";
import ApplicationButton from "./ApplicationButton";
import PrimaryButton from "./PrimaryButton";
import { Show, createSignal } from "solid-js";

export default function Header(props: any) {
  const [isOpen, setIsOpen] = createSignal(false);
  const location = useLocation();
  const active = (path: string) => {
    if (path == "/bewerben") {
      if (location.pathname == "/bewerben") {
        return "opacity-80";
      }
      return "";
    }
    return path == location.pathname
      ? "md:text-highlight md:opacity-100 opacity-70 underline"
      : "hover:opacity-80 md:hover:text-highlight";
  };
  return (
    <div class={`${props.className} mtl:mx-0 mx-5 flex justify-between`}>
      <A href="/" class="flex flex-col">
        <h1 class="text-dark-blue text-start text-xl font-semibold md:text-2xl">
          Zahnarztpraxis
        </h1>
        <h1 class="text-start text-xl font-semibold opacity-40 md:text-2xl">
          Dr. med. dent. Jürgen&nbsp;Werner
        </h1>
      </A>
      <div class="hidden items-center gap-8 text-lg md:flex">
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
      <div class="md:hidden">
        <div class="space-y-[6px]" onClick={() => setIsOpen(true)}>
          <span class="bg-dark-blue block h-0.5 w-8"></span>
          <span class="bg-dark-blue block h-0.5 w-8"></span>
          <span class="bg-dark-blue block h-0.5 w-8"></span>
        </div>
        <Show when={isOpen()}>
          <div
            class={`bg-highlight absolute left-0 top-0 z-10 flex h-fit w-full flex-col gap-[-1px]  pb-8 pt-5 text-xl text-white`}
          >
            <div class="mx-5 mb-12 flex justify-between">
              <A
                href="/"
                class="flex flex-col"
                onClick={() => setIsOpen(false)}
              >
                <h1 class="text-start text-xl font-semibold text-white md:text-2xl">
                  Zahnarztpraxis
                </h1>
                <h1 class="text-start text-xl font-semibold text-[#8AB2BF] md:text-2xl">
                  Dr. med. dent. Jürgen&nbsp;Werner
                </h1>
              </A>
              <div
                class="relative h-[1.5rem] w-[1.5rem]"
                onClick={() => setIsOpen(false)}
              >
                <span
                  class="absolute h-[0.15rem] w-[1.5rem] -rotate-45 transform rounded-full bg-white"
                  style="top: 50%;"
                ></span>
                <span
                  class="absolute h-[0.15rem] w-[1.5rem] rotate-45 transform rounded-full bg-white"
                  style="top: 50%;"
                ></span>
              </div>
            </div>
            <A
              class={`${active("/aktuelles")} border-dark-teal-light w-full  border-y-2 py-5 text-center`}
              href="/aktuelles"
              onClick={() => setIsOpen(false)}
            >
              Aktuelles
            </A>
            {/* <A class={`${active("/service")} `} href="/service">Behandlungsspektrum</A> */}
            <A
              class={`${active("/dokumente")}  w-full py-5 text-center`}
              href="/dokumente"
              onClick={() => setIsOpen(false)}
            >
              Dokumente
            </A>
            <A
              href="/bewerben"
              class={`${active("/bewerben")}  border-dark-teal-light w-full  border-y-2 py-5 text-center`}
              onClick={() => setIsOpen(false)}
            >
              Bewerben
            </A>
          </div>
        </Show>
      </div>
    </div>
  );
}
