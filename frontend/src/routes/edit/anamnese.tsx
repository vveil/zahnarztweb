import { A } from "@solidjs/router";

export default function Anamnese() {
  const anamneseFile = "/documents/anamnesebogen.pdf";
  return (
    <div>
      <A class="default-button mb-2" href="/dokumente">
        ← Zurück
      </A>
      <iframe src={anamneseFile} class="mt-5 h-[62.5rem] w-full"></iframe>
    </div>
  );
}
