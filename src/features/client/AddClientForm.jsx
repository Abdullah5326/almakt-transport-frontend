import { useForm } from "react-hook-form";
import FormHeader from "../../ui/FormHeader";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import FormSubmittingSection from "../../ui/FormSubmittingSection";
import FormInputBox from "../../ui/FormInputBox";
import { useAddItem } from "../../hooks/useAddItem";
import { addItem } from "../../services/apiServices";
import EmptyFieldErrorMessage from "../../ui/EmptyFieldErrorMessage";

function AddClientForm({ closeForm }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { addItem: addClient, isPending: isAddingClient } = useAddItem(
    addItem,
    "clients",
  );

  function onSubmit(data) {
    console.log(data);
    if (!data || isAddingClient) return;
    addClient(data);
    closeForm();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:p-8 p-4 w-80 lg:100">
      <FormHeader
        name="Add Client"
        closeForm={closeForm}
        description="Fill the following inputs to add new client"
      />

      <FormInputBox>
        <Label labelName="name">Client Name</Label>
        <Input
          register={register}
          placeholder="Abdullah"
          labelName="name"
          name="name"
          type="text"
        />
        <EmptyFieldErrorMessage message={errors.name?.message} />
      </FormInputBox>
      <FormInputBox>
        <Label labelName="address">Address</Label>
        <Input
          name="address"
          placeholder="Kalu Khan parra"
          register={register}
          labelName="address"
          type="text"
        />
        <EmptyFieldErrorMessage message={errors.address?.message} />
      </FormInputBox>
      <FormInputBox>
        <Label labelName="mobileNo">Mobile No</Label>
        <Input
          name="mobileNo"
          placeholder="0370 9549535"
          register={register}
          labelName="mobileNo"
          type="tel"
        />
        <EmptyFieldErrorMessage message={errors.mobileNo?.message} />
      </FormInputBox>
      <FormSubmittingSection isPending={isAddingClient} btnName="Add Client" />
    </form>
  );
}

export default AddClientForm;
