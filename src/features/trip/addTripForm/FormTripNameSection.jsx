import Input from "../../../ui/Input";
import Label from "../../../ui/Label";
import FormInputBox from "../../../ui/FormInputBox";
import EmptyFieldErrorMessage from "../../../ui/EmptyFieldErrorMessage";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";

function FormTripNameSection({ register, errors }) {
  return (
    <FormInputBox>
      <Label labelName={"Trip Name"}>
        <span>
          <HiOutlineDocumentChartBar className="text-orange-400" />
        </span>
      </Label>
      <Input
        placeholder="Trip to Lahore"
        type="text"
        name="name"
        register={register}
        labelName="trip name"
      />
      {errors?.name && <EmptyFieldErrorMessage message={errors.name.message} />}
    </FormInputBox>
  );
}

export default FormTripNameSection;
