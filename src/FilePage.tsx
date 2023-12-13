import axios from "axios";
import { saveAs } from "file-saver";
import { useEffect } from "react";
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
        `http://localhost:8000/file/${id}`,
        { password },
        { responseType: "blob" }
      );

      const contentDisposition = response.headers["content-disposition"];
      const fileNameMatch =
        contentDisposition && contentDisposition.match(/filename="(.+)"$/);
      const fileName = fileNameMatch ? fileNameMatch[1] : "downloaded-file";

      saveAs(response.data, fileName);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  }

  return <></>;
}
