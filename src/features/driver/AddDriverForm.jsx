import { useForm } from "react-hook-form";
import FormHeader from "../../ui/FormHeader";
import FormInputBox from "../../ui/FormInputBox";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import EmptyFieldErrorMessage from "../../ui/EmptyFieldErrorMessage";
import FormSubmittingSection from "../../ui/FormSubmittingSection";
import SelectInput from "../../ui/SelectInput";
import { useGetItems } from "../../hooks/useGetItems";
import { getAllItems } from "../../services/apiServices";

function AddDriverForm({
  closeForm,
  defaultValues,
  operationFn,
  isPending,
  btnText,
  name,
  description,
}) {
  console.log(defaultValues);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues || {
      name: "Abdullah",
      basicSalary: 4023,
      idCardExpiryDate: "2026-04-20",
      mobileNo: "03163942308",
    },
  });
  const { data: vehicles, isPending: isLoadingDrivers } = useGetItems(
    "vehicles",
    () => getAllItems("vehicles"),
  );
  function onSubmit(data) {
    if (!data || isPending) return;
    console.log(data);

    operationFn(data);
    closeForm();
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:p-8 lg:w-180 h-90  md:h-160 w-80 p-4 text-xs md:text-[15px] animate-showForm"
    >
      <FormHeader name={name} description={description} closeForm={closeForm} />

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
      <FormInputBox>
        <Label>Select Vehicle</Label>
        {!isLoadingDrivers && (
          <SelectInput
            control={control}
            errMsg="Please select any vehicle for the driver"
            placeholder="Select Vehicle"
            options={vehicles}
            name="vehicle"
            optionName="name"
            value="_id"
          />
        )}
        {errors?.vehicle && (
          <EmptyFieldErrorMessage message={errors.vehicle.message} />
        )}
      </FormInputBox>
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
          {/* <Input
            type="email"
            register={register}
            placeholder="abdullah@example.com"
            labelName="email"
            name="email"
          /> */}
          <input
            type="email"
            register={"email"}
            placeholder="abdullah@example.com"
            name="email"
            className="border-stone-200 w-full bg-white h-10 px-3 rounded-lg placeholder:text-sm outline-orange-400 text-stone-900"
          />
          <EmptyFieldErrorMessage message={errors.email?.message} />
        </FormInputBox>
      </div>
      <div className="flex md:gap-12 flex-col md:flex-row">
        <FormInputBox>
          <Label labelName="Id Card Expiry Date"></Label>

          <Input
            type="date"
            labelName="Id card expiry date"
            name="idCardExpiryDate"
            register={register}
          />
          <EmptyFieldErrorMessage message={errors.idCardExpiryDate?.message} />
        </FormInputBox>
        <FormInputBox>
          <Label>Status</Label>
          <SelectInput
            name="status"
            options={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
              { label: "On Leave", value: "onLeave" },
            ]}
            optionName="label"
            value="value"
            placeholder="select status"
            errMsg="The status of the driver is required"
            control={control}
          />
          <EmptyFieldErrorMessage message={errors.idCardExpiryDate?.message} />
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

      <FormSubmittingSection isPending={false} btnName={btnText} />
    </form>
  );
}

export default AddDriverForm;
