export default function BaseWidget(props: any) {
    return (
        <div class={`flex flex-col gap-5 rounded p-7 pt-6 bg-dark-teal ${props.className} `}>
            <h2 class="text-2xl font-bold">{props.title}</h2>
            <div class={`text-xl ${props.childrenDivClasses}`}>
                {props.children}
            </div>
        </div>
    )
}