import { A } from "@solidjs/router";
import LandingPage from "~/components/LandingPage";
import MobileLandingPage from "~/components/MobileLandingPage";
import BaseLayout from "~/layouts/BaseLayout";

export default function Home() {
  return (
    <main class="">
      <BaseLayout className="">
        <LandingPage className="" />
      </BaseLayout>
    </main>
  );
}
