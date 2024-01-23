import { A } from "@solidjs/router";
import { JSX, createResource } from "solid-js";
import BaseWidget from "~/components/BaseWidget";
import HeroText from "~/components/HeroText";
import BaseLayout from "~/layouts/BaseLayout";

export default function Aktuelles() {
  const [articles] = createResource(fetchArticleList);

  async function fetchArticleList() {
    const response = await fetch('/articles/articles.json');
    const data = await response.json();
    console.log(data); // Log the resolved JSON
    return data;
  }

  return (
    <main class="">
      <BaseLayout className="">
        <div class="flex flex-col sm:flex-row sm:justify-between">
          <HeroText text="Aktuelles" />
          <BaseWidget title="Weiterführende Links" className="hidden sm:flex w-fit mx-5 sm:mx-0">
            <div class="flex flex-col gap-1">
              <A class="text-lg text-highlight hover:underline" href="https://www.kzvn.de/">Kassenzahnärztliche Vereinigung Niedersachsen</A>
              <A class="text-lg text-highlight hover:underline" href="https://www.dgzs.de/">Deutsche Gesellschaft Zahnärztliche Schlafmedizin</A>
              <A class="text-lg text-highlight hover:underline" href="https://share.rheinklang.de/player?link=64fb34a7cd3d7">"Zähne zeigen" eine Kampagne der Zahnärzteschaft</A>
              {/* <A href="">Alles viel zu teuer - Flyer der KZVN</A> */}
            </div>
          </BaseWidget>
        </div>
        {/* {articles() && (
          <ul>
            {articles().map((file: any) => (
              <li><A href={`/articles/${file}`}>Article {file}</A></li>
            ))}
          </ul>
        )} */}
      </BaseLayout>
    </main>
  );
}
