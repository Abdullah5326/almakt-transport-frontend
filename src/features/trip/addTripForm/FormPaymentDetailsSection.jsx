import Input from "../../../ui/Input";
import Label from "../../../ui/Label";
import SecondaryHeading from "../../../ui/SecondaryHeading";
import FormInputBox from "../../../ui/FormInputBox";
import EmptyFieldErrorMessage from "../../../ui/EmptyFieldErrorMessage";
import SelectInput from "../../../ui/SelectInput";
import { HiOutlineCurrencyDollar, HiOutlineCreditCard } from "react-icons/hi";

function FormPaymentDetailsSection({ register, errors, control }) {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <SecondaryHeading>Payment Details</SecondaryHeading>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
        <FormInputBox>
          <Label labelName={"Trip Price"}>
            <HiOutlineCurrencyDollar className="text-orange-400 h-5 w-5" />
          </Label>
          <Input
            placeholder="50000"
            type="number"
            name="tripPrice"
            labelName="trip price"
            register={register}
          />
          {errors?.tripPrice && (
            <EmptyFieldErrorMessage message={errors.tripPrice.message} />
          )}
        </FormInputBox>

        <FormInputBox>
          <Label labelName={"Received Amount"}>
            <HiOutlineCurrencyDollar className="text-green-400 h-5 w-5" />
          </Label>
          <input
            placeholder="32000"
            type="number"
            name="receivedAmount"
            className="border-stone-200 w-full bg-white h-10 px-3 rounded-lg placeholder:text-sm outline-orange-400 text-stone-900"
            {...register("receivedAmount", {
              required: "The received amount is required",
              validate: (value, trip) =>
                trip.tripPrice >= value ||
                "The received amount is always less than trip price.",
            })}
          />
          {errors?.receivedAmount && (
            <EmptyFieldErrorMessage message={errors.receivedAmount.message} />
          )}
        </FormInputBox>

        <FormInputBox>
          <Label labelName="Paid To">
            <HiOutlineCurrencyDollar className="text-stone-900 h-5 w-5" />
          </Label>
          <SelectInput
            name="paidTo"
            control={control}
            options={[
              { label: "Owner", value: "owner" },
              { label: "Driver", value: "driver" },
            ]}
            optionName="label"
            placeholder="Select recipient"
          />
          {errors?.paidTo && (
            <EmptyFieldErrorMessage message={errors.paidTo.message} />
          )}
        </FormInputBox>

        <FormInputBox>
          <Label labelName={"Payment Method"}>
            <HiOutlineCreditCard className="text-orange-400 h-5 w-5" />
          </Label>
          <SelectInput
            name="paymentMethod"
            control={control}
            options={[
              { label: "Cash", value: "cash" },
              { label: "Online", value: "online" },
              { label: "Credit", value: "credit" },
            ]}
            optionName="label"
            placeholder="Payment Method"
          />
          {errors?.paymentMethod && (
            <EmptyFieldErrorMessage message={errors.paymentMethod.message} />
          )}
        </FormInputBox>
      </div>
    </div>
  );
}

export default FormPaymentDetailsSection;
