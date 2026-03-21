function Layout() {
  return (
    <div className="h-dvh flex">
      <sidebar className="bg-white w-50 ">
        <h1>Sidebar</h1>
      </sidebar>
      <div className="flex flex-col w-full">
        <nav className="">Nav</nav>
        <main className="bg-stone-100 h-full w-full flex justify-center items-center text-9xl text-orange-500 font-bold">
          Atif finally your project is start
        </main>
      </div>
    </div>
  );
}

export default Layout;
