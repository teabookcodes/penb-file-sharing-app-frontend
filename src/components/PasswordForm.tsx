import axios from "axios";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";

interface PasswordFormProps {
  fileId: string | undefined;
  setVerified: Dispatch<SetStateAction<boolean>>;
  setFileData: Dispatch<SetStateAction<JSON | null>>;
  setGeneralPassword: Dispatch<SetStateAction<string>>;
}

function PasswordForm({
  fileId,
  setVerified,
  setFileData,
  setGeneralPassword,
}: PasswordFormProps) {
  const [formData, setFormData] = useState({
    id: fileId,
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/verify-password",
        formData
      );
      if (response.data) {
        setVerified(true);
        setFileData(response.data);
        setGeneralPassword(formData.password);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
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
        Potvrdit
      </button>
    </form>
  );
}

export default PasswordForm;
