import { useForm } from "react-hook-form";
import FormHeader from "../../ui/FormHeader";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import FormSubmittingSection from "../../ui/FormSubmittingSection";
import FormInputBox from "../../ui/FormInputBox";
import EmptyFieldErrorMessage from "../../ui/EmptyFieldErrorMessage";
import SelectInput from "../../ui/SelectInput";
import { useGetItems } from "../../hooks/useGetItems";
import { getAllItems, updateItem } from "../../services/apiServices";
import { useUpdateItem } from "../../hooks/useUpdateItem";

function AddClientForm({
  closeForm,
  defaultValues,
  btnText,
  isLoading,
  name,
  description,
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues });
  const { updateItem: updateDriver, isPending: isUpdatingDriver } =
    useUpdateItem("drivers", updateItem, "drivers");
  function onSubmit(data) {
    const creditAmountData = {
      _id: defaultValues._id,
      creditAmount: data.creditAmount,
    };
    if (!data || isLoading) return;
    updateDriver(creditAmountData, {
      onSuccess: () => {
        if (!isLoading) closeForm();
      },
      onError: () => {
        console.log("Operation failed");
      },
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:p-8 p-4 w-100">
      <FormHeader name={name} closeForm={closeForm} description={description} />
      <FormInputBox>
        <Label labelName="">Credit Amount</Label>
        <Input
          name="creditAmount"
          placeholder="4000"
          register={register}
          labelName="amount"
          type="number"
        />
        <EmptyFieldErrorMessage message={errors.creditAmount?.message} />
      </FormInputBox>

      <FormSubmittingSection isPending={isUpdatingDriver} btnName={btnText} />
    </form>
  );
}

export default AddClientForm;
