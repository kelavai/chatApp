import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SignInForm } from "../components/SignInForm";
import { AppContext } from "../contexts/AppContext";
import "../styles/SignInPage.css";

export function SignInPage() {
  const context = useContext(AppContext);

  function handleSubmit(formData) {
    context.setUsername(formData.username);
    context.setAvatarIndex(formData.avatarIndex);
  }

  if (context.isSignedIn) {
    return <Navigate to="/chat" replace />;
  }

  return (
    <div className="sign-in-page">
      <div className="card">
        <h1 className="card-title">Sign In</h1>
        <SignInForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

