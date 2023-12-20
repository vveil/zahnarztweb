export default function ApplicationTeaser(props: any) {
    return (
        <div class={`${props.className} flex flex-col md:w-fit gap-2`}>
            <p>Du hast Interesse an einer <span class="font-semibold">Ausbildung</span> zur <br />
                <span class="font-semibold">Zahnmedizinischen Fachangestellen</span>?
            </p>
            <button class="w-auto bg-highlight text-light-teal font-semibold py-2 rounded">Hier bewerben</button>
        </div>
    )
}