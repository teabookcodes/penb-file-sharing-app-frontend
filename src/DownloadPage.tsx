import { useState } from "react";
import { useParams } from "react-router-dom";
import PasswordForm from "./components/PasswordForm";
import PayForm from "./components/PayForm";

export default function DownloadPage() {
  const { id } = useParams();
  const [verified, setVerified] = useState(false);
  const [fileData, setFileData] = useState<JSON | null>(null);
  const [password, setPassword] = useState("");
  // const [paid, setPaid] = useState(false);

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-center uppercase text-secondary">
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
        {verified && <PayForm fileData={fileData} password={password} />}
        {/* {verified && paid && (
          <DownloadForm fileData={fileData} password={password} />
        )} */}
      </div>
    </div>
  );
}
