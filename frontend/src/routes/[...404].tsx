// import { A } from "@solidjs/router";
import DefaultButton from "~/components/DefaultButton";
import HeroText from "~/components/HeroText";
import BaseLayout from "~/layouts/BaseLayout";

export default function NotFound() {
  return (
    <BaseLayout>
      <HeroText
        text="Ups, das konnte nicht gefunden werden."
        className="mx-5 mb-6  sm:mx-0 "
      />
      <DefaultButton url="/" className="mx-5 sm:mx-0">
        Zurück zur Startseite
      </DefaultButton>
    </BaseLayout>
  );
}
