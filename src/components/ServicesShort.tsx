import { createSignal, For } from 'solid-js';
import { A } from "@solidjs/router";

const [services] = createSignal(
    [{
        title: "Zahnerhaltung",
        url: "zahnerhaltung",
        description: "Das Gebiet der Zahnerhaltung, konservierende Zahnheilkunde genannt, erstreckt sich über verschiedene Bereiche. In der Füllungstherapie werden Zahndefekte, die durch Karies oder Abrasionen entstanden sind wiederhergestellt. Breitet sich eine kariöse Läsion weiter in die Tiefe aus, so treten oft Beschwerden auf, die eine Wurzelbehandlung zur Folge haben."
    },
    {
        title: "Zahnersatz",
        url: "zahnersatz",
        description: "Das Gebiet des Zahnersatzes ist mittlerweile sehr umfangreich. Grundsätzlich unterscheidet man zwischen festsitzendem Zahnersatz, den beispielsweise Kronen und Brücken darstellen sowie herausnehmbaren Zahnersatz."
    },
    {
        title: "Implantate",
        url: "implantate",
        description: "Implantate gehören schon seit langem zum festen Bestandteil der modernen Zahnheilkunde. Fehlen ein oder mehrere natürliche Zähne, so kann dieser Defekt ohne Präparation und Substanzverlust der benachbarten Zähne wiederhergestellt werden. Mittels Titanimplantaten wird eine künstliche Wurzel zur Aufnahme des Zahnersatzes geschaffen. Implantate bieten ein Höchstmaß an Ästhetik, Funktionalität und Hygienefähigkeit. Gönnen auch Sie sich dieses Stück neue Lebensqualität."
    }])

function ServicesList(props: any) {

    return (
        <div class={`${props.className} flex flex-col`}>
            <h2 class='text-3xl font-special'>Unsere Leistungen</h2>
            <ul>
                <For each={services()}>{(service, i) =>
                    <A href={`/${service.url}`}>
                        <li class='mt-2 pb-2 border-b-2'>
                            <h3 class='text-xl'>{service.title}</h3>
                            <p>{service.description}</p>
                        </li>
                    </A>
                }</For>
            </ul>
        </div>
    );
}

export default ServicesList;
