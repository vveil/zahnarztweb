import { A } from "@solidjs/router";
import ApplicationForm from "~/components/ApplicationForm";
import ApplicationInfos from "~/components/ApplicationInfos";
import HeroText from "~/components/HeroText";
import BaseLayout from "~/layouts/BaseLayout";

export default function Application() {
  return (
    <BaseLayout className="">
      <HeroText text="Bewirb dich" className="mb-6 sm:mb-12" />
      <p class="mx-5 sm:mx-0 text-xl sm:text-2xl sm:w-4/6 mb-12">
        Starte deine Karriere als zahnmedizinische Fachangestellte bei uns – egal, ob Ausbildungsbeginn, Praxiswechsel oder Festanstellung!
      </p>
      <ApplicationForm className="sm:w-1/2" />
    </BaseLayout>
  );
}
