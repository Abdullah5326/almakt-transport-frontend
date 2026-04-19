function ProfilePersonalSectionItem({ name, value }) {
  return (
    <p className="flex flex-col gap-2">
      <span className="text-stone-500 text-sm">{name}</span>
      <span>{value}</span>
    </p>
  );
}

export default ProfilePersonalSectionItem;
