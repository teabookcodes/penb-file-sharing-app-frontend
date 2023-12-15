import { useState } from "react";
import { useParams } from "react-router-dom";
import DownloadForm from "./components/DownloadForm";

export default function DownloadPage() {
  const [verified, setVerified] = useState(true);
  const fileData = {
    name: "Testovací zakázka",
    description: "Test",
    price: 30,
    file: null as File | null,
    createdAt: Date.now(),
  };
  const [password, setPassword] = useState("");

  return (
    <div className="w-full">
      <h1 className="text-2xl text-center font-bold text-secondary uppercase">
        Stáhnout soubor
      </h1>
      <div className="mt-4">
        {verified && <DownloadForm fileData={fileData} password={password} />}
      </div>
    </div>
  );
}
