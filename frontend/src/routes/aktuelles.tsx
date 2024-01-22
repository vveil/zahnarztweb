import { A } from "@solidjs/router";
import BaseWidget from "~/components/BaseWidget";
import HeroText from "~/components/HeroText";
import BaseLayout from "~/layouts/BaseLayout";

export default function Aktuelles() {
  return (
    <main class="">
      <BaseLayout className="">
        <div class="flex flex-col sm:flex-row sm:justify-between">
          <HeroText text="Aktuelles" />
          <BaseWidget title="Weiterführende Links" className="hidden sm:flex w-fit mx-5 sm:mx-0">
            <div class="flex flex-col gap-1">
              <A class="text-lg text-highlight hover:underline" href="https://www.kzvn.de/">Kassenzahnärztliche Vereinigung Niedersachsen</A>
              <A class="text-lg text-highlight hover:underline" href="https://www.dgzs.de/">Deutsche Gesellschaft Zahnärztliche Schlafmedizin</A>
              <A class="text-lg text-highlight hover:underline" href="https://share.rheinklang.de/player?link=64fb34a7cd3d7">"Zähne zeigen" eine Kampagne der Zahnärzteschaft</A>
              {/* <A href="">Alles viel zu teuer - Flyer der KZVN</A> */}
            </div>
          </BaseWidget>
        </div>
      </BaseLayout>
    </main>
  );
}
