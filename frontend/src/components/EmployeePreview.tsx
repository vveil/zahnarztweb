export default function EmployeePreview(props: any) {
  return (
    <div class={`max-w-screen order-1 flex flex-col md:max-w-[18.75rem]`}>
      <img
        class="max-w-screen mb-3 max-h-screen sm:h-auto md:max-h-[18.75rem] md:w-auto md:max-w-[18.75rem]"
        src={`${props.imgSrc}`}
        alt={`${props.altText}`}
      />
      <p class="mx-5 mb-1 text-2xl font-semibold sm:text-3xl md:mx-0 lg:text-2xl">
        {props.name}
      </p>
      <p class="mx-5 text-xl sm:text-2xl md:mx-0 lg:text-xl">{props.job}</p>
    </div>
  );
}
