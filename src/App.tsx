import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import DownloadPage from "./DownloadPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import UploadPage from "./UploadPage";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { PublicLayout } from "./components/PublicLayout";
import "./index.css";

function App() {
  return (
    <div className="container min-h-screen pt-4 mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/:id" element={<DownloadPage />}></Route>
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/upload" element={<UploadPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
