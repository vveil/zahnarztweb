import { A } from "@solidjs/router";
import ApplicationButton from "./ApplicationButton";

export default function ApplicationTeaser(props: any) {
    return (
        <div class={`${props.className} flex flex-col md:w-fit gap-2`}>
            <p>Du hast Interesse an einer <span class="font-semibold">Ausbildung</span> zur <br />
                <span class="font-semibold">Zahnmedizinischen Fachangestellen</span>?
            </p>
            <ApplicationButton text="Hier bewerben" />
        </div>
    )
}