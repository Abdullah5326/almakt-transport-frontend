import { useForm } from "react-hook-form";
import FormTripNameSection from "./FormTripNameSection";
import FormRouteSection from "./FormRouteSection";
import FormDriverClientSection from "./FormDriverClientSection";
import FormScheduleSection from "./FormScheduleSection";
import FormPaymentDetailsSection from "./FormPaymentDetailsSection";
import FormHeader from "../../../ui/FormHeader";
import FormSubmittingSection from "../../../ui/FormSubmittingSection";

function OperationTripForm({
  defaultValues,
  operationFn,
  isPending,
  name,
  description,
  closeForm,
  submitBtnName,
}) {
  console.log(isPending);
  const today = new Date().toISOString().split("T")[0];
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues
      ? defaultValues
      : {
          name: "Trip to new",
          origin: "Lahore Multan",
          destination: "Karachi Landa Bazar",
          startDate: today,
          deadlineDate: new Date(
            `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() + 10}`,
          )
            .toISOString()
            .split("T")[0],
          tripPrice: 50000,
          receivedAmount: 25000,
        },
  });
  function onSubmit(data) {
    console.log("SUBMIT");
    if (data)
      operationFn(data, {
        onSuccess: () => {
          if (!isPending) closeForm();
        },
        onError: () => {
          console.log("Operation failed");
        },
      });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:h-160 lg:w-190 w-80 lg:p-8 p-3 h-100 overflow-auto"
    >
      <FormHeader closeForm={closeForm} name={name} description={description} />

      <FormTripNameSection register={register} errors={errors} />
      <FormRouteSection register={register} errors={errors} />
      <FormDriverClientSection
        register={register}
        errors={errors}
        control={control}
      />
      <FormScheduleSection register={register} errors={errors} />
      <FormPaymentDetailsSection
        register={register}
        errors={errors}
        control={control}
      />
      <FormSubmittingSection isPending={isPending} btnName={submitBtnName} />
    </form>
  );
}

export default OperationTripForm;
