import Input from "../../../ui/Input";
import Label from "../../../ui/Label";
import SecondaryHeading from "../../../ui/SecondaryHeading";
import FormInputBox from "../../../ui/FormInputBox";
import EmptyFieldErrorMessage from "../../../ui/EmptyFieldErrorMessage";
import { HiOutlineLocationMarker } from "react-icons/hi";

function FormRouteSection({ register, errors }) {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <SecondaryHeading>Route Details</SecondaryHeading>
      <div className="flex justify-between gap-6">
        <FormInputBox>
          <Label labelName={"Location (Origin)"}>
            <HiOutlineLocationMarker className="text-orange-400" />
          </Label>
          <Input
            placeholder="Karachi Warehouse"
            type="text"
            name="origin"
            register={register}
            labelName="origin"
          />
          {errors?.origin && (
            <EmptyFieldErrorMessage message={errors.origin.message} />
          )}
        </FormInputBox>
        <FormInputBox>
          <Label labelName={"Destination"}>
            <HiOutlineLocationMarker className="text-green-400" />
          </Label>
          <Input
            placeholder="Lahore City Center"
            type="text"
            name="destination"
            register={register}
            labelName="destination"
          />
          {errors?.destination && (
            <EmptyFieldErrorMessage message={errors.destination.message} />
          )}
        </FormInputBox>
      </div>
    </div>
  );
}

export default FormRouteSection;
