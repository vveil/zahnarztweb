import { Component, For, createEffect, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import axios from "axios";

export default function ApplicationForm(props: any) {
  const [selected, setSelected] = createSignal("AZUBI ZFA");
  const [name, setName] = createSignal("");
  const [surname, setSurname] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [datenConsent, setDatenConsent] = createSignal("");
  const [cv, setCv] = createSignal<File | null>(null);
  const [transcript, setTranscript] = createSignal<File | null>(null);

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    console.log("inside handleSubmit");
    const dataToSubmit = new FormData();
    dataToSubmit.append("stelle", selected());
    dataToSubmit.append("name", name());
    dataToSubmit.append("surname", surname());
    dataToSubmit.append("email", email());
    dataToSubmit.append("datenConsent", datenConsent());

    if (cv()) {
      dataToSubmit.append("cv", cv() as Blob);
    }
    if (transcript()) {
      dataToSubmit.append("transcript", transcript() as Blob);
    }

    try {
      // Make a POST request to the backend
      const response = await axios.post(
        "https://zahnarzt.niklas.ai/api/application",
        dataToSubmit,
      );
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const handleFileChange = (
    event: Event,
    setFile: (file: File | null) => void,
  ) => {
    const selectedFile = (event.target as HTMLInputElement).files?.[0];
    setFile(selectedFile || null);
  };

  const options = {
    azZFA: "AZUBI ZFA",
    azPraxisWechsler: "AZUBI Praxiswechsler",
    ZFA: "ZFA",
  };

  return (
    <div class={`${props.className}`}>
      <form
        onSubmit={handleSubmit}
        class="mtl:mx-0 mx-5 flex flex-col gap-2 sm:gap-4"
      >
        <div class="form-control flex flex-1 flex-col gap-1 sm:gap-2">
          <label for="art">
            Art der Stelle&thinsp;
            <span class="text-red-600">*</span>
          </label>
          <select
            class="p-1"
            id="art"
            value={selected()}
            onInput={(e) => setSelected(e.currentTarget.value)}
            required
          >
            <For each={Object.values(options)}>
              {(opt) => <option value={opt}>{opt}</option>}
            </For>
          </select>
        </div>
        <div class="mtl:flex-row flex flex-col gap-2 sm:gap-4">
          <div class="form-control flex flex-1 flex-col gap-1 sm:gap-2">
            <label class="" for="name">
              Vorname&thinsp;
              <span class="text-red-600">*</span>
            </label>
            <input
              class="p-1"
              type="text"
              id="name"
              value={name()}
              onChange={(e) => setName(e.currentTarget.value)}
              required
            />
          </div>
          <div class="form-control flex flex-1 flex-col gap-1 sm:gap-2">
            <label for="surname">
              Name&thinsp;
              <span class="text-red-600">*</span>
            </label>
            <input
              class="p-1"
              type="text"
              id="surname"
              value={surname()}
              onChange={(e) => setSurname(e.currentTarget.value)}
              required
            />
          </div>
        </div>
        <div class="form-control flex flex-col gap-1 sm:gap-2">
          <label for="email">
            E-Mail&thinsp;
            <span class="text-red-600">*</span>
          </label>
          <input
            class="p-1"
            type="text"
            id="email"
            value={email()}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
          />
        </div>
        <div class="mtl:flex-row flex flex-col gap-2 sm:gap-4">
          <div class="form-control flex flex-col gap-1 sm:flex-1 sm:gap-2">
            <label for="cv">
              Lebenslauf&thinsp;
              <span class="text-red-600">*</span>
            </label>
            <input
              class="p-1"
              type="file"
              id="cv"
              onChange={(e) => handleFileChange(e, setCv)}
              required
            />
          </div>
          <div class="form-control flex flex-col gap-1 sm:flex-1 sm:gap-2">
            <label for="transcript">
              Zeugnis&thinsp;
              <span class="text-red-600">*</span>
            </label>
            <input
              class="p-1"
              type="file"
              id="transcript"
              onChange={(e) => handleFileChange(e, setTranscript)}
              required
            />
          </div>
        </div>
        <div class="form-control flex items-start gap-1 sm:gap-2">
          <input
            class="mt-1 p-1"
            type="checkbox"
            id="datens"
            checked={false}
            onChange={(e) => {
              setDatenConsent(e.currentTarget.checked.toString());
            }}
            required
          />
          <label for="datens">
            Ich bin damit einverstanden, dass alle meine zuvor angebenen Daten
            per E-Mail an dr.juergenwerner@arcor.de versendet werden und von
            diesem im Sinne des Bewerbungsprozesses verarbeitet werden. Die
            Daten werden nicht an Dritte weitergegeben.&thinsp;
            <span class="text-red-600">*</span>
          </label>
        </div>

        <input
          class="form-submit primary-button mt-2 w-full"
          type="submit"
          value="Bewerbung abschicken"
        />
      </form>
    </div>
  );
}
