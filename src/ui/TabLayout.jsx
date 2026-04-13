import PrimaryHeading from "./PrimaryHeading";

function TabLayout({ children, name, description }) {
  return (
    <div className="lg:p-8 p-4">
      <div className="mb-10">
        <PrimaryHeading>{name}</PrimaryHeading>
        <p>{description}</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 items-start text-sm md:text-[16px] lg:items-center mt-6 mb-13 justify-between lg:pr-8"></div>
      <div className="lg:pr-8">{children}</div>
    </div>
  );
}

export default TabLayout;
