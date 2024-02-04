import { A } from "@solidjs/router";
import ApplicationForm from "~/components/ApplicationForm";
import ApplicationInfos from "~/components/ApplicationInfos";
import HeroText from "~/components/HeroText";
import BaseLayout from "~/layouts/BaseLayout";

export default function Application() {
  return (
    <BaseLayout className="">
      <HeroText text="Bewirb dich" className="mtl:mx-0 mx-5 mb-6 sm:mb-12" />
      <p class="mtl:mx-0 mx-5 mb-12 text-xl sm:text-2xl md:w-1/2">
        Starte deine Karriere als zahnmedizinische Fachangestellte bei uns –
        egal, ob Ausbildungsbeginn, Praxiswechsel oder Festanstellung!
      </p>
      <ApplicationForm className="md:w-1/2" />
    </BaseLayout>
  );
}
