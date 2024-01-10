import ContactBig from "~/components/ContactBig";
import SiteHeading from "~/components/SiteHeading";
import BaseLayout from "~/layouts/BaseLayout";

export default function Contact() {
  return (
    <main class="">
      <BaseLayout className="default-width">
        <SiteHeading text="Kontakt" />
        <ContactBig className="mt-2" />
      </BaseLayout >
    </main >
  );
}
