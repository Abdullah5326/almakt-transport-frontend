import { useForm } from "react-hook-form";
import FormHeader from "../../ui/FormHeader";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import FormSubmittingSection from "../../ui/FormSubmittingSection";
import FormInputBox from "../../ui/FormInputBox";
import EmptyFieldErrorMessage from "../../ui/EmptyFieldErrorMessage";

function AddVehicleForm({
  closeForm,
  defaultValues,
  btnText,
  operationFn,
  isLoading,
  name,
  description,
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: defaultValues || {} });

  function onSubmit(data) {
    if (!data) return;
    operationFn(data, {
      onSuccess: () => {
        if (!isLoading) closeForm();
      },
      onError: () => {
        console.log("Operation failed");
      },
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:p-8 p-4 w-80 lg:w-150 lg:100"
    >
      <FormHeader name={name} closeForm={closeForm} description={description} />

      <FormInputBox>
        <Label labelName="">Vehicle Name</Label>
        <Input
          register={register}
          placeholder="Suzuki"
          labelName="name"
          name="name"
          type="text"
        />
        <EmptyFieldErrorMessage message={errors.name?.message} />
      </FormInputBox>
      <FormInputBox>
        <Label labelName="">Flat No</Label>
        <Input
          name="flatNo"
          placeholder="C-404"
          register={register}
          labelName="flatNo"
          type="text"
        />
        <EmptyFieldErrorMessage message={errors.flatNo?.message} />
      </FormInputBox>
      <FormInputBox>
        <Label labelName="">Vehicle Renewal Date</Label>
        <Input
          name="vehicleRenewalDate"
          placeholder="2027-04-26"
          register={register}
          labelName="vehicleRenewalDate"
          type="date"
        />
        <EmptyFieldErrorMessage message={errors.vehicleRenewalDate?.message} />
      </FormInputBox>
      <FormSubmittingSection isPending={isLoading} btnName={btnText} />
    </form>
  );
}

export default AddVehicleForm;
