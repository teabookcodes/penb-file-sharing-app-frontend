import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCoins, FaCreditCard, FaUpload } from "react-icons/fa6";
import { ColorRing } from "react-loader-spinner";
import { useParams } from "react-router-dom";

interface FileData {
  name: string;
  description: string;
  price: number;
  createdAt?: Date;
}

interface DownloadFormProps {
  fileData: JSON | null;
}

function PayForm({ fileData }: DownloadFormProps) {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const parsedFileData = JSON.parse(JSON.stringify(fileData)) as FileData;
  const uploadDate = parsedFileData.createdAt
    ? new Date(parsedFileData.createdAt).toLocaleString("cs-CZ", {
        weekday: "long",
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      })
    : null;
  async function payFile() {
    setLoading(true);
    setTimeout(() => {}, 3000);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/file/${id}`
      );

      if (response.status === 200) {
        window.location.href = response.data;
      }
    } catch (error) {
      toast.error("Při platbě nebo stahování souboru se vyskytla chyba");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      <div className="p-4 my-4 text-center border rounded-md border-primary backdrop-blur-sm">
        <h3 className="text-xl">{parsedFileData.name}</h3>
        <span className="inline-flex items-center gap-2 text-xs text-gray-400">
          <FaUpload /> {uploadDate ? uploadDate : ""}
        </span>
        <p className="text-gray-400">
          {parsedFileData.description
            ? parsedFileData.description
            : "Bez popisu"}
        </p>
        <span className="inline-flex items-center gap-2 mt-2">
          <FaCoins /> {parsedFileData.price} CZK
        </span>
      </div>

      {loading ? (
        <div className="flex justify-center">
          <ColorRing
            visible={true}
            height="40"
            width="40"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#f08c00", "#d77d00", "#ce1a1c", "#f08c00", "#d77d00"]}
          />
        </div>
      ) : (
        <button
          onClick={() => payFile()}
          className="mx-auto flex gap-2 items-center justify-center text-white bg-primary hover:bg-primaryDarker focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center"
        >
          <FaCreditCard />
          Zaplatit
        </button>
      )}
    </div>
  );
}

export default PayForm;
