import { useState } from "react";
import { useParams } from "react-router-dom";
import DownloadForm from "./components/DownloadForm";
import PasswordForm from "./components/PasswordForm";

export default function DownloadPage() {
  const { id } = useParams();
  const [verified, setVerified] = useState(false);
  const [fileData, setFileData] = useState<JSON | null>(null);
  const [password, setPassword] = useState("");

  return (
    <div className="w-full">
      <h1 className="text-2xl text-center font-bold text-secondary uppercase">
        Stáhnout soubor
      </h1>
      <div className="mt-4">
        {!verified && (
          <PasswordForm
            fileId={id}
            setVerified={setVerified}
            setFileData={setFileData}
            setGeneralPassword={setPassword}
          />
        )}
        {verified && <DownloadForm fileData={fileData} password={password} />}
      </div>
    </div>
  );
}
