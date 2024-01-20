export default function EmployeePreview(props: any) {
    return (
        <div class={`order-1 flex flex-col max-w-screen sm:max-w-[18.75rem]`}>
            <img class="max-h-screen max-w-screen sm:max-h-[18.75rem] sm:max-w-[18.75rem] sm:h-auto sm:w-auto mb-3" src={`${props.imgSrc}`} alt={`${props.altText}`} />
            <p class="mx-5 sm:mx-0 text-2xl font-semibold mb-1">{props.name}</p>
            <p class="mx-5 sm:mx-0 text-xl">{props.job}</p>
        </div>
    )
}