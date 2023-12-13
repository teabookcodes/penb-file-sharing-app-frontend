import UploadForm from "./components/UploadForm";

export default function UploadPage() {
  return (
    <div className="w-full">
      <h1 className="text-2xl text-center font-bold text-secondary uppercase">
        Nahrát soubor
      </h1>
      <div className="mt-4">
        <UploadForm />
      </div>
    </div>
  );
}
