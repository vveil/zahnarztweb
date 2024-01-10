import { A } from "@solidjs/router";
import SiteHeading from "~/components/SiteHeading";
import BaseLayout from "~/layouts/BaseLayout";

export default function Aktuelles() {
  return (
    <main class="">
      <BaseLayout className="">
        <SiteHeading text='Aktuelles' />
      </BaseLayout>
    </main>
  );
}
