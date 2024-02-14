import { Show, createSignal } from "solid-js";
import ApplicationForm from "~/components/ApplicationForm";
import HeroText from "~/components/HeroText";
import PrimaryButton from "~/components/PrimaryButton";

export default function Application() {
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] =
    createSignal(false);

  const handleSuccess = () => {
    setIsSubmittedSuccessfully(true);
  };

  return (
    <div>
      <HeroText text="Bewirb dich" className="mtl:mx-0 mx-5 mb-6 sm:mb-12" />
      <p class="mtl:mx-0 mx-5 mb-12 text-xl sm:text-2xl md:w-1/2">
        Starte deine Karriere als zahnmedizinische Fachangestellte bei uns –
        egal, ob Ausbildungsbeginn, Praxiswechsel oder Festanstellung!
      </p>
      <Show
        when={!isSubmittedSuccessfully()}
        fallback={
          <div class="mtl:mx-0 mx-5 mb-12 md:w-1/2">
            <p class="mb-6 text-xl  text-green-600 sm:text-2xl">
              Du hast dich erfolgreich beworben!
            </p>
            <PrimaryButton className="" url="/">
              Zur Startseite
            </PrimaryButton>
          </div>
        }
      >
        <ApplicationForm className="md:w-1/2" onSubmit={handleSuccess} />
      </Show>
    </div>
  );
}
