import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function ProtectedLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="flex flex-col gap-2 items-center justify-center">
        <Link to="/">
          <img src="../../logo.svg" />
        </Link>
        <h1 className="text-xl text-gray-400">File Sharing</h1>
      </div>
      <div className="-z-10 absolute bottom-0 flex items-center justify-center">
        <img src="../../hero.png" />
      </div>
      <div className="mt-12 max-w-xs mx-auto flex flex-col gap-4">
        <Outlet />
      </div>
    </div>
  );
}
