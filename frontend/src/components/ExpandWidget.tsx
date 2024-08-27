import { A } from "@solidjs/router";

export default function ExpandWidget(props: any) {
    if (!props.bgColor) {
        props.bgColor = "bg-dark-teal"
    }
    return (
        <div class={`flex flex-col gap-5 rounded p-5 sm:p-7 pt-6 ${props.bgColor} ${props.className} hover:bg-darker-teal`}>

            <A class={``} href={`/${props.title.toLowerCase()}`}>
                <div class={`flex justify-between align-middle rounded`}>
                    <h2 class="text-2xl font-bold">{props.title}</h2>
                    <div>→</div>
                </div>
                <div class={`text-xl ${props.childrenDivClasses}`}>
                    {props.children}
                </div>
            </A>
        </div>
    )
}

