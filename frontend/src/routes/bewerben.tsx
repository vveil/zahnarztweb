import { A } from "@solidjs/router";
import ApplicationForm from "~/components/ApplicationForm";
import ApplicationInfos from "~/components/ApplicationInfos";
import BaseLayout from "~/layouts/BaseLayout";

export default function Application() {
  return (
    <main class="">
      <BaseLayout className="">
        <div class="flex flex-col mx-4 gap-4 md:gap-12 md:mx-16 md:flex-row">
          <ApplicationInfos className="md:w-1/2" />
          <ApplicationForm className="md:w-1/2" />
        </div>
      </BaseLayout>
    </main>
  );
}
