import { useNavigate, useParams } from "@solidjs/router";
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
  const navigate = useNavigate();

  async function fetchArticleContent() {
    console.log("paramid", params.id);
    const response = await fetch(`${CMS_URL}/api/articles/${params.id}`);
    const data = await response.json();
    console.log("data", data);
    if ("errors" in data) {
      navigate("/404");
    }
    return data;
  }

  return (
    <BaseLayout>
      <div class="mx-5 sm:mx-0">
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
            <HeroText text={`${article().title}`} className="mb-10 sm:mb-12" />
          </div>
          <div class="flex flex-col-reverse gap-10 sm:flex-row sm:gap-20">
            <p class="max-w-[800px] flex-1 text-left text-lg sm:text-xl">
              {article().content}
            </p>
            <div class="max-w-screen flex h-auto w-fit flex-col items-center gap-2 sm:w-[500px]">
              <img
                src={`${CMS_URL}${article().url}`}
                class="rounded"
                alt={`${article().altImageText}`}
              />
              <p class="">{article().imageCaption}</p>
            </div>
          </div>
        </Show>
      </div>
    </BaseLayout>
  );
}
