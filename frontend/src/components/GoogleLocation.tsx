import { A } from "@solidjs/router";

export default function GoogleLocation(props: any) {
    return (
        <A href="https://www.google.com/maps/search/?api=1&query=dr+werner+zahnarzt+rautheim" class={`flex gap-2 items-center rounded h-fit w-fit p-2 ${props.className}`}>
            <svg width="18" height="21" viewBox="0 0 18 21" class={`stroke-none fill-current ${props.svgClass}`} xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9999 2.48003C13.4086 0.888734 11.2504 -0.00524904 8.99993 -0.00524902C6.74949 -0.00524901 4.59123 0.888734 2.99993 2.48003C1.40863 4.07133 0.514648 6.2296 0.514648 8.48003C0.514648 10.7305 1.40863 12.8887 2.99993 14.48L8.26993 19.76C8.36289 19.8538 8.47349 19.9282 8.59535 19.9789C8.71721 20.0297 8.84792 20.0558 8.97993 20.0558C9.11194 20.0558 9.24265 20.0297 9.36451 19.9789C9.48637 19.9282 9.59697 19.8538 9.68993 19.76L14.9999 14.43C16.5846 12.8454 17.4748 10.6961 17.4748 8.45503C17.4748 6.21398 16.5846 4.06471 14.9999 2.48003ZM13.5699 13L8.99993 17.59L4.42993 13C3.52707 12.0963 2.91241 10.9453 2.66362 9.69232C2.41484 8.43937 2.54312 7.14078 3.03223 5.96071C3.52135 4.78065 4.34935 3.77208 5.41156 3.06251C6.47377 2.35294 7.72251 1.97421 8.99993 1.97421C10.2773 1.97421 11.5261 2.35294 12.5883 3.06251C13.6505 3.77208 14.4785 4.78065 14.9676 5.96071C15.4567 7.14078 15.585 8.43937 15.3362 9.69232C15.0875 10.9453 14.4728 12.0963 13.5699 13ZM5.99993 5.41003C5.19264 6.2198 4.73932 7.3166 4.73932 8.46003C4.73932 9.60347 5.19264 10.7003 5.99993 11.51C6.59969 12.1108 7.36352 12.5211 8.19558 12.6894C9.02764 12.8578 9.89088 12.7766 10.677 12.4562C11.4631 12.1358 12.1371 11.5903 12.6144 10.8883C13.0917 10.1863 13.3511 9.3589 13.3599 8.51003C13.3644 7.94324 13.2553 7.38129 13.0388 6.85742C12.8224 6.33355 12.5032 5.85839 12.0999 5.46003C11.7036 5.05461 11.231 4.73157 10.7094 4.5095C10.1877 4.28743 9.62727 4.17071 9.06033 4.16606C8.49339 4.16141 7.93113 4.26893 7.4059 4.48242C6.88067 4.69591 6.40285 5.01116 5.99993 5.41003ZM10.6899 10.09C10.311 10.4748 9.81014 10.7159 9.27306 10.7723C8.73597 10.8286 8.19599 10.6967 7.74544 10.399C7.29488 10.1012 6.96173 9.65627 6.80294 9.14012C6.64415 8.62396 6.66958 8.06867 6.87489 7.56919C7.0802 7.06971 7.45263 6.65705 7.92851 6.40177C8.4044 6.14649 8.95418 6.06444 9.48387 6.16965C10.0135 6.27486 10.4902 6.56079 10.8324 6.97856C11.1746 7.39634 11.3611 7.92 11.3599 8.46003C11.3454 9.0773 11.0864 9.66356 10.6399 10.09H10.6899Z" />
            </svg>
            <p>Auf Google Maps ansehen</p>
        </A>
    )
}