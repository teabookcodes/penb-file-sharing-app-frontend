import axios from "axios";
import { saveAs } from "file-saver";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function FilePage() {
  const { id } = useParams();
  const password = "1234";

  useEffect(() => {
    downloadFile();
  }, [id]);

  async function downloadFile() {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/file/${id}`,
        { password },
        { responseType: "blob" }
      );

      const contentDisposition = response.headers["content-disposition"];
      const fileNameMatch =
        contentDisposition && contentDisposition.match(/filename="(.+)"$/);
      const fileName = fileNameMatch ? fileNameMatch[1] : "downloaded-file";

      saveAs(response.data, fileName);
    } catch (error) {
      toast.error("Při stahování souboru se vyskytla chyba");
    }
  }

  return <></>;
}
