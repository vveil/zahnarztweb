import { A } from "solid-start";

export default function ApplicationForm(props: any) {
    return (
        <div class={`${props.className} flex flex-col md:w-fit gap-2`}>
            <input type="file" required>Dein Lebenslauf</input>
            <input type="text" required>Vor- und Nachname</input>
            <input type="text" required>Anschreiben</input>
        </div>
    )
}