import OpeningHoursWidget from "~/components/OpeningHoursWidget";
import ServicesShort from "~/components/ServicesShort";
import SiteHeading from "~/components/SiteHeading";
import BaseLayout from "~/layouts/BaseLayout";

export default function Service() {
  return (
    <main>
      <BaseLayout className="">
        <div class="default-width">
          <SiteHeading text='Öffnungszeiten' />
          <OpeningHoursWidget className="mt-2" hasInlineHeading={false} />
        </div>
      </BaseLayout>
    </main>
  );
}
