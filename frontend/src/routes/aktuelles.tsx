import { A } from "@solidjs/router";
import { For, Show, createResource } from "solid-js";
import BaseWidget from "~/components/BaseWidget";
import HeroText from "~/components/HeroText";
import BaseLayout from "~/layouts/BaseLayout";

export default function Aktuelles() {
  const [articles] = createResource(fetchArticleList);

  async function fetchArticleList() {
    const response = await fetch("https://zahncms.niklas.ai/api/articles");
    const data = await response.json();
    console.log(data); // Log the resolved JSON
    return data;
  }

  return (
    <main class="">
      <BaseLayout className="">
        <HeroText text="Aktuelles" className="mx-5 mb-12 sm:mx-0" />
        <div class="flex flex-col-reverse gap-14 text-2xl sm:flex-row">
          <Show when={articles()}>
            <div class="flex h-fit flex-1 flex-col">
              <h1 class="mx-5 mb-5 text-2xl font-bold sm:mx-0">
                Unsere Artikel
              </h1>
              <For each={articles().docs}>
                {(article) => (
                  <div class="border-dark-teal flex h-fit flex-1 justify-between border-b-2 px-5 py-3 sm:px-0">
                    <A
                      class="flex flex-1 justify-between"
                      href={`/articles/${article.id}`}
                    >
                      <h2>{article.title}</h2>
                      <span class="drop-shadow-solid-light text-highlight font-bold sm:pr-2">
                        →
                      </span>
                    </A>
                  </div>
                )}
              </For>
            </div>
          </Show>
          <BaseWidget
            title="Weiterführende Links"
            className="flex h-fit px-5 sm:mx-0 sm:w-fit sm:p-7"
          >
            <div class="flex flex-col gap-1">
              <A
                class="text-highlight text-lg hover:underline"
                href="https://www.kzvn.de/"
              >
                Kassenzahnärztliche Vereinigung Niedersachsen
              </A>
              <A
                class="text-highlight text-lg hover:underline"
                href="https://www.dgzs.de/"
              >
                Deutsche Gesellschaft Zahnärztliche Schlafmedizin
              </A>
              <A
                class="text-highlight text-lg hover:underline"
                href="https://share.rheinklang.de/player?link=64fb34a7cd3d7"
              >
                "Zähne zeigen" eine Kampagne der Zahnärzteschaft
              </A>
              {/* <A href="">Alles viel zu teuer - Flyer der KZVN</A> */}
            </div>
          </BaseWidget>
        </div>
      </BaseLayout>
    </main>
  );
}
