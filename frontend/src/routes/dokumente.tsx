import { A } from "@solidjs/router";
import { Show, createSignal } from "solid-js";
import BaseWidget from "~/components/BaseWidget";
import HeroText from "~/components/HeroText";
import BaseLayout from "~/layouts/BaseLayout";

export default function Dokumente(props: any) {
  const anamneseFile = "documents/anamnesebogen.pdf";
  const [showAnamnese, setShowAnamnese] = createSignal(false);
  return (
    <BaseLayout>
      <div>
        <Show when={anamneseFile && showAnamnese()}>
          <button
            class="default-button mb-2"
            onClick={() => setShowAnamnese(false)}
          >
            ← Zurück
          </button>
          <iframe src={anamneseFile} class="h-[62.5rem] w-full"></iframe>
        </Show>
        <Show when={!showAnamnese()}>
          <HeroText text="Dokumente" className="mx-5 mb-12 sm:mx-0" />
          <div class="mx-5 flex flex-col gap-8 sm:mx-0 sm:flex-row">
            <BaseWidget
              title="Anamnesebogen"
              className="sm:w-fit lg:min-w-[412px]"
            >
              <div class="flex gap-4">
                <button
                  onClick={() => setShowAnamnese(true)}
                  class="default-button hidden flex-1 justify-center drop-shadow-none sm:flex"
                >
                  Bearbeiten<span class="ml-2">→</span>
                </button>
                <A
                  href="documents/anamesebogen.pdf"
                  download="AnamnesebogenDrJürgenWerner.pdf"
                  class="primary-button flex-1 text-center"
                >
                  Herunterladen
                </A>
              </div>
            </BaseWidget>
            <BaseWidget
              title="Verhaltensmaßnahmen"
              className="sm:w-fit lg:min-w-[412px]"
            >
              <div class="flex">
                <A
                  href="documents/verhaltensmaßnahmen.pdf"
                  download="Verhaltenmaßnahmen.pdf"
                  class="primary-button flex-1 text-center"
                >
                  Herunterladen
                </A>
              </div>
            </BaseWidget>
          </div>
        </Show>
      </div>
    </BaseLayout>
  );
}
