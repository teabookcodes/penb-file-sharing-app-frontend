import { useState } from "react";
import TestDownloadForm from "./components/TestDownloadForm";

export type FileData = {
  name: string;
  description: string;
  price: number;
  file: File | null;
  createdAt: number;
};

export default function DownloadPage() {
  const [verified] = useState(true);
  const fileData: FileData = {
    name: "Testovací zakázka",
    description: "Test",
    price: 30,
    file: null,
    createdAt: Date.now(),
  };
  const [password] = useState("");

  return (
    <div className="w-full">
      <h1 className="text-2xl text-center font-bold text-secondary uppercase">
        Stáhnout soubor
      </h1>
      <div className="mt-4">
        {verified && (
          <TestDownloadForm fileData={fileData} password={password} />
        )}
      </div>
    </div>
  );
}
