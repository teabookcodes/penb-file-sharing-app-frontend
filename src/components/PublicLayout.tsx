import { Link, Outlet } from "react-router-dom";

export function PublicLayout() {
  return (
    <>
      <div className="max-w-6xl mx-auto py-8">
        <div className="flex flex-col gap-2 items-center justify-center">
          <Link to="/">
            <img src="../../logo.svg" />
          </Link>
          <h1 className="text-xl text-gray-400">File Sharing</h1>
        </div>
        <div className="mt-12 max-w-xs mx-auto">
          <Outlet />
        </div>
      </div>
      <div className="-z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl overflow-hidden">
        <img
          src="../../hero.png"
          className="h-48 sm:h-56 md:h-72 lg:h-80 w-full object-cover"
        />
      </div>
    </>
  );
}
