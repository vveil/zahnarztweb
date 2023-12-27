
export default function BaseLayout(props: any) {
    return (
        <div class={`${props.className} flex flex-col w-screen h-full flex-1 text-dark-blue`}>
            <div class="h-full flex-1">
                {props.children}
            </div>
        </div>
    );
}
