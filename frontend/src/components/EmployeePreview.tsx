export default function EmployeePreview(props: any) {
    return (
        <div class={`${props.className} flex flex-col justify-center md:flex-row md:items-center md:justify-around gap-2`}>
            <div class="flex flex-col items-center">
                <p class="italic">{props.jobs}</p>
                <p class="text-xl font-semibold">{props.name}</p>
            </div>
            <img class="h-96" src={`${props.path}`} alt={`${props.altText}`} />
        </div>
    )
}