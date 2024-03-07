import PayForm from "./components/PayForm";

export default function DownloadPage() {
  const fileData = null;
  // const [password, setPassword] = useState("");
  // const [paid, setPaid] = useState(false);

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-center uppercase text-secondary">
        Stáhnout soubor
      </h1>
      <div className="mt-4">
        <PayForm fileData={fileData} />
      </div>
    </div>
  );
}
