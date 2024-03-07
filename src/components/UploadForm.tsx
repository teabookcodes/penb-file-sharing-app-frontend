import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

function UploadForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    file: null as File | null,
    clientEmail: "",
  });

  useEffect(() => {
    if (formData.price < 0) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        price: 0,
      }));
    }
  }, [formData.price]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    setFormData((prevData) => ({ ...prevData, file: file || null }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data) {
        toast.success("Soubor byl úspěšně nahrán a odeslán klientovi");
      }
    } catch (error) {
      toast.error("Při nahrávání souboru se vyskytla chyba");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="max-w-xs mx-auto"
    >
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Název zakázky
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-secondary focus:border-secondary block w-full p-2.5"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Poznámka
        </label>
        <input
          type="text"
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-secondary focus:border-secondary block w-full p-2.5"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Cena (v Kč)
        </label>
        <input
          type="number"
          id="price"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-secondary focus:border-secondary block w-full p-2.5"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="clientEmail"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email klienta
        </label>
        <input
          type="text"
          id="clientEmail"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-secondary focus:border-secondary block w-full p-2.5"
          value={formData.clientEmail}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="file"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Soubor
        </label>
        <input
          type="file"
          id="file"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-secondary focus:border-secondary block w-full p-2.5"
          onChange={handleFileInputChange}
          required
        />
      </div>
      <button
        type="submit"
        className="mx-auto block text-white bg-primary hover:bg-primaryDarker focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center"
      >
        Odeslat
      </button>
    </form>
  );
}

export default UploadForm;
