import { A } from "@solidjs/router";
import BaseWidget from "~/components/BaseWidget";
import HeroText from "~/components/HeroText";

export default function Dokumente(props: any) {
  return (
    <div>
      <div>
        <HeroText text="Dokumente" className="mtl:mx-0 mx-5 mb-12" />
        <div class="mtl:mx-0 flex flex-col gap-8 md:mx-5 md:flex-row md:flex-wrap">
          <BaseWidget
            title="Anamnesebogen"
            className="md:w-fit lg:min-w-[412px]"
          >
            <div class="flex gap-4">
              <A
                href="/documents/anamnesebogen.pdf"
                target="_blank"
                class="default-button hidden flex-1 justify-center drop-shadow-none sm:flex"
              >
                Bearbeiten<span class="ml-2">🔗</span>
              </A>
              <A
                href="/documents/anamnesebogen.cdr"
                download="AnamnesebogenDrJ&uuml;rgenWerner.pdf"
                class="primary-button flex-1 text-center"
              >
                Herunterladen
              </A>
            </div>
          </BaseWidget>
          <BaseWidget
            title="Verhaltensmaßnahmen"
            className="md:w-fit lg:min-w-[412px]"
          >
            <div class="flex">
              <A
                href="/documents/verhaltensmaßnahmen.pdf"
                download="Verhaltenmaßnahmen.pdf"
                class="primary-button flex-1 text-center"
              >
                Herunterladen
              </A>
            </div>
          </BaseWidget>
          <BaseWidget
            title="Alles viel zu teuer? - KZVN"
            className="md:w-fit lg:min-w-[412px]"
          >
            <div class="flex gap-4">
              <A
                href="/documents/allesvielzuteuer.pdf"
                target="_blank"
                class="default-button hidden flex-1 justify-center drop-shadow-none sm:flex"
              >
                Anzeigen<span class="ml-2">🔗</span>
              </A>
              <A
                href="/documents/allesvielzuteuer.pdf"
                download="AnamnesebogenDrJ&uuml;rgenWerner.pdf"
                class="primary-button flex-1 text-center"
              >
                Herunterladen
              </A>
            </div>
          </BaseWidget>
        </div>
      </div>
    </div>
  );
}
