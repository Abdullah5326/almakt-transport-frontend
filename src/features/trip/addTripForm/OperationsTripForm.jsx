import { useForm } from "react-hook-form";
import FormTripNameSection from "./FormTripNameSection";
import FormRouteSection from "./FormRouteSection";
import FormDriverClientSection from "./FormDriverClientSection";
import FormScheduleSection from "./FormScheduleSection";
import FormPaymentDetailsSection from "./FormPaymentDetailsSection";
import FormHeader from "../../../ui/FormHeader";
import Overlay from "../../../ui/Overlay";
import FormSubmittingSection from "../../../ui/FormSubmittingSection";
import OperationsForm from "../../../ui/OperationsForm";
import { createPortal } from "react-dom";

function OperationTripForm({
  defaultValues,
  operationFn,
  isPending,
  name,
  description,
  closeForm,
  submitBtnName,
}) {
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
          name: "Trip to Karachi",
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
    console.log(data);
    if (data && !isPending) operationFn(data);
    console.log(data);
    if (!isPending) closeForm();
  }

  function onError() {
    console.log(errors);
  }
  return createPortal(
    <div className="z-100" onClick={(e) => e.stopPropagation()}>
      <Overlay closeForm={closeForm} />
      <OperationsForm
        handleSubmit={handleSubmit}
        onError={onError}
        onSubmit={onSubmit}
      >
        <FormHeader
          closeForm={closeForm}
          name={name}
          description={description}
        />

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
      </OperationsForm>
    </div>,
    document.body,
  );
}

export default OperationTripForm;
