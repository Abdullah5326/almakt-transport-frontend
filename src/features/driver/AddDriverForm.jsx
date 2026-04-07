import { useForm } from "react-hook-form";
import FormHeader from "../../ui/FormHeader";
import FormInputBox from "../../ui/FormInputBox";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import EmptyFieldErrorMessage from "../../ui/EmptyFieldErrorMessage";
import FormSubmittingSection from "../../ui/FormSubmittingSection";
import DatePicker from "../../ui/DatePicker";
import { useAddItem } from "../../hooks/useAddItem";
import { addItem } from "../../services/apiServices";

function AddDriverForm({ closeForm }) {
  const { addItem: addDriver, isPending: isAddingDriver } = useAddItem(
    addItem,
    "drivers",
  );
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Abdullah",
      // idCardExpiryDate: "2026-04-04",
      vehicleFlatNo: "LHR 400",
      vehicleName: "Honda",
      email: "abdul@example.com",
      basicSalary: 40000,
      mobileNo: "0314343434",
    },
  });

  function onSubmit(data) {
    if (!data || isAddingDriver) return;
    const driver = {
      ...data,
      idCardExpiryDate: data.idCardExpiryDate?.format("YYYY-MM-DD"),
      vehicleRenewalDate: data.vehicleRenewalDate?.format("YYYY-MM-DD"),
    };

    addDriver(driver);
    closeForm();
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:p-8 lg:w-180 h-90 md:160 w-80 p-4 text-xs animate-showForm"
    >
      <FormHeader
        name="Add New Driver"
        description="Fill the following credentials to add new driver in your business."
        closeForm={closeForm}
      />

      <FormInputBox>
        <Label labelName="Name"></Label>
        <Input
          type="text"
          register={register}
          placeholder="Zeeshan Khan"
          labelName="name"
          name="name"
        />
        <EmptyFieldErrorMessage message={errors.name?.message} />
      </FormInputBox>
      <div className="flex md:gap-12 flex-col md:flex-row">
        <FormInputBox>
          <Label labelName="Vehicle Name"></Label>
          <Input
            type="text"
            register={register}
            placeholder="Honda"
            labelName="Vehicle Name"
            name="vehicleName"
          />
          <EmptyFieldErrorMessage message={errors.vehicleName?.message} />
        </FormInputBox>
        <FormInputBox>
          <Label labelName="Vehicle Flat No"></Label>
          <Input
            type="text"
            register={register}
            placeholder="LHR 400"
            labelName="Vehicle Flat No"
            name="vehicleFlatNo"
          />
          <EmptyFieldErrorMessage message={errors.vehicleFlatNo?.message} />
        </FormInputBox>
      </div>
      <div className="flex md:gap-12 flex-col md:flex-row">
        <FormInputBox>
          <Label labelName="Mobile No"></Label>
          <Input
            type="tel"
            register={register}
            placeholder="03709549535"
            labelName="Mobile No"
            name="mobileNo"
          />
          <EmptyFieldErrorMessage message={errors.mobileNo?.message} />
        </FormInputBox>
        <FormInputBox>
          <Label labelName="Email"></Label>
          <Input
            type="email"
            register={register}
            placeholder="abdullah@example.com"
            labelName="email"
            name="email"
          />
          <EmptyFieldErrorMessage message={errors.email?.message} />
        </FormInputBox>
      </div>
      <div lassName="flex md:gap-12 flex-col md:flex-row">
        <FormInputBox>
          <Label labelName="Id Card Expiry Date"></Label>
          <DatePicker
            control={control}
            errMsg={errors.idCardExpiryDate?.message}
            name="idCardExpiryDate"
          />
          <EmptyFieldErrorMessage message={errors.idCardExpiryDate?.message} />
        </FormInputBox>
        <FormInputBox>
          <Label labelName="Vehicle Renewal Date"></Label>
          <DatePicker
            control={control}
            errMsg={errors.vehicleRenewalDate?.message}
            name="vehicleRenewalDate"
          />

          <EmptyFieldErrorMessage
            message={errors.vehicleRenewalDate?.message}
          />
        </FormInputBox>
      </div>
      <FormInputBox>
        <Label labelName="Basic Salary"></Label>
        <Input
          type="number"
          register={register}
          placeholder="40000"
          labelName="Basic Salary"
          name="basicSalary"
        />
        <EmptyFieldErrorMessage message={errors.basicSalary?.message} />
      </FormInputBox>

      <FormSubmittingSection isPending={false} btnName="Add Driver" />
    </form>
  );
}

export default AddDriverForm;
