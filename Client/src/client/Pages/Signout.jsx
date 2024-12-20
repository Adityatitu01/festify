import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../store/auth-context";

const Signout = () => {
  const { SignoutUSer } = useAuth();

  useEffect(() => {
    SignoutUSer();
  }, [SignoutUSer]);

  return <Navigate to="/login" />;
};

export default Signout;
