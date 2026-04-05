import Label from "../../../ui/Label";
import SecondaryHeading from "../../../ui/SecondaryHeading";
import FormInputBox from "../../../ui/FormInputBox";
import EmptyFieldErrorMessage from "../../../ui/EmptyFieldErrorMessage";
import { HiOutlineCalendar, HiOutlineClock } from "react-icons/hi";

function FormScheduleSection({ register, errors }) {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <SecondaryHeading>Schedule</SecondaryHeading>
      <div className="flex justify-between gap-6">
        <FormInputBox>
          <Label labelName={"Trip Date"}>
            <HiOutlineCalendar className="text-orange-400" />
          </Label>
          <input
            type="date"
            placeholder="2026/03/25"
            name="startDate"
            className="border-stone-200 w-full bg-white h-10 px-3 rounded-lg placeholder:text-sm outline-orange-400 text-stone-900"
            {...register("startDate", {
              required: "The start date is required",
            })}
          />
          {errors?.startDate && (
            <EmptyFieldErrorMessage message={errors.startDate.message} />
          )}
        </FormInputBox>
        <FormInputBox>
          <Label labelName={"Deadline Date"}>
            <HiOutlineClock className="text-red-500" />
          </Label>
          <input
            type="date"
            placeholder={"2026/05/02"}
            name="deadlineDate"
            className="border-stone-200 w-full bg-white h-10 px-3 rounded-lg placeholder:text-sm outline-orange-400 text-stone-900"
            {...register("deadlineDate", {
              required: "The deadline date is required",
              validate: (deadlineDate, trip) =>
                new Date(trip.startDate).getTime() <
                  new Date(trip.deadlineDate).getTime() ||
                "The deadline date is always come after the start date",
            })}
          />
          {errors?.deadlineDate && (
            <EmptyFieldErrorMessage message={errors.deadlineDate.message} />
          )}
        </FormInputBox>
      </div>
    </div>
  );
}

export default FormScheduleSection;
