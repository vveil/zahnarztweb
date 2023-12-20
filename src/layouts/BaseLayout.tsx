import Header from "../components/Header";

export default function BaseLayout(props: any) {
    return (
        <div class={`${props.className} w-screen md:h-screen text-dark-blue`}>
            <Header className="mx-4 md:mx-16 md:mb-12" />
            <div class="max-w-[1500px] mx-auto">
                {props.children}
            </div>
        </div>
    );
}
