import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button onClick={() => loginWithRedirect()} className="btn btn-success"> Iniciar Sesión </button>
    </div>
  );
};

export default LoginButton;