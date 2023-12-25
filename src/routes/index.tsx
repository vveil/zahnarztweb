import { A } from "@solidjs/router";
import LandingPage from "~/components/LandingPage";
import MobileLandingPage from "~/components/MobileLandingPage";
import BaseLayout from "~/layouts/BaseLayout";

export default function Home() {
  return (
    <main class="">
      <BaseLayout className="">
        <MobileLandingPage className="" />
        <LandingPage className="sm:mx-8 lg:mx-32" />
      </BaseLayout>
    </main>
  );
}
