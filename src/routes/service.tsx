import ServicesShort from "~/components/ServicesShort";
import BaseLayout from "~/layouts/BaseLayout";

export default function Service() {
  return (
    <main>
      <BaseLayout className="">
        <div class="mx-8 lg:mx-32">
          <ServicesShort className="" />
        </div>
      </BaseLayout>
    </main>
  );
}
