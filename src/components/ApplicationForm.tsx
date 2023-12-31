import { Component, createEffect, createSignal } from "solid-js";
import { A } from "@solidjs/router";

export default function ApplicationForm(props: any) {
    const [name, setName] = createSignal("");
    const [surname, setSurname] = createSignal("");
    const [address, setAddress] = createSignal("");
    const [email, setEmail] = createSignal("");
    const [anschreiben, setAnschreiben] = createSignal("");

    const handleSubmit = (event: Event): void => {
        event.preventDefault();
        const dataToSubmit = {
            name: name(),
            surname: surname(),
            address: address(),
            email: email(),
            anschreiben: anschreiben(),
        };

        // should be sending data via POST request...
        console.log(`submitting ${JSON.stringify(dataToSubmit)}`);
    };

    return (
        <div class={`${props.className}`}>
            <form onSubmit={handleSubmit} class="flex flex-col gap-4">
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
                    <label for="address">Adresse</label>
                    <input class="p-1"
                        type="text"
                        id="address"
                        value={address()}
                        onChange={(e) => setAddress(e.currentTarget.value)}
                    />
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
                <div class="form-control flex flex-col gap-2">
                    <label for="anschreiben">Anschreiben</label>
                    <textarea class="p-1"
                        rows={7}
                        id="anschreiben"
                        value={anschreiben()}
                        onChange={(e) => setAnschreiben(e.currentTarget.value)}
                    />
                </div>
                <input class="form-submit p-2 bg-highlight rounded text-light-teal" type="submit" value="Bewerbung abschicken" />
            </form>
        </div>
    );
};
