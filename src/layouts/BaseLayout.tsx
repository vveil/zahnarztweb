import Footer from "~/components/Footer";
import Header from "../components/Header";

export default function BaseLayout(props: any) {
    return (
        <div class={`${props.className} flex flex-col justify-between w-screen h-full flex-1 text-dark-blue`}>
            <div class="max-w-[1500px] mx-auto h-full flex-1">
                {props.children}
            </div>
        </div>
    );
}
