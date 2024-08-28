import { A } from "@solidjs/router";

export default function ExpandWidget(props: any) {
    if (!props.bgColor) {
        props.bgColor = "bg-dark-teal"
    }
    return (
        <div class={`flex justify-between gap-5 rounded p-5 sm:p-7 pt-6 ${props.bgColor} ${props.className} hover:bg-darker-teal transition-colors duration-200 delay-300
               hover:delay-500`}>
            <div class="flex-col gap-4">
                <div class={`flex align-middle rounded w-2/3`}>
                    <h2 class="text-2xl font-bold">{props.title}</h2>
                </div>
                <div class={`text-xl ${props.childrenDivClasses}`}>
                    {props.children}
                </div>
            </div>
            <div class="flex items-center">→</div>
        </div>
    )


}
{/*
            <A class={``} href={`/${props.title.toLowerCase()}`}>
            </A>
*/}
