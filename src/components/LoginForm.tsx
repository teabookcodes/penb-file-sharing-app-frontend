import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import { useAuth } from "../hooks/useAuth";

function LoginForm() {
  const [formData, setFormData] = useState({
    login: "penbupload",
    password: "admin10122023",
  });

  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        formData
      );
      const token = response.data;
      login(token);
      setError(null);
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Neplatné přihlašovací údaje. Zkuste to prosím znovu.");
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      {error && (
        <div className="text-red-500 text-sm mb-5">
          <p>{error}</p>
        </div>
      )}
      <div className="mb-5">
        <label
          htmlFor="login"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Login
        </label>
        <input
          type="text"
          id="login"
          name="login"
          value={formData.login}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-secondary focus:border-secondary block w-full p-2.5"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Heslo
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-secondary focus:border-secondary block w-full p-2.5"
          required
        />
      </div>
      <button
        type="submit"
        className="mx-auto block text-white bg-primary hover:bg-primaryDarker focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center"
      >
        Přihlásit se
      </button>
    </form>
  );
}

export default LoginForm;
