function AdminSidebarItem() {
  return (
    <div className="flex gap-2">
      <img
        src="images/default.jpg"
        alt="user image"
        className="rounded-full h-9 "
      />
      <p className="flex flex-col">
        <span className="text-sm">Atif Khan</span>
        <span className="text-xs text-stone-400">Admin</span>
      </p>
    </div>
  );
}

export default AdminSidebarItem;
