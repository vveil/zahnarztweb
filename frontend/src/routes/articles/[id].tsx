// import { useParams } from "@solidjs/router";
// import { Show, createResource } from "solid-js";

// export default function Article(props: any) {

//     const params = useParams();
//     const [articleContent] = createResource(fetchArticleContent);

//     async function fetchArticleContent() {
//         const response = await fetch(`/articles/${params.id}.txt`);
//         const content = await response.text();
//         console.log("content", content)
//         return content;
//     }

//     const articleImg = `/articles/images/${params.id}.jpg`;

//     return (
//         <div>
//             <Show when={articleImg}>
//                 <img src={articleImg} class="w-fit h-auto" />
//             </Show>
//             <div>
//                 {articleContent()}
//             </div>
//         </div>
//     )


// }