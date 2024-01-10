import { A } from "@solidjs/router";
import Address from "~/components/ApplicationTeaser copy";
import GoogleLocation from "~/components/GoogleLocation";
import LandingPage from "~/components/LandingPage";
import MobileLandingPage from "~/components/MobileLandingPage";
import SiteHeading from "~/components/SiteHeading";
import BaseLayout from "~/layouts/BaseLayout";

export default function Directions() {
  return (
    <main class="">
      <BaseLayout className="">
        <div class="default-width flex flex-col gap-4">
          <SiteHeading text='Anfahrt' />
          <Address />
          <GoogleLocation className="bg-highlight text-light-teal" svgClass="text-light-teal" />
        </div>
      </BaseLayout >
    </main >
  );
}
