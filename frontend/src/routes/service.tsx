import ServicesShort from "~/components/ServicesShort";
import BaseLayout from "~/layouts/BaseLayout";

export default function Service() {
  return (
    <main>
      <BaseLayout className="">
        <div class="default-width">
          <ServicesShort className="" />
        </div>
      </BaseLayout>
    </main>
  );
}
