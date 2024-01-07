import EmployeePreview from "~/components/EmployeePreview";
import BaseLayout from "~/layouts/BaseLayout";

export default function Team() {
  return (

    <BaseLayout className="default-width">
      <EmployeePreview className="" name="Dr. med. dent. Jürgen Werner" jobs="Zahnarzt" path="/images/jwerner.jpg" altText="Dr. Werner" />
    </BaseLayout >

  );
}
