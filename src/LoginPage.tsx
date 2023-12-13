import { Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { useAuth } from "./hooks/useAuth";

export default function LoginPage() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full">
      <LoginForm />
    </div>
  );
}
