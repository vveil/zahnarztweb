import { A } from "@solidjs/router";
import ApplicationForm from "~/components/ApplicationForm";
import ApplicationInfos from "~/components/ApplicationInfos";
import HeroText from "~/components/HeroText";
import BaseLayout from "~/layouts/BaseLayout";

export default function Application() {
  return (
    <BaseLayout className="">
      <HeroText text="Bewirb dich" className="mx-5 mb-6 sm:mx-0 sm:mb-12" />
      <p class="mx-5 mb-12 text-xl sm:mx-0 sm:w-4/6 sm:text-2xl">
        Starte deine Karriere als zahnmedizinische Fachangestellte bei uns –
        egal, ob Ausbildungsbeginn, Praxiswechsel oder Festanstellung!
      </p>
      <ApplicationForm className="sm:w-1/2" />
    </BaseLayout>
  );
}
