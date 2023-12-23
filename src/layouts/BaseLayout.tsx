import Footer from "~/components/Footer";
import Header from "../components/Header";

export default function BaseLayout(props: any) {
    return (
        <div class={`${props.className} flex flex-col justify-between w-screen md:h-screen text-dark-blue`}>
            <div>
                <Header className="mx-4 md:mx-16 md:mb-12" />
                <div class="max-w-[1500px] mx-auto">
                    {props.children}
                </div>
            </div>
            <Footer className="mt-8 pb-8" />
        </div>
    );
}
