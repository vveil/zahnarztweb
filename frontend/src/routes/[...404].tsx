import DefaultButton from "~/components/DefaultButton";
import HeroText from "~/components/HeroText";

export default function NotFound() {
  return (
    <div>
      <HeroText
        text="Ups, das konnte nicht gefunden werden."
        className="mx-5 mb-6  sm:mx-0 "
      />
      <DefaultButton url="/" className="mx-5 sm:mx-0">
        Zurück zur Startseite
      </DefaultButton>
    </div>
  );
}
