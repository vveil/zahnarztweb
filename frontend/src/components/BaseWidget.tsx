export default function BaseWidget(props: any) {
    if (!props.bgColor) {
        props.bgColor = "bg-dark-teal"
    }
    return (
        <div class={`flex flex-col gap-5 rounded p-5 sm:p-7 pt-6 ${props.bgColor} ${props.className} `}>
            <h2 class="text-2xl font-bold">{props.title}</h2>
            <div class={`text-xl ${props.childrenDivClasses}`}>
                {props.children}
            </div>
        </div>
    )
}