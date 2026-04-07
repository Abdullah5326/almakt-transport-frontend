import Label from "../../../ui/Label";
import SecondaryHeading from "../../../ui/SecondaryHeading";
import FormInputBox from "../../../ui/FormInputBox";
import EmptyFieldErrorMessage from "../../../ui/EmptyFieldErrorMessage";
import { HiOutlineUser, HiOutlineUsers } from "react-icons/hi";
import { useGetItems } from "../../../hooks/useGetItems";
import { getAllItems } from "../../../services/apiServices";
import SelectInput from "../../../ui/SelectInput";

function FormDriverClientSection({ errors, control }) {
  const { data: clients, isPending: isLoadingClients } = useGetItems(
    "clients",
    () => getAllItems("clients"),
  );
  const { data: drivers, isPending: isLoadingDrivers } = useGetItems(
    "drivers",
    () => getAllItems("drivers"),
  );
  return (
    <div className="mt-4 flex flex-col gap-3">
      <SecondaryHeading>Driver & Client</SecondaryHeading>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <FormInputBox>
          <Label labelName={"Driver"}>
            <HiOutlineUser className="text-orange-400" />
          </Label>
          {!isLoadingDrivers && (
            <SelectInput
              placeholder="Select Driver"
              name="driver"
              control={control}
              options={drivers}
              optionName="name"
              errMsg="Please select any driver for trip"
              value={"_id"}
            />
          )}
          {errors?.driver && (
            <EmptyFieldErrorMessage message={errors.driver.message} />
          )}
        </FormInputBox>

        <FormInputBox>
          <Label labelName={"Client"}>
            <HiOutlineUsers className="text-green-400" />
          </Label>
          {!isLoadingClients && (
            <SelectInput
              placeholder="Select Client"
              name="client"
              control={control}
              options={clients}
              optionName="name"
              errMsg="Please select any driver for trip"
              value={"_id"}
            />
          )}
          {errors?.client && (
            <EmptyFieldErrorMessage message={errors.client.message} />
          )}
        </FormInputBox>
      </div>
    </div>
  );
}

export default FormDriverClientSection;
