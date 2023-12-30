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
            <form onSubmit={handleSubmit}>
                <div class="form-control">
                    <label for="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name()}
                        onChange={(e) => setName(e.currentTarget.value)}
                    />
                </div>
                <div class="form-control">
                    <label for="surname">Vorname:</label>
                    <input
                        type="text"
                        id="surname"
                        value={surname()}
                        onChange={(e) => setSurname(e.currentTarget.value)}
                    />
                </div>
                <div class="form-control">
                    <label for="address">Adresse:</label>
                    <input
                        type="text"
                        id="address"
                        value={address()}
                        onChange={(e) => setAddress(e.currentTarget.value)}
                    />
                </div>
                <div class="form-control">
                    <label for="email">E-Mail</label>
                    <input
                        type="text"
                        id="email"
                        value={email()}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                </div>
                <div class="form-control">
                    <label for="anschreiben">Anschreiben:</label>
                    <input
                        type="text"
                        id="anschreiben"
                        value={anschreiben()}
                        onChange={(e) => setAnschreiben(e.currentTarget.value)}
                    />
                </div>
                <input class="form-submit" type="submit" value="Bewerbung abschicken" />
            </form>
        </div>
    );
};
