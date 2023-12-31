import { Component, For, createEffect, createSignal } from "solid-js";
import { A } from "@solidjs/router";

export default function ApplicationForm(props: any) {
    const [selected, setSelected] = createSignal("AZUBI ZMFA");
    const [name, setName] = createSignal("");
    const [surname, setSurname] = createSignal("");
    const [email, setEmail] = createSignal("");

    const handleSubmit = (event: Event): void => {
        event.preventDefault();
        const dataToSubmit = {
            stelle: selected(),
            name: name(),
            surname: surname(),
            email: email(),
        };

        // should be sending data via POST request...
        console.log(`submitting ${JSON.stringify(dataToSubmit)}`);
    };

    const options = {
        azZMFA: "AZUBI ZMFA",
        azPraxisWechsler: "AZUBI Praxiswechsler",
        ZMFA: "ZMFA",
    }

    return (
        <div class={`${props.className}`}>
            <form onSubmit={handleSubmit} class="flex flex-col gap-4">
                {/* TODO dropdown für Art der Stelle (siehe Obsidian) */}
                <div class="form-control flex flex-col gap-2 flex-1">
                    <label for="art">Art der Stelle</label>
                    <select class="p-1" id="art" value={selected()} onInput={e => setSelected(e.currentTarget.value)}>
                        <For each={Object.values(options)}>{
                            opt => <option value={opt}>{opt}</option>
                        }</For>
                    </select>
                </div>
                <div class="flex gap-4">
                    <div class="form-control flex flex-col gap-2 flex-1">
                        <label for="surname">Vorname</label>
                        <input class="p-1"
                            type="text"
                            id="surname"
                            value={surname()}
                            onChange={(e) => setSurname(e.currentTarget.value)}
                        />
                    </div>
                    <div class="form-control flex flex-col gap-2 flex-1">
                        <label class="" for="name">Name</label>
                        <input class="p-1"
                            type="text"
                            id="name"
                            value={name()}
                            onChange={(e) => setName(e.currentTarget.value)}
                        />
                    </div>
                </div>
                <div class="form-control flex flex-col gap-2">
                    <label for="email">E-Mail</label>
                    <input class="p-1"
                        type="text"
                        id="email"
                        value={email()}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                </div>

                <input class="form-submit p-2 bg-highlight rounded text-light-teal font-semibold" type="submit" value="Bewerbung abschicken" />
            </form >
        </div >
    );
};
