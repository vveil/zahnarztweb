import { A } from "@solidjs/router";
import { createSignal, onCleanup } from "solid-js";

export default function ExpandWidget(props: any) {
    const [isHovered, setIsHovered] = createSignal(false);
    let hoverTimeout: ReturnType<typeof setTimeout>;

    const handleMouseEnter = () => {
        hoverTimeout = setTimeout(() => setIsHovered(true), 300);
    };

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout);
        setIsHovered(false);
    };

    onCleanup(() => {
        clearTimeout(hoverTimeout);
    });
    if (!props.bgColor) {
        props.bgColor = "bg-dark-teal"
    }
    const url = `/${props.title.toLowerCase()}`
    return (
        <div class={`w-full flex flex-grow justify-between gap-5 rounded p-5 sm:p-7 pt-6 ${props.bgColor} ${props.className}`}
        >
            <div class="flex-grow flex-col">
                <h2 class="text-2xl font-bold mb-4">{props.title}</h2>
                <div class={`text-xl ${props.childrenDivClasses}`}>
                    {props.children}
                </div>
            </div>
            {/*            <div class="flex items-center flex-shrink-0"><img src="icons/arrow-right.svg" alt="Right arrow" class="w-4 h-4" /></div> */}
        </div>
    )


}
{/*
            <A class={``} href={`/${props.title.toLowerCase()}`}>
            </A>
            ${isHovered() ? 'bg-darker-teal' : ''} transition-colors duration-250`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
*/}
