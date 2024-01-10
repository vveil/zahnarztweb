export default function SiteHeading(props: any) {
    return (
        <h2 class={`${props.className} text-3xl font-special`}>{props.text}</h2>
    );
}