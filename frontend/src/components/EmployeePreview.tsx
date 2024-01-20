export default function EmployeePreview(props: any) {
    return (
        <div class={`flex flex-col max-w-[18.75rem]`}>
            <img class="max-h-[18.75rem] max-w-[18.75rem] h-auto w-auto mb-3" src={`${props.imgSrc}`} alt={`${props.altText}`} />
            <p class="text-2xl font-semibold mb-1">{props.name}</p>
            <p class="text-xl">{props.job}</p>
        </div>
    )
}