import { useParams } from "@solidjs/router";
import { Show, createResource } from "solid-js";
import HeroText from "~/components/HeroText";
import BaseLayout from "~/layouts/BaseLayout";

function serializeDate(dateString: string): string {
  const date = new Date(dateString);
  console.log(dateString);
  console.log(date);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // +1 because months are 0-indexed
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

export default function Article(props: any) {
  // const CMS_URL = import.meta.env.VITE_CMS_BASE_URL;
  const CMS_URL = "https://zahncms.niklas.ai";
  const params = useParams();
  const [article] = createResource(fetchArticleContent);

  async function fetchArticleContent() {
    console.log("paramid", params.id);
    const response = await fetch(`${CMS_URL}/api/articles/${params.id}`);
    const data = await response.json();
    console.log("data", data);
    return data;
  }

  return (
    <BaseLayout>
      <div>
        <Show when={article()}>
          <div class="">
            <Show
              when={article().releaseDate !== undefined}
              fallback={<p class="italic">Dr. Jürgen Werner</p>}
            >
              <p class="italic">
                {serializeDate(article().releaseDate)}, Dr. Jürgen Werner
              </p>
            </Show>
            <HeroText text={`${article().title}`} className="mb-12" />
          </div>
          <div class="flex gap-20">
            <p class="max-w-[800px] flex-1 text-justify text-2xl">
              {article().content}
            </p>
            <div class="flex w-[500px] flex-col items-center gap-2">
              <img
                src={`${CMS_URL}${article().url}`}
                class="h-fit rounded"
                alt={`${article().altImageText}`}
              />
              <p>{article().imageCaption}</p>
            </div>
          </div>
        </Show>
      </div>
    </BaseLayout>
  );
}
