import { useForm } from "react-hook-form";
import FormHeader from "../../ui/FormHeader";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import FormSubmittingSection from "../../ui/FormSubmittingSection";
import FormInputBox from "../../ui/FormInputBox";
import EmptyFieldErrorMessage from "../../ui/EmptyFieldErrorMessage";
import { useGetItems } from "../../hooks/useGetItems";
import { getAllItems } from "../../services/apiServices";
import SelectInput from "../../ui/SelectInput";

function AddMaintenanceAmountForm({
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
    control,
  } = useForm({ defaultValues });

  const { data: vehicles, isPending: isLoadingVehicles } = useGetItems(
    "vehicles",
    () => getAllItems("vehicles"),
  );

  function onSubmit(data) {
    if (!data || isLoading) return;

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
      className="lg:p-8 p-4 w-80 lg:w-150"
    >
      <FormHeader name={name} closeForm={closeForm} description={description} />

      {/* Amount */}
      <FormInputBox>
        <Label labelName="">Amount</Label>
        <Input
          register={register}
          placeholder="5000"
          labelName="amount"
          name="amount"
          type="number"
        />
        <EmptyFieldErrorMessage message={errors.amount?.message} />
      </FormInputBox>

      {/* Description */}
      <FormInputBox>
        <Label>Select vehicle</Label>
        {!isLoadingVehicles && (
          <SelectInput
            options={vehicles}
            optionName="flatNo"
            value={"_id"}
            placeholder={"Select Vehicle"}
            control={control}
            name={"vehicle"}
            errMsg={"Please select the vehicle"}
          />
        )}
        <EmptyFieldErrorMessage message={errors.vehicle?.message} />
      </FormInputBox>
      <FormInputBox>
        <Label labelName="">Description</Label>
        <Input
          register={register}
          placeholder="Oil change / repair details"
          labelName="description"
          name="description"
          type="text"
        />
        <EmptyFieldErrorMessage message={errors.description?.message} />
      </FormInputBox>

      {/* Submit Section */}
      <FormSubmittingSection isPending={isLoading} btnName={btnText} />
    </form>
  );
}

export default AddMaintenanceAmountForm;
