import { A } from "@solidjs/router";
import LandingPage from "~/components/LandingPage";
import BaseLayout from "~/layouts/BaseLayout";

export default function Home() {
  return (
    <BaseLayout className="">
      <LandingPage className="" />
      <div class="bg-black w-full h-10"></div>
    </BaseLayout>
  );
}
