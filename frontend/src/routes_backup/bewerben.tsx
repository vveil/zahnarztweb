import { A } from "@solidjs/router";
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
      <div class="mtl:mx-0 mx-5 text-xl sm:text-2xl md:w-1/2">
        <p class="mb-12 ">
          Starte deine Karriere als zahnmedizinische Fachangestellte bei uns –
          egal, ob Ausbildungsbeginn, Praxiswechsel oder Festanstellung!
        </p>

        <div class="flex flex-col gap-2">
          <p>
            Schick uns deine Bewerbung mit <span class="font-semibold">Lebenslauf</span> und <span class="font-semibold">Zeugnis</span><br />
          </p>
          <a class="default-button hover:drop-shadow-solid-lg duration-200 ease-in hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:drop-shadow-none" href="mailto:dr.juergenwerner@arcor.de?subject=[Wichtig]%20Bewerbung">
            an dr.juergenwerner@arcor.de
          </a>
        </div>
      </div>
      {/* <Show
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
      </Show> */}
    </div>
  );
}
