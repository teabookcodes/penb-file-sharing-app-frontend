import { FaUpload } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

export default function HomePage() {
  const { logout } = useAuth();

  return (
    <div className="w-full flex flex-col gap-4">
      <Link to="/upload">
        <button
          type="button"
          className="mx-auto flex gap-2 items-center justify-center text-white bg-secondary hover:bg-secondaryDarker focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center"
        >
          <FaUpload />
          Nahrát a sdílet soubor
        </button>
      </Link>
      <button
        onClick={() => logout()}
        type="button"
        className="mx-auto flex gap-2 items-center justify-center text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center"
      >
        Odhlásit se
      </button>
    </div>
  );
}
