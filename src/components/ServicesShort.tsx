import { createResource, For } from 'solid-js';
import { A } from 'solid-start';
// import { createAsync, cache } from "@solidjs/router";

// type Student = { name: string; house: string; }
type Service = { title: string; url: string; description: string; }

function ServicesList(props: any) {

    // const [students] = createResource(async () => {
    //     const response = await fetch("https://hogwarts.deno.dev/students");
    //     return await response.json() as Student[];
    // });

    const [services] = createResource(async () => {
        const response = await fetch('http://localhost:3000/data/services.json');
        return await response.json() as Service[];
    }
    );

    return (
        <div class={`${props.className}`}>
            <h2 class='text-3xl font-special'>Unsere Leistungen</h2>
            <ul>
                {/* <For each={services()}> */}
                {/* {(service) => ( */}
                {services() && services()!.map((service) => (
                    <A href={`/${service.url}`}>
                        <li class='mt-2 pb-2 border-b-2'>
                            <h3 class='text-xl'>{service.title}</h3>
                            <p>{service.description}</p>
                        </li>
                    </A>
                ))}
                {/* </For> */}
            </ul>
        </div>
    );
}

export default ServicesList;
