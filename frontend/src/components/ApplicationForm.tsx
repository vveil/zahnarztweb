import { Component, For, createEffect, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import axios from "axios";

export default function ApplicationForm(props: any) {
    const [selected, setSelected] = createSignal("AZUBI ZMFA");
    const [name, setName] = createSignal("");
    const [surname, setSurname] = createSignal("");
    const [email, setEmail] = createSignal("");
    const [cv, setCv] = createSignal<File | null>(null);
    const [transcript, setTranscript] = createSignal<File | null>(null);

    const handleSubmit = async (event: Event) => {
        event.preventDefault();
        
        console.log("inside handleSubmit");
        // const data = new FormData();
        const dataToSubmit = new FormData();
        dataToSubmit.append('stelle', selected());
        dataToSubmit.append('name', name());
        dataToSubmit.append('surname', surname());
        dataToSubmit.append('email', email());

        if (cv()) {
            dataToSubmit.append('cv', cv() as Blob);
        }
        if (transcript()) {
            dataToSubmit.append('transcript', transcript() as Blob);
        }

        // should be sending data via POST request...
        // console.log(`submitting ${JSON.stringify(dataToSubmit)}`);
        try {
            // Make a POST request to the backend
            console.log("before post");
            const response = await axios.post("http://localhost:3001/api/application", dataToSubmit);
            console.log("after post");
            // Log the server response
            console.log(response.data);
        } catch (error) {
            console.error("Error uploading files:", error);
        }
    };

    const handleFileChange = (event: Event, setFile: (file: File | null) => void) => {
        const selectedFile = (event.target as HTMLInputElement).files?.[0];
        setFile(selectedFile || null);
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
                    <div class="form-control flex flex-col gap-2">
                        <label for="cv">Lebenslauf</label>
                        <input class="p-1"
                            type="file"
                            id="cv"
                            onChange={(e) => handleFileChange(e, setCv)}
                        />
                    </div>
                    <div class="form-control flex flex-col gap-2">
                        <label for="transcript">Zeugnis</label>
                        <input class="p-1"
                            type="file"
                            id="transcript"
                            onChange={(e) => handleFileChange(e, setTranscript)}
                        />
                    </div>
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
